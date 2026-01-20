/**
 * Past Tense Story Game - JavaScript
 */

const situations = [
  "You were late to work.",
  "You missed the bus.",
  "You spilled coffee on your shirt.",
  "You forgot your best friend's birthday.",
  "You lost your phone.",
  "You met a celebrity.",
  "You found a wallet on the street.",
  "You arrived at the wrong house.",
  "You had a flat tire.",
  "You locked yourself out of the house.",
  "You woke up in a strange place.",
  "You accidentally sent a text to the wrong person.",
  "You saw someone who looked exactly like you.",
  "You were caught in the rain with no umbrella.",
  "You got stuck in an elevator.",
  "You heard a strange noise in your house at night.",
  "You burned dinner while trying to impress a guest.",
  "You broke something valuable at a friend's house.",
  "You helped a stranger carry something heavy.",
  "You saw your teacher at the supermarket.",
  "You almost missed your flight.",
  "You got lost in a foreign city.",
  "You adopted a pet unexpectedly.",
  "You received a mysterious letter.",
  "You accidentally wore mismatched shoes all day."
];

const tenses = [
  "Past Simple (e.g. I forgot, I lost)",
  "Past Continuous (e.g. I was walking, I was eating)",
  "Past Perfect (e.g. I had forgotten, I had already left)"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function newPrompt() {
  document.getElementById("situation").innerHTML = "<strong>Situation:</strong> " + getRandom(situations);
  newTense();
  clearStory();
}

function newTense() {
  document.getElementById("tense").innerHTML = "<strong>Use this tense:</strong> " + getRandom(tenses);
}

function submitStory() {
  const input = document.getElementById("userInput").value.trim();
  if (input) {
    const log = document.getElementById("storyLog");
    const newEntry = document.createElement("div");
    newEntry.className = "story-entry";
    newEntry.textContent = input;
    log.appendChild(newEntry);
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();
    newTense();
  }
}

function clearStory() {
  document.getElementById("storyLog").innerHTML = "";
}

// Initialize first prompt
newPrompt();
