/**
 * Blank Slate & Name Five Game - JavaScript
 */

const blankSlatePrompts = [
  "birthday ___", "school ___", "___ party", "ice ___", "fast ___",
  "___ car", "___ cake", "blue ___", "video ___", "___ time",
  "movie ___", "hot ___", "___ game", "sunny ___", "___ food",
  "___ music", "funny ___", "___ friend", "music ___", "___ day",
  "sports ___", "___ teacher", "happy ___", "green ___", "___ light",
  "___ job", "___ bus", "beach ___", "___ weather", "class ___",
  "___ story", "___ dog", "clean ___", "___ phone", "big ___",
  "cold ___", "long ___", "morning ___", "___ book", "family ___",
  "___ problem", "easy ___", "good ___", "new ___", "home ___",
  "___ movie", "summer ___", "___ pizza", "small ___", "dark ___"
];

const nameFiveCategories = [
  "Fruits", "Animals", "Countries", "Jobs", "Sports",
  "Clothes", "Colors", "Verbs", "Classroom objects", "Foods",
  "Drinks", "Body parts", "Adjectives", "Hobbies", "Transportation",
  "Weather types", "Emotions", "Things in a kitchen", "TV shows", "School subjects",
  "Insects", "Toys", "Things at the beach", "Musical instruments", "Things in your backpack"
];

function showGame(game) {
  document.getElementById('blankSlate').classList.remove('visible');
  document.getElementById('nameFive').classList.remove('visible');

  if (game === 'blankSlate') {
    document.getElementById('blankSlate').classList.add('visible');
    newBlankPrompt();
  } else {
    document.getElementById('nameFive').classList.add('visible');
    newNameFiveCategory();
  }
}

function newBlankPrompt() {
  const prompt = blankSlatePrompts[Math.floor(Math.random() * blankSlatePrompts.length)];
  document.getElementById('blankPrompt').innerText = prompt;
}

function newNameFiveCategory() {
  const category = nameFiveCategories[Math.floor(Math.random() * nameFiveCategories.length)];
  document.getElementById('category').innerText = category;
}
