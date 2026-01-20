/**
 * Random Question Generator - JavaScript
 */

const banks = {
  travel: ["arrive", "explore", "visit", "travel", "navigate", "sail", "tour", "pack", "board", "depart", "book", "discover", "stay", "meet", "rent", "hike", "camp", "photograph", "climb", "experience", "drive", "fly", "guide", "land", "shop", "souvenir", "wander", "map", "cruise", "unpack", "check", "delay", "enjoy", "budget", "plan", "route", "carry", "view", "search", "catch", "miss", "cross", "reserve", "adventure", "trek"],
  school: ["study", "read", "write", "solve", "experiment", "present", "analyze", "calculate", "organize", "memorize", "revise", "discuss", "argue", "debate", "examine", "explain", "illustrate", "investigate", "record", "report", "summarize", "translate", "compare", "contrast", "research", "understand", "practice", "test", "review", "observe", "participate", "create", "edit", "evaluate", "compose", "listen", "note", "outline", "plan", "propose", "question", "respond", "teach", "learn", "assign", "grade"],
  work: ["collaborate", "present", "attend", "submit", "lead", "schedule", "plan", "design", "update", "coordinate", "negotiate", "analyze", "review", "manage", "supervise", "complete", "communicate", "brainstorm", "calculate", "delegate", "improve", "solve", "research", "develop", "organize", "budget", "advertise", "launch", "promote", "network", "contract", "document", "arrange", "hire", "fire", "interview", "meet", "participate", "share", "train", "visit", "handle", "call", "email", "write", "draft", "prepare", "achieve"],
  food: ["cook", "eat", "taste", "prepare", "serve", "order", "buy", "choose", "pick", "bake", "boil", "fry", "grill", "roast", "blend", "mix", "slice", "chop", "season", "spice", "measure", "pour", "spread", "knead", "wrap", "stuff", "marinate", "carve", "peel", "melt", "simmer", "stir", "crave", "deliver", "share", "feed", "enjoy", "devour", "sample", "treat", "snack", "diet", "flavor", "digest", "chew", "swallow"],
  hobbies: ["paint", "draw", "write", "sing", "dance", "play", "practice", "train", "collect", "build", "create", "explore", "design", "sew", "craft", "knit", "sketch", "act", "perform", "film", "photograph", "compose", "sculpt", "model", "repair", "fix", "garden", "plant", "grow", "bake", "cook", "travel", "volunteer", "study", "learn", "meditate", "blog", "podcast", "record", "edit", "program", "code", "skate", "cycle", "swim", "climb", "camp", "hike"],
  health: ["exercise", "train", "run", "lift", "stretch", "relax", "meditate", "hydrate", "eat", "sleep", "breathe", "walk", "cycle", "swim", "climb", "diagnose", "treat", "heal", "recover", "consult", "prevent", "vaccinate", "injure", "hurt", "strain", "sprain", "break", "prescribe", "check", "measure", "balance", "test", "strengthen", "relieve", "soothe", "protect", "nurture", "support", "care", "observe", "monitor", "counsel", "educate", "motivate", "control", "manage", "plan"],
  technology: ["download", "upload", "click", "save", "send", "receive", "install", "update", "code", "program", "debug", "connect", "stream", "record", "watch", "type", "chat", "message", "email", "call", "scroll", "post", "tweet", "publish", "subscribe", "unsubscribe", "block", "unblock", "search", "browse", "shop", "order", "design", "build", "assemble", "test", "develop", "upgrade", "sync", "charge", "backup", "store", "format", "navigate", "open", "close", "refresh"],
  relationships: ["meet", "talk", "listen", "share", "support", "help", "comfort", "hug", "kiss", "love", "care", "argue", "forgive", "trust", "understand", "respect", "invite", "celebrate", "date", "engage", "marry", "divorce", "separate", "reunite", "visit", "phone", "message", "text", "call", "chat", "email", "introduce", "greet", "farewell", "advise", "guide", "encourage", "praise", "criticize", "warn", "confess", "apologize", "accept", "reject", "join", "leave", "bond", "reconcile"],
  nature: ["hike", "camp", "climb", "explore", "fish", "hunt", "observe", "photograph", "ski", "swim", "surf", "sail", "row", "plant", "grow", "harvest", "garden", "ride", "protect", "preserve", "conserve", "pollute", "damage", "restore", "respect", "recycle", "compost", "clean", "visit", "travel", "wander", "study", "research", "sketch", "paint", "draw", "film", "document", "kayak", "raft", "bike", "board", "snorkel", "dive", "trek", "adventure"]
};

const questionWords = ["What", "Where", "When", "Why", "How", "Who", "Which"];

const questionWordButton = document.getElementById('questionWordButton');
const questionWordDisplay = document.getElementById('questionWordDisplay');
const verbButton = document.getElementById('verbButton');
const verbDisplay = document.getElementById('verbDisplay');
const categorySelect = document.getElementById('categorySelect');
const resetButton = document.getElementById('resetButton');
const randomizeAllButton = document.getElementById('randomizeAllButton');

questionWordButton.addEventListener('click', () => {
  const randomQuestionWord = questionWords[Math.floor(Math.random() * questionWords.length)];
  questionWordDisplay.textContent = randomQuestionWord;
});

verbButton.addEventListener('click', () => {
  const category = categorySelect.value;
  const bank = banks[category];
  const randomWord = bank[Math.floor(Math.random() * bank.length)];
  verbDisplay.textContent = randomWord;
});

resetButton.addEventListener('click', () => {
  questionWordDisplay.textContent = '---';
  verbDisplay.textContent = '---';
});

randomizeAllButton.addEventListener('click', () => {
  questionWordButton.click();
  verbButton.click();
});
