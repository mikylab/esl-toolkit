document.addEventListener("DOMContentLoaded", () => {

  let wordList = {};
  let cefrChart;

  // Load CEFR JSON
  fetch('/data/oxford_wordlist_pos.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        wordList[item.headword.toLowerCase()] = {
          level: item.CEFR || 'UNK',
          pos: item.POS_list || []
        };
      });
      console.log('Loaded word list with POS:', Object.keys(wordList).length);
    })
    .catch(err => console.error('Failed to load word list:', err));

  const recordBtn = document.getElementById('recordBtn');
  const transcriptDiv = document.getElementById('transcript');
  const gemsDiv = document.getElementById('gems');
  const percentagesDiv = document.getElementById('percentages');
  const suggestionsDiv = document.getElementById('suggestions');
  const grammarDiv = document.getElementById('grammarResults');

  recordBtn.onclick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support SpeechRecognition");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      recordBtn.textContent = 'Recording...';
      recordBtn.style.backgroundColor = '#ef4444';
      recordBtn.disabled = true;
    };

    recognition.onresult = async (event) => {
      const speech = event.results[0][0].transcript;
      transcriptDiv.innerHTML = `<h3 class='font-semibold'>Transcript</h3><p>${speech}</p>`;
      const tokens = speech.toLowerCase().replace(/[.,!?]/g, '').split(/\s+/);

      analyzeText(speech, tokens);
      updateRepeatedWordsChart(tokens);
      await checkGrammar(speech);
    };

    recognition.onend = () => {
      recordBtn.textContent = 'Start Speaking';
      recordBtn.style.backgroundColor = '#3b82f6';
      recordBtn.disabled = false;
    };

    recognition.start();
  };

  function analyzeText(text, tokens) {
    const counts = {};
    const wordsByLevel = {};
    const posCounts = {};
    gemsDiv.innerHTML = '';

    tokens.forEach(t => {
      const entry = wordList[t] || {level: 'UNK', pos: []};
      const lvl = entry.level;
      const posList = entry.pos;

      counts[lvl] = (counts[lvl] || 0) + 1;
      if (!wordsByLevel[lvl]) wordsByLevel[lvl] = [];
      wordsByLevel[lvl].push(t);

      posList.forEach(p => posCounts[p] = (posCounts[p] || 0) + 1);

      const gem = document.createElement('div');
      gem.className = `gem ${lvl}`;
      gem.setAttribute('data-word', t + (posList.length ? ` (${posList.join(',')})` : ''));
      gemsDiv.appendChild(gem);
    });

    // Display POS counts
    const posOutput = document.getElementById('posOutput');
    posOutput.textContent = Object.keys(posCounts).length > 0
                            ? Object.entries(posCounts).map(([pos, c]) => `${pos}: ${c}`).join('\n')
                            : 'No POS info found. Check your JSON!';

    // CEFR Percentages
    const total = tokens.length;
    const percentages = {};
    for (let lvl in counts) {
      percentages[lvl] = ((counts[lvl]/total)*100).toFixed(2) + '%';
    }
    percentagesDiv.innerHTML = `<h3 class='font-semibold'>CEFR Percentages</h3><pre>${JSON.stringify(percentages, null, 2)}</pre>`;

    // Suggested advanced words
    const advancedWords = Object.keys(wordList)
      .filter(w => ['C1','C2'].includes(wordList[w].level) && !tokens.includes(w));
    const suggestions = advancedWords.sort(() => 0.5 - Math.random()).slice(0,10);
    suggestionsDiv.innerHTML = `<h3 class='font-semibold'>Suggested Advanced Words</h3><p>${suggestions.join(', ')}</p>`;

    // CEFR Chart
    const levels = ['A1','A2','B1','B2','C1','C2','UNK'];
    const chartData = levels.map(lvl => counts[lvl] || 0);
    const ctx = document.getElementById('cefrChart').getContext('2d');
    if (cefrChart) cefrChart.destroy();
    cefrChart = new Chart(ctx, {
      type: 'bar',
      data: { labels: levels, datasets:[{label:'Word Count by CEFR Level', data: chartData, backgroundColor:['#34d399','#60a5fa','#facc15','#f472b6','#a78bfa','#f87171','#d1d5db']}] },
      options: { 
        responsive:true,
        plugins:{
          legend:{display:false},
          tooltip:{
            callbacks:{
              label:function(context){
                const lvl=context.label;
                const words=wordsByLevel[lvl]||[];
                return `${words.length} word(s): ${words.join(', ')}`;
              }
            }
          }
        },
        scales:{y:{beginAtZero:true, precision:0}}
      }
    });
  }

  // ---- Repeated words chart ----
  function updateRepeatedWordsChart(tokens) {
    const counts = {};
    tokens.forEach(t => {
      const word = t.toLowerCase().replace(/[.,!?;:]/g, '');
      if (!word) return;
      counts[word] = (counts[word] || 0) + 1;
    });

    const repeatsDiv = document.getElementById('repeatsDiv');
    repeatsDiv.innerHTML = '';

    const repeatedEntries = Object.entries(counts).filter(([w, c]) => c > 1);

    if (repeatedEntries.length === 0) {
      repeatsDiv.textContent = 'No repeated words';
      return;
    }

    repeatedEntries.forEach(([word, count]) => {
      const bubble = document.createElement('div');
      bubble.textContent = word;
      const size = 30 + count * 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.display = 'flex';
      bubble.style.alignItems = 'center';
      bubble.style.justifyContent = 'center';
      bubble.style.borderRadius = '50%';
      bubble.style.backgroundColor = '#ef4444';
      bubble.style.color = 'white';
      bubble.style.fontWeight = 'bold';
      bubble.style.cursor = 'pointer';
      bubble.style.position = 'relative';
      bubble.setAttribute('data-word', `${count} times`);
      repeatsDiv.appendChild(bubble);
    });
  }

  // ---- Grammar check using LanguageTool ----
  async function checkGrammar(sentence) {
    const feedback = document.getElementById("grammarFeedback");
    feedback.innerHTML = "Checking grammar...";

    try {
      const response = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `text=${encodeURIComponent(sentence)}&language=en-US`
      });
      const data = await response.json();

      if (data.matches.length > 0) {
        feedback.innerHTML = `<span class='error'>Grammar & Spelling Issues:</span><br>` + 
          data.matches.map(error => `❌ ${error.message} <br>`).join("");
      } else {
        feedback.innerHTML = "✅ No grammar or spelling mistakes!";
      }
    } catch (error) {
      feedback.innerHTML = "⚠️ Error checking grammar.";
      console.error("Error checking grammar:", error);
    }
  }

});
