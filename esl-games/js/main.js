// /js/main.js
const games = [
  { name: "Guess Who", file: "games/guessWho.html" },
  { name: "Apples to Apples", file: "games/apples2apples.html" },
  { name: "Sentence Relay", file: "games/sentence-relay.html" },
  { name: "Explain the Past", file: "games/explain-the-past.html" },
  { name: "Random Question Creator", file: "games/random-question.html" },
  { name: "Taboo", file: "games/taboo.html" },
  { name: "Conditionals", file: "games/conditionals.html" },
  { name: "Codenames", file: "games/codeNames.html" },
  { name: "Blank Slate/Name Five", file: "games/blank-five.html" }, 
  { name: "Spot It!", file: "games/spot-it.html" }
];

const gameList = document.getElementById("game-list");

if (gameList) {
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const link = document.createElement("a");
    link.href = game.file;
    link.textContent = game.name;

    card.appendChild(link);
    gameList.appendChild(card);
  });
}
