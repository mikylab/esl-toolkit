const games = [
  { 
    name: "Documents & Lessons", 
    file: "https://lean-condition-718.notion.site/18ff44fc779080b5872eebda5ca23e79?v=18ff44fc779081cfb7f9000c5cabb2b0&pvs=73" 
  },
  { name: "Guess Who", file: "games/guessWho.html" },
  { name: "Apples to Apples", file: "games/apples2apples.html" },
  { name: "Sentence Relay", file: "games/sentence-relay.html" },
  { name: "Explain the Past", file: "games/explain-the-past.html" },
  { name: "Random Question Creator", file: "games/random-question.html" },
  { name: "Taboo", file: "games/taboo.html" },
  { name: "Conditionals", file: "games/conditionals.html" },
  { name: "Codenames", file: "games/codeNames.html" },
  { name: "Blank Slate/Name Five", file: "games/blank-five.html" }, 
  { name: "Spot It!", file: "games/spot-it.html" }, 
  { name: "SpeechAnalysis", file: "games/speechAnalysis.html" }
];

const gameList = document.getElementById("game-list");

if (gameList) {
  games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    const link = document.createElement("a");
    link.href = game.file;
    link.textContent = game.name;

    // Open external links in a new tab
    if (game.file.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    card.appendChild(link);
    gameList.appendChild(card);
  });
}
