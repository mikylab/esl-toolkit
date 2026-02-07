/**
 * Taboo Game - JavaScript
 */

const wordBanks = {
  A2: [
    { word: "Dog", forbidden: ["bark", "pet", "animal", "tail", "walk"] },
    { word: "Chair", forbidden: ["sit", "table", "wood", "seat", "legs"] },
    { word: "Apple", forbidden: ["fruit", "red", "tree", "eat", "sweet"] },
    { word: "Bus", forbidden: ["ride", "stop", "public", "driver", "transport"] },
    { word: "Shoe", forbidden: ["foot", "wear", "walk", "pair", "lace"] },
    { word: "Sun", forbidden: ["hot", "day", "sky", "yellow", "shine"] },
    { word: "Water", forbidden: ["drink", "bottle", "liquid", "thirst", "clear"] },
    { word: "Pen", forbidden: ["write", "ink", "paper", "draw", "blue"] },
    { word: "School", forbidden: ["teacher", "student", "learn", "class", "homework"] },
    { word: "Book", forbidden: ["read", "pages", "library", "story", "author"] },
    { word: "Car", forbidden: ["drive", "wheels", "engine", "road", "fast"] },
    { word: "Milk", forbidden: ["white", "drink", "cow", "cold", "glass"] },
    { word: "Cat", forbidden: ["meow", "animal", "pet", "fur", "tail"] },
    { word: "Table", forbidden: ["eat", "legs", "chair", "wood", "dinner"] },
    { word: "Tree", forbidden: ["leaves", "green", "forest", "grow", "trunk"] },
    { word: "Bike", forbidden: ["ride", "pedal", "helmet", "road", "wheel"] },
    { word: "Ice cream", forbidden: ["cold", "sweet", "dessert", "cone", "flavor"] },
    { word: "Ball", forbidden: ["throw", "kick", "game", "round", "bounce"] },
    { word: "Bed", forbidden: ["sleep", "pillow", "blanket", "night", "rest"] },
    { word: "Hat", forbidden: ["head", "wear", "cap", "sun", "cover"] },
    { word: "Clock", forbidden: ["time", "hour", "watch", "minute", "tick"] },
    { word: "Bird", forbidden: ["fly", "wings", "nest", "sky", "chirp"] },
    { word: "Window", forbidden: ["glass", "see", "open", "close", "wall"] },
    { word: "Egg", forbidden: ["break", "cook", "breakfast", "white", "yolk"] },
    { word: "Banana", forbidden: ["yellow", "fruit", "monkey", "peel", "sweet"] },
    { word: "Door", forbidden: ["open", "close", "room", "knob", "enter"] },
    { word: "Train", forbidden: ["tracks", "station", "ride", "travel", "rail"] },
    { word: "Nose", forbidden: ["smell", "face", "sniff", "breath", "air"] },
    { word: "Fish", forbidden: ["swim", "water", "ocean", "scales", "sea"] },
    { word: "Dress", forbidden: ["wear", "clothes", "woman", "pretty", "color"] }
  ],
  B1: [
    { word: "School", forbidden: ["student", "teacher", "class", "learn", "homework"] },
    { word: "Pizza", forbidden: ["cheese", "tomato", "slice", "eat", "food"] },
    { word: "Airplane", forbidden: ["fly", "pilot", "sky", "airport", "travel"] },
    { word: "Holiday", forbidden: ["vacation", "travel", "beach", "relax", "trip"] },
    { word: "Restaurant", forbidden: ["food", "menu", "waiter", "eat", "table"] },
    { word: "Library", forbidden: ["books", "read", "quiet", "study", "borrow"] },
    { word: "Weather", forbidden: ["rain", "sun", "cloud", "cold", "hot"] },
    { word: "Friend", forbidden: ["people", "talk", "help", "trust", "like"] },
    { word: "Computer", forbidden: ["keyboard", "mouse", "screen", "internet", "technology"] },
    { word: "Music", forbidden: ["song", "listen", "dance", "band", "sound"] },
    { word: "Movie", forbidden: ["film", "watch", "cinema", "actor", "screen"] },
    { word: "Garden", forbidden: ["flowers", "plants", "grass", "grow", "outside"] },
    { word: "Market", forbidden: ["buy", "sell", "food", "shop", "price"] },
    { word: "Phone", forbidden: ["call", "ring", "number", "talk", "text"] },
    { word: "Family", forbidden: ["mother", "father", "brother", "sister", "home"] },
    { word: "Train", forbidden: ["station", "rail", "travel", "carriage", "tracks"] },
    { word: "Beach", forbidden: ["sand", "sea", "sun", "swim", "waves"] },
    { word: "Hospital", forbidden: ["doctor", "nurse", "patient", "medicine", "ill"] },
    { word: "Dance", forbidden: ["move", "music", "party", "step", "floor"] },
    { word: "Job", forbidden: ["work", "money", "office", "boss", "career"] },
    { word: "Cinema", forbidden: ["movie", "film", "actor", "screen", "popcorn"] },
    { word: "Sport", forbidden: ["game", "team", "win", "play", "exercise"] },
    { word: "Dinner", forbidden: ["eat", "food", "table", "meal", "evening"] },
    { word: "City", forbidden: ["buildings", "people", "cars", "streets", "town"] },
    { word: "Coffee", forbidden: ["drink", "cup", "hot", "morning", "cafe"] },
    { word: "Ticket", forbidden: ["train", "buy", "travel", "seat", "entry"] },
    { word: "Airport", forbidden: ["plane", "flight", "travel", "luggage", "check-in"] },
    { word: "Bookstore", forbidden: ["books", "shop", "read", "buy", "author"] },
    { word: "Museum", forbidden: ["art", "history", "visit", "exhibit", "paintings"] },
    { word: "Meal", forbidden: ["food", "eat", "dinner", "evening", "table"] }
  ],
  B2: [
    { word: "Government", forbidden: ["law", "president", "country", "vote", "minister"] },
    { word: "Technology", forbidden: ["computer", "internet", "science", "device", "modern"] },
    { word: "Environment", forbidden: ["pollution", "nature", "green", "climate", "planet"] },
    { word: "Education", forbidden: ["school", "teacher", "student", "learn", "system"] },
    { word: "Economy", forbidden: ["money", "market", "job", "trade", "business"] },
    { word: "Pollution", forbidden: ["air", "dirty", "trash", "environment", "factory"] },
    { word: "Culture", forbidden: ["tradition", "country", "language", "custom", "people"] },
    { word: "Opportunity", forbidden: ["chance", "job", "luck", "future", "success"] },
    { word: "Leadership", forbidden: ["leader", "team", "decision", "guide", "president"] },
    { word: "Volunteer", forbidden: ["help", "free", "work", "charity", "support"] },
    { word: "Ambition", forbidden: ["goal", "dream", "success", "achieve", "plan"] },
    { word: "Challenge", forbidden: ["difficult", "problem", "test", "try", "task"] },
    { word: "Influence", forbidden: ["change", "power", "affect", "person", "leader"] },
    { word: "Global", forbidden: ["world", "countries", "international", "planet", "travel"] },
    { word: "Health", forbidden: ["doctor", "exercise", "diet", "hospital", "body"] },
    { word: "Media", forbidden: ["news", "TV", "internet", "information", "journalist"] },
    { word: "Innovation", forbidden: ["new", "technology", "invent", "create", "idea"] },
    { word: "Pressure", forbidden: ["stress", "work", "deadline", "expect", "force"] },
    { word: "Journey", forbidden: ["trip", "travel", "long", "adventure", "path"] },
    { word: "Strategy", forbidden: ["plan", "game", "approach", "tactic", "goal"] },
    { word: "Society", forbidden: ["people", "group", "rules", "culture", "community"] },
    { word: "Resource", forbidden: ["material", "natural", "energy", "use", "limited"] },
    { word: "Confidence", forbidden: ["believe", "self", "sure", "trust", "ability"] },
    { word: "Respect", forbidden: ["honor", "listen", "value", "person", "treat"] },
    { word: "Communication", forbidden: ["talk", "message", "speak", "understand", "listen"] },
    { word: "Experience", forbidden: ["life", "event", "learn", "job", "past"] },
    { word: "Security", forbidden: ["safe", "protect", "danger", "guard", "risk"] },
    { word: "Talent", forbidden: ["skill", "ability", "gift", "natural", "special"] },
    { word: "Relationship", forbidden: ["love", "friend", "couple", "partner", "together"] },
    { word: "Discussion", forbidden: ["talk", "opinion", "conversation", "debate", "meeting"] }
  ]
};

let fullCardList = [];
let remainingCards = [];
let score1 = 0;
let score2 = 0;
let timer;
let timeLeft = 60;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectLevel() {
  const level = document.getElementById("levelSelect").value;
  if (level === "ALL") {
    fullCardList = [...wordBanks.A2, ...wordBanks.B1, ...wordBanks.B2];
  } else {
    fullCardList = [...wordBanks[level]];
  }
  shuffle(fullCardList);
  remainingCards = [...fullCardList];
  displayCard();
}

function displayCard() {
  if (remainingCards.length === 0) {
    alert("All cards have been used! Reset to play again.");
    return;
  }
  const card = remainingCards.pop();
  document.getElementById("targetWord").innerText = card.word;
  document.getElementById("forbiddenWords").innerText = "Forbidden: \n" + card.forbidden.join(", ");
  resetTimer();
}

function nextCard() {
  clearInterval(timer);
  displayCard();
}

function incrementScore(player) {
  if (player === 'player1') {
    score1++;
    document.getElementById("score1").innerText = score1;
  } else if (player === 'player2') {
    score2++;
    document.getElementById("score2").innerText = score2;
  }
  nextCard();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 60;
  document.getElementById("timer").innerText = "Time: " + timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function resetGame() {
  clearInterval(timer);
  selectLevel();
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = 0;
  document.getElementById("score2").innerText = 0;
}

// Initial setup
selectLevel();
