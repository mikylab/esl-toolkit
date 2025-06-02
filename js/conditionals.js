// --- Game Show mode data ---
const baseScenarios = [
  { text: "If you heat water, it boils.", type: "zero" },
  { text: "If I win the lottery, I'll buy a car.", type: "first" },
  { text: "If I were a bird, I would fly around the world.", type: "second" },
  { text: "If I had studied, I would have passed the exam.", type: "third" },
  { text: "If she had gone to bed early, she would feel better now.", type: "mixed" }
];

// --- Fill-in-the-blank word pools ---

const wordPools = {
nature: {
  zero: [
    { trigger: "If bees don't find flowers", action: "they cannot make honey." },
    { trigger: "If the sun sets", action: "it gets dark quickly." },
    { trigger: "If you leave fruit outside", action: "it spoils fast." }
  ],
  first: [
    { trigger: "If it rains tomorrow", action: "we will stay indoors." },
    { trigger: "If a snake bites you", action: "you will need medical help." },
    { trigger: "If the wind blows hard", action: "the leaves will fall off the trees." }
  ],
  second: [
    { trigger: "If I were a dolphin", action: "I would swim across oceans." },
    { trigger: "If you lived in the forest", action: "you would hear many animals at night." }
  ],
  third: [
    { trigger: "If the fire had started earlier", action: "the forest would have burned more." },
    { trigger: "If I had watered the plants", action: "they would have grown taller." }
  ],
  mixed: [
    { trigger: "If she had caught the bird", action: "she would be showing it to us now." },
    { trigger: "If they had followed the trail", action: "they would be lost now." }
  ]
},
school: {
  zero: [
    { trigger: "If the bell rings", action: "students leave the classroom." },
    { trigger: "If you mix red and blue", action: "you get purple." }
  ],
  first: [
    { trigger: "If the teacher assigns homework", action: "I will finish it tonight." },
    { trigger: "If the students ask questions", action: "the class becomes more interesting." }
  ],
  second: [
    { trigger: "If I were the class president", action: "I would organize more events." },
    { trigger: "If you studied more", action: "you would get better grades." }
  ],
  third: [
    { trigger: "If they had arrived earlier", action: "they would have caught the bus." },
    { trigger: "If I had joined the club", action: "I would have made new friends." }
  ],
  mixed: [
    { trigger: "If she had taken the test seriously", action: "she would feel confident now." }
  ]
},
space: {
  zero: [
    { trigger: "If you enter a spaceship", action: "you must wear a helmet." },
    { trigger: "If stars explode", action: "they create supernovas." }
  ],
  first: [
    { trigger: "If the rocket launches successfully", action: "we will reach Mars in six months." },
    { trigger: "If aliens contact us", action: "we will try to communicate." }
  ],
  second: [
    { trigger: "If I were an astronaut", action: "I would float in zero gravity." },
    { trigger: "If you saw a comet", action: "you would make a wish." }
  ],
  third: [
    { trigger: "If the mission had failed", action: "the crew would have returned early." },
    { trigger: "If I had studied astrophysics", action: "I would have understood the stars better." }
  ],
  mixed: [
    { trigger: "If they had repaired the engine", action: "the ship would be flying now." }
  ]
},
sports: {
  zero: [
    { trigger: "If a player touches the ball with hands", action: "it's a foul." },
    { trigger: "If the whistle blows", action: "the game stops." }
  ],
  first: [
    { trigger: "If our team scores", action: "the crowd will cheer loudly." },
    { trigger: "If you practice daily", action: "you will improve your skills." }
  ],
  second: [
    { trigger: "If I were a coach", action: "I would train harder." },
    { trigger: "If they won the match", action: "they would celebrate all night." }
  ],
  third: [
    { trigger: "If he had played better", action: "he would have won the trophy." },
    { trigger: "If we had arrived earlier", action: "we would have seen the start of the game." }
  ],
  mixed: [
    { trigger: "If she had trained more", action: "she would be competing now." }
  ]
},
technology: {
  zero: [
    { trigger: "If you press the power button", action: "the computer turns on." },
    { trigger: "If the battery dies", action: "the device shuts down." }
  ],
  first: [
    { trigger: "If you download the update", action: "your phone will work faster." },
    { trigger: "If the internet is slow", action: "videos will buffer." }
  ],
  second: [
    { trigger: "If I were a programmer", action: "I would create cool apps." },
    { trigger: "If you lost your password", action: "you would reset it." }
  ],
  third: [
    { trigger: "If the server had crashed", action: "the website would have been offline." },
    { trigger: "If I had backed up my files", action: "I would not have lost my work." }
  ],
  mixed: [
    { trigger: "If she had charged her laptop", action: "it would be working now." }
  ]
},
everyday: {
  zero: [
    { trigger: "If you boil eggs", action: "they become hard." },
    { trigger: "If you mix sugar and water", action: "you get a sweet drink." }
  ],
  first: [
    { trigger: "If I find my keys", action: "I will leave the house." },
    { trigger: "If it snows tomorrow", action: "we will build a snowman." }
  ],
  second: [
    { trigger: "If I were rich", action: "I would travel the world." },
    { trigger: "If you cooked dinner", action: "I would wash the dishes." }
  ],
  third: [
    { trigger: "If I had left earlier", action: "I would have caught the bus." },
    { trigger: "If they had invited me", action: "I would have gone to the party." }
  ],
  mixed: [
    { trigger: "If he had studied law", action: "he would be a lawyer now." }
  ]
}
};


