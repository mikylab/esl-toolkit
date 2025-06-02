const starters = [
            "Yesterday, I saw something strange.", "If I had a time machine, I would...",
            "The most unexpected thing happened today...", "She opened the door and couldn't believe what she saw.",
            "I never thought I would meet a talking cat, but...", "The spaceship landed right in front of me.",
            "Once upon a time, there was a lonely dragon.", "A letter arrived with no return address.",
            "I woke up and realized I was in another dimension.", "A strange noise came from the basement.",
            "It was a dark and stormy night when...", "I saw a mysterious figure standing in front of me.",
            "In the middle of the forest, I discovered...", "The treasure map led me to a secret place...",
            "I never expected to find a hidden cave under my house.", "The time traveler told me I had a mission to...",
            "Suddenly, the ground shook and...", "I opened the mysterious box and inside was...",
            "On the other side of the mountain, I found...", "The robot malfunctioned and started to...",
            "The ghost whispered to me from the shadows...", "It was the beginning of a great adventure...",
            "I was climbing the highest mountain when I saw...", "The scientist discovered a new species of...",
            "I received an invitation to an unknown island...", "The wizard handed me the magic potion...",
            "It was a beautiful day, but something strange happened when...", "A loud bang came from the attic...",
            "The boat sailed across the ocean, and suddenly...", "The portal opened and sucked me into...",
            "I received a letter that changed everything...", "In the haunted house, I found a secret room...",
            "The moon was full, and I decided to...", "The spaceship door opened and revealed...",
            "In the desert, I encountered a mysterious creature...", "The robot looked at me and said...",
            "The enchanted forest had a strange glow...", "The old clock tower struck midnight and...",
            "I opened the ancient book and found a spell...", "The magical stone shimmered and...", 
            "I saw a giant in the sky, and it said...", "The wind howled through the trees as I...",
            "I was walking down the street when suddenly...", "I found a hidden door behind the painting...",
            "The princess left the castle and discovered...", "The sword glowed when I touched it...",
            "The storm was raging, but I had to find...", "I was at the train station when I saw...",
            "The dragon circled above the castle, and...", "The knight took his sword and prepared to...",
            "In the old library, I found a forgotten book...", "The snowstorm was so intense that I couldn't...",
            "I woke up to a letter that said I was the chosen one...", "The spaceship crashed into the field, and I..."
        ];
      

        const grammarRules = [
            "Use past tense.", "Include a modal verb (can, should, must).",
            "Use a question in your sentence.", "Include at least one adjective.",
            "Make it a compound sentence using 'and' or 'but'.", "Use present continuous tense.",
            "Make it a negative sentence.", "Use comparative adjectives.",
            "Form a question with 'wh' words (who, what, where, why).", "Use future tense with 'will'.",
            "Use an imperative sentence.", "Include an adverb of time (e.g., yesterday, tomorrow, always).",
            "Make a sentence with 'because' for a reason.", "Use a conjunction to join two ideas.",
            "Use possessive pronouns (my, your, his, her).", "Make a sentence with 'there is/there are'.",
            "Use reflexive pronouns (myself, yourself, etc.).", "Use present perfect tense.",
            "Form a question with auxiliary verbs (do/does).", "Use a superlative adjective."
        ];

        let currentPlayer = 1; 
        
        function generateGrammar(){
          let ruleIndex = Math.floor(Math.random() * grammarRules.length);
          document.getElementById("grammarRule").innerText = grammarRules[ruleIndex];
        }

        function generateSentence() {
            let index = Math.floor(Math.random() * starters.length);
            const starterSentence = document.getElementById("starterSentence").innerText = starters[index];
            //document.getElementById("wordBank").innerText = wordBanks[index].join(", ");
            addSentence(starterSentence);
            generateGrammar()
        }
      

        function checkAndAddSentence() {
            let sentence = document.getElementById("sentenceBox").value.trim();
            if (!sentence) return;

            fetch("https://api.languagetool.org/v2/check", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `text=${encodeURIComponent(sentence)}&language=en-US`
            })
            .then(response => response.json())
            .then(data => {
                let feedback = document.getElementById("grammarFeedback");
                if (data.matches.length > 0) {
                    feedback.innerHTML = `<span class='error'>Grammar & Spelling Issues:</span><br>` + 
                        data.matches.map(error => `❌ ${error.message} <br>`).join("");
                } else {
                    feedback.innerHTML = "✅ No grammar or spelling mistakes!";
                    addSentence(sentence);
                }
            })
            .catch(error => console.error("Error checking grammar:", error));
        }

        

        function addSentence(sentence) {
            let list = document.getElementById("sentenceList");
            let li = document.createElement("li");
            li.innerHTML = `</strong> ${sentence}`;
            list.appendChild(li);

            document.getElementById("sentenceBox").value = ""; // Clear input
            let lastSentence = list.lastElementChild ? list.lastElementChild.innerText : "Click the button to get a sentence.";
            document.getElementById("starterSentence").innerText = lastSentence; 
            togglePlayer();
        }

        function togglePlayer() {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            document.getElementById("currentPlayer").innerText = `Player ${currentPlayer}`;
            generateGrammar()
        }

        function clearSentences() {
            document.getElementById("sentenceList").innerHTML = "";
            document.getElementById("grammarFeedback").innerHTML = "";
            document.getElementById("sentenceBox").value = "";
        }

        function resetGame() {
            clearSentences()
            document.getElementById("starterSentence").innerText = "Click the button to get a sentence.";
            document.getElementById("wordBank").innerText = "";
            document.getElementById("grammarRule").innerText = "";
            document.getElementById("sentenceList").innerHTML = "";
            document.getElementById("grammarFeedback").innerHTML = "";
            document.getElementById("sentenceBox").value = "";
            document.getElementById("currentPlayer").innerText = "Player 1";
            currentPlayer = 1;
        }