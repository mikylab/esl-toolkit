/**
 * CodeNames Game - JavaScript
 */

const wordBanks = {
  a2: ["apple", "banana", "chair", "table", "school", "teacher", "book", "pen", "dog", "cat", "house", "window", "door", "friend", "family", "car", "bus", "train", "shoe", "shirt", "happy", "sad", "big", "small", "hot", "cold", "water", "milk", "bread", "cheese", "music", "movie", "game", "play", "run", "walk", "read", "write", "sleep", "wake", "food", "drink", "party", "holiday", "sun", "rain", "snow", "cloud", "sky", "tree", "flower", "grass", "beach", "mountain", "river", "city", "village", "road", "street", "shop", "money", "phone", "computer", "TV", "light", "dark", "clean", "dirty", "fast", "slow", "easy", "hard", "old", "young", "man", "woman", "boy", "girl", "morning", "evening", "week", "month", "year", "day", "night", "color", "red", "blue", "green", "yellow", "black", "white", "orange", "pink", "purple", "gray", "number", "one", "two", "three"],
  b1: ["airport", "artist", "bicycle", "camera", "castle", "celebrate", "climate", "concert", "cooking", "culture", "customer", "danger", "desert", "direction", "discount", "doctor", "education", "election", "engineer", "environment", "exercise", "experience", "factory", "festival", "firefighter", "fitness", "forest", "furniture", "future", "garden", "government", "history", "hospital", "hotel", "improve", "information", "invention", "island", "journey", "language", "library", "machine", "market", "message", "museum", "musician", "national", "nature", "neighborhood", "nurse", "ocean", "opinion", "package", "parent", "passenger", "passport", "performance", "personal", "photo", "planet", "population", "positive", "predict", "president", "problem", "project", "protect", "question", "recycle", "region", "relationship", "religion", "repair", "report", "restaurant", "robot", "science", "scientist", "security", "shopping", "singer", "solution", "space", "sport", "station", "storm", "student", "success", "technology", "temperature", "theater", "tourist", "traffic", "transport", "university", "vacation", "vegetable", "village", "volunteer", "weather"],
  b2: ["abandon", "accurate", "adapt", "advantage", "analyze", "anxiety", "appropriate", "argument", "authority", "benefit", "challenge", "circumstance", "collapse", "complex", "concept", "conflict", "consequence", "consumer", "contrast", "contribute", "criticism", "debate", "decline", "define", "demonstrate", "design", "destruction", "device", "disaster", "discipline", "diversity", "economic", "efficient", "emotion", "energy", "enormous", "evidence", "expand", "explanation", "factor", "feature", "financial", "flexible", "function", "goal", "guarantee", "identify", "impact", "imply", "indicate", "individual", "industry", "inform", "initial", "injury", "innovation", "install", "intelligent", "interaction", "interpret", "investigate", "issue", "journal", "justice", "maintain", "majority", "measure", "mental", "method", "minority", "motivate", "negative", "obtain", "outcome", "participant", "perception", "performance", "policy", "positive", "potential", "predict", "previous", "process", "professional", "prohibit", "promotion", "proportion", "proposal", "reaction", "relevant", "require", "research", "resource", "respond", "restrict", "revenue", "role", "section", "source", "strategy"],
  c1: ["acquisition", "advocate", "allocate", "anticipate", "approximate", "assessment", "assumption", "attain", "bias", "capacity", "coherent", "coincide", "commence", "compensation", "complement", "comprehensive", "conceive", "confer", "conform", "consent", "considerable", "constraint", "consult", "contemporary", "contradict", "converse", "correspond", "credibility", "criteria", "crucial", "deduce", "deficit", "derivative", "despite", "devote", "diminish", "distort", "emerge", "empirical", "enforce", "enhance", "entity", "equate", "ethic", "evaluate", "evident", "explicit", "expose", "facilitate", "federal", "finite", "framework", "functionality", "guideline", "hierarchy", "hypothesis", "illustrate", "implication", "incentive", "incidence", "inclination", "inhibit", "initiative", "innovation", "insight", "integral", "integrity", "interact", "intervene", "involve", "isolate", "legislate", "levy", "likewise", "magnitude", "manipulate", "margin", "mature", "mediate", "minimize", "monitor", "neglect", "notion", "objective", "ongoing", "orientation", "perspective", "precede", "precise", "predominant", "presume", "priority", "protocol", "qualitative", "ratio", "recovery", "refine", "regime", "reinforce", "reluctant"]
};

const gridElement = document.getElementById("grid");
const teacherLocations = document.getElementById("teacher-locations");
const studentLocations = document.getElementById("student-locations");
const scoreDisplay = document.getElementById("scores");
const columnLabels = document.getElementById("column-labels");

let teacherKeyWords = new Set();
let studentKeyWords = new Set();
let wordPositions = {};
let wordDivMap = new Map();
let teacherScore = 0;
let studentScore = 0;

function getRandomWords(n, pool, exclude = []) {
  const filtered = pool.filter(word => !exclude.includes(word));
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function updateScores() {
  scoreDisplay.textContent = `Player One: ${teacherScore} | Player Two: ${studentScore}`;
}

function generateGrid() {
  gridElement.innerHTML = "";
  columnLabels.innerHTML = "";
  teacherLocations.textContent = "";
  studentLocations.textContent = "";
  teacherLocations.style.display = 'none';
  studentLocations.style.display = 'none';
  teacherKeyWords.clear();
  studentKeyWords.clear();
  wordPositions = {};
  wordDivMap = new Map();
  teacherScore = 0;
  studentScore = 0;
  updateScores();

  const gridSize = parseInt(document.getElementById("gridSize").value);
  const wordsPerPlayer = parseInt(document.getElementById("wordsPerPlayer").value);
  const wordLevel = document.getElementById("wordLevel").value;

  const wordBank = wordBanks[wordLevel];
  const totalWords = gridSize * gridSize;

  const teacherKeys = getRandomWords(wordsPerPlayer, wordBank);
  const studentKeys = getRandomWords(wordsPerPlayer, wordBank, teacherKeys);
  const used = [...teacherKeys, ...studentKeys];
  const distractors = getRandomWords(totalWords - used.length, wordBank, used);
  const words = [...teacherKeys, ...studentKeys, ...distractors].sort(() => 0.5 - Math.random());

  gridElement.style.setProperty("--grid-size", gridSize);
  gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    const label = document.createElement("span");
    label.textContent = String.fromCharCode(65 + i);
    columnLabels.appendChild(label);
  }

  words.forEach((word, index) => {
    const div = document.createElement("div");
    div.textContent = word;
    div.className = "word";
    div.onclick = () => div.classList.toggle("selected");
    gridElement.appendChild(div);

    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    const pos = `${String.fromCharCode(65 + col)}${row + 1}`;
    wordPositions[word] = pos;
    wordDivMap.set(word, div);
  });

  teacherKeys.forEach(word => teacherKeyWords.add(word));
  studentKeys.forEach(word => studentKeyWords.add(word));

  updateLocationText();
}

function updateLocationText() {
  let teacherText = "Player One's Word Locations:\n";
  teacherKeyWords.forEach(word => {
    teacherText += `${word}: ${wordPositions[word]}\n`;
  });
  teacherLocations.textContent = teacherText;

  let studentText = "Player Two's Word Locations:\n";
  studentKeyWords.forEach(word => {
    studentText += `${word}: ${wordPositions[word]}\n`;
  });
  studentLocations.textContent = studentText;
}

function checkSelection() {
  wordDivMap.forEach((div, word) => {
    if (div.classList.contains("selected")) {
      if (teacherKeyWords.has(word)) {
        div.classList.add("correct", "teacher-key");
        teacherScore++;
      } else if (studentKeyWords.has(word)) {
        div.classList.add("correct", "student-key");
        studentScore++;
      } else {
        div.classList.add("incorrect");
      }
      div.classList.remove("selected");
    }
  });
  updateScores();
}

function revealKey() {
  teacherKeyWords.forEach(word => wordDivMap.get(word)?.classList.add("teacher-key"));
  studentKeyWords.forEach(word => wordDivMap.get(word)?.classList.add("student-key"));
  teacherLocations.style.display = "block";
  studentLocations.style.display = "block";
}

function toggleLocations(role) {
  const el = role === 'teacher' ? teacherLocations : studentLocations;
  const keys = role === 'teacher' ? teacherKeyWords : studentKeyWords;

  const showing = el.style.display === 'none';
  el.style.display = showing ? 'block' : 'none';

  keys.forEach(word => {
    const div = wordDivMap.get(word);
    if (div) {
      div.classList.toggle(role + '-key', showing);
    }
  });
}

// Initialize on page load
window.onload = generateGrid;