/*const wordPools = {
  nature: {
    zero: [
      { trigger: "If you touch a strange plant", action: "it usually reacts." },
      { trigger: "If lightning strikes nearby", action: "it can start a fire." },
      { trigger: "If you heat water", action: "it boils." }
    ],
    first: [
      { trigger: "If the volcano erupts", action: "people will evacuate." },
      { trigger: "If you get lost in the jungle", action: "you will call for help." },
      { trigger: "If a bear sees you", action: "you'll run away fast." }
    ],
    second: [
      { trigger: "If I were a tree", action: "I would grow tall and strong." },
      { trigger: "If you saw a wolf", action: "you would hide behind a rock." }
    ],
    third: [
      { trigger: "If the storm had passed", action: "the sun would have come out." },
      { trigger: "If I had found a map", action: "I would have escaped easily." }
    ],
    mixed: [
      { trigger: "If she had practiced more", action: "she would be a great singer now." },
      { trigger: "If they had taken the boat", action: "they would be on the island now." }
    ]
  },
  school: {
    zero: [
      { trigger: "If you forget your homework", action: "you get a bad grade." },
      { trigger: "If the fire alarm rings", action: "everyone leaves the room." }
    ],
    first: [
      { trigger: "If you arrive late", action: "the teacher will be angry." },
      { trigger: "If you study hard", action: "you will pass the exam." }
    ],
    second: [
      { trigger: "If I were the principal", action: "I would change the rules." }
    ],
    third: [
      { trigger: "If the teacher had told us", action: "we would have done the homework." }
    ],
    mixed: [
      { trigger: "If I had paid attention", action: "I would understand better now." }
    ]
  },
  space: {
    zero: [
      { trigger: "If gravity stops working", action: "things float away." },
      { trigger: "If you press the wrong button", action: "the alarm sounds." }
    ],
    first: [
      { trigger: "If your spaceship breaks down", action: "you will call for help." },
      { trigger: "If you meet an alien", action: "you will learn new things." }
    ],
    second: [
      { trigger: "If I were an astronaut", action: "I would explore the galaxy." }
    ],
    third: [
      { trigger: "If the ship had landed safely", action: "we would have started exploring." }
    ],
    mixed: [
      { trigger: "If the alien had warned us", action: "we would be prepared now." }
    ]
  }
};*/

const wildCards = [
  "Act it out!",
  "Draw it as a comic!",
  "Translate it to Spanish!",
  "Use a funny sound effect!",
  "Include two animals!",
  "Make it rhyme!",
  "Say it with drama!",
  "Include a magic object!",
  "Tell it as a news report!",
  "Do it in slow motion!",
  "Use an accent!",
  "Include the word 'banana'!",
  "Pretend you're a famous explorer!",
  "Add a dance move!",
  "Do it like a TikTok video!",
  "Use only gestures!",
  "Make it a poem!",
  "Pretend it’s a scary story!"
];

let currentIndex = 0;
let currentMode = "gameShow"; // "gameShow" or "fillBlank"
let scenarios = [...baseScenarios];

// --- Game Show functions ---
function loadScenario() {
  const current = scenarios[currentIndex];
  document.getElementById("scenario").innerText = current.text;
  document.getElementById("result").innerText = "";
  document.getElementById("choices-box").style.display = "block";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selected) {
  const correct = scenarios[currentIndex].type;
  const resultBox = document.getElementById("result");
  if (selected === correct) {
    resultBox.innerText = "✅ Correct! It's the " + correct + " conditional.";
    resultBox.style.color = "green";
  } else {
    resultBox.innerText = "❌ Oops! It's actually the " + correct + " conditional.";
    resultBox.style.color = "red";
  }
  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("choices-box").style.display = "none";
}

function nextPrompt() {
  currentIndex = (currentIndex + 1) % scenarios.length;
  loadScenario();
}

function resetGame() {
  currentIndex = 0;
  if (currentMode === "gameShow") {
    scenarios = [...baseScenarios];
    document.getElementById("game-title").innerText = "Conditional Game Show";
    document.getElementById("gameShow-box").style.display = "block";
    document.getElementById("fillBlank-box").style.display = "none";
    loadScenario();
  } else {
    // reset fillBlank mode prompt area
    document.getElementById("promptCard").innerText = 'Click "New Fill-in-the-Blank Prompt" to start!';
    document.getElementById("wildCard").innerText = '';
  }
}

function toggleMode() {
  if (currentMode === "gameShow") {
    currentMode = "fillBlank";
    document.getElementById("game-title").innerText = "Fill-in-the-Blank Conditionals";
    document.getElementById("gameShow-box").style.display = "none";
    document.getElementById("fillBlank-box").style.display = "block";
    document.querySelector(".toggle-btn").innerText = "Switch to Multiple Choice Mode";
    resetGame();
  } else {
    currentMode = "gameShow";
    document.getElementById("game-title").innerText = "Conditional Game Show";
    document.getElementById("gameShow-box").style.display = "block";
    document.getElementById("fillBlank-box").style.display = "none";
    document.querySelector(".toggle-btn").innerText = "Switch to Fill-in-the-Blank Mode";
    resetGame();
  }
}

// --- Fill-in-the-blank mode function ---
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateFillBlankPrompt() {
  const category = document.getElementById("category").value;
  // randomly pick conditional type:
  const conditionalTypes = ["zero", "first", "second", "third", "mixed"];
  const chosenType = getRandom(conditionalTypes);

  // from wordPools pick a random scenario of that type for the category
  const pool = wordPools[category][chosenType];
  if (!pool || pool.length === 0) {
    document.getElementById("promptCard").innerText = "No prompts found for this conditional type/category.";
    document.getElementById("wildCard").innerText = "";
    return;
  }
  const example = getRandom(pool);

  // Create a fill-in-the-blank sentence, randomly blank either trigger or action
  let sentence;
  if (Math.random() < 0.5) {
    // blank trigger (If ____, ...)
    sentence = `<strong>__________</strong>, ${example.action}`;
  } else {
    // blank action (If ____, ____.)
    sentence = `If ${example.trigger.replace(/^If\s/, '')}, <strong>__________</strong>.`;
  }

  document.getElementById("promptCard").innerHTML = sentence;
  document.getElementById("wildCard").innerText = "Wild Card: " + getRandom(wildCards);
}

// --- Initialize ---
loadScenario();