const allCharacters = [
  { name: "Anna", age: 25, job: "Teacher", hobbies: "Reading", likes: "Books", dislikes: "Noise", funFact: "Has a big dog", birthplace: "Spain" },
  { name: "Ben", age: 30, job: "Teacher", hobbies: "Reading", likes: "Books", dislikes: "Loud music", funFact: "Can play the piano", birthplace: "USA" },
  
  { name: "Lina", age: 28, job: "Doctor", hobbies: "Swimming", likes: "Helping people", dislikes: "Cold weather", funFact: "Has a cat", birthplace: "Italy" },
  { name: "Tom", age: 35, job: "Doctor", hobbies: "Running", likes: "Helping people", dislikes: "Big crowds", funFact: "Has two children", birthplace: "UK" },
  
  { name: "Mia", age: 26, job: "Chef", hobbies: "Cooking", likes: "Good food", dislikes: "Dirty kitchens", funFact: "Makes cakes", birthplace: "France" },
  { name: "Leo", age: 40, job: "Chef", hobbies: "Cooking", likes: "Good food", dislikes: "Bad smells", funFact: "Has a food blog", birthplace: "Mexico" },
  
  { name: "Eva", age: 22, job: "Student", hobbies: "Drawing", likes: "Art", dislikes: "Tests", funFact: "Draws cartoons", birthplace: "Germany" },
  { name: "Ali", age: 23, job: "Student", hobbies: "Drawing", likes: "Art", dislikes: "Homework", funFact: "Likes comics", birthplace: "Turkey" },
  
  { name: "Sofia", age: 29, job: "Engineer", hobbies: "Cycling", likes: "Bikes", dislikes: "Rain", funFact: "Fixes bikes", birthplace: "Brazil" },
  { name: "Omar", age: 32, job: "Engineer", hobbies: "Cycling", likes: "Bikes", dislikes: "Traffic", funFact: "Has 3 bikes", birthplace: "Egypt" }
];

    const allCharacters3 = [
  { name: "Emma", age: 28, job: "Teacher", hobbies: "Reading, Running", likes: "Helping students", dislikes: "Loud noises", funFact: "Has a twin sister", birthplace: "Ireland" },
  { name: "Carlos", age: 35, job: "Engineer", hobbies: "Cycling, Puzzles", likes: "Building things", dislikes: "Mess", funFact: "Fixes old bikes", birthplace: "Chile" },
  { name: "Anna", age: 32, job: "Doctor", hobbies: "Swimming, Yoga", likes: "Helping people", dislikes: "Crowds", funFact: "Has a pet snake", birthplace: "Sweden" },
  { name: "Tom", age: 37, job: "Chef", hobbies: "Cooking, Hiking", likes: "Tasty food", dislikes: "Cold weather", funFact: "Planted a herb garden", birthplace: "Canada" },
  { name: "Nina", age: 26, job: "Developer", hobbies: "Gaming, Drawing", likes: "New tech", dislikes: "Slow Wi-Fi", funFact: "Built an app", birthplace: "Finland" },
  { name: "Luca", age: 31, job: "Photographer", hobbies: "Traveling, Climbing", likes: "Nature", dislikes: "Traffic", funFact: "Took photos on a volcano", birthplace: "Italy" },
  { name: "Isabel", age: 29, job: "Artist", hobbies: "Painting, Music", likes: "Colors", dislikes: "Dirty hands", funFact: "Painted a mural", birthplace: "Colombia" },
  { name: "Jake", age: 41, job: "Historian", hobbies: "Reading, Museums", likes: "Old stories", dislikes: "Lies", funFact: "Has a home library", birthplace: "USA" },
  { name: "Rita", age: 33, job: "Teacher", hobbies: "Yoga, Reading", likes: "Quiet places", dislikes: "Rushing", funFact: "Teaches in two languages", birthplace: "India" },
  { name: "Sam", age: 38, job: "Engineer", hobbies: "Kayaking, Gaming", likes: "Teamwork", dislikes: "Waiting", funFact: "Built a treehouse", birthplace: "South Africa" },
  { name: "Eva", age: 27, job: "Doctor", hobbies: "Running, Watching movies", likes: "Helping others", dislikes: "Late nights", funFact: "Ran a marathon", birthplace: "Germany" },
  { name: "Leo", age: 44, job: "Writer", hobbies: "Cycling, Chess", likes: "Quiet mornings", dislikes: "Busy streets", funFact: "Wrote a novel on a train", birthplace: "Argentina" },
  { name: "Sophie", age: 30, job: "Developer", hobbies: "Puzzles, Traveling", likes: "Solving problems", dislikes: "Bugs", funFact: "Loves coding games", birthplace: "Poland" },
  { name: "Ahmed", age: 36, job: "Chef", hobbies: "Fishing, Cooking", likes: "Spicy food", dislikes: "Dirty dishes", funFact: "Won a cook-off", birthplace: "Egypt" },
  { name: "Yuki", age: 34, job: "Photographer", hobbies: "Drawing, Hiking", likes: "Beautiful places", dislikes: "Rain", funFact: "Photographed wildlife", birthplace: "Japan" },
  { name: "Lucia", age: 40, job: "Artist", hobbies: "Music, Painting", likes: "Peace and quiet", dislikes: "Noise", funFact: "Plays guitar", birthplace: "Spain" }
];

    
    const allCharacters2 = [
      { name: "Sofia", age: 29, job: "Veterinarian", hobbies: "Hiking, Photography", likes: "Animals", dislikes: "Loud music", funFact: "Afraid of birds", birthplace: "Argentina" },
      { name: "John", age: 34, job: "Chef", hobbies: "Cooking, Chess", likes: "Food", dislikes: "Messy kitchens", funFact: "Fast cook", birthplace: "USA" },
      { name: "Maria", age: 25, job: "Teacher", hobbies: "Yoga, Reading", likes: "Helping others", dislikes: "Disorganization", funFact: "Read 200 books", birthplace: "Spain" },
      { name: "David", age: 41, job: "Writer", hobbies: "Cycling", likes: "Nature", dislikes: "Busy cities", funFact: "Published book at 30", birthplace: "Canada" },
      { name: "Linda", age: 38, job: "Doctor", hobbies: "Swimming", likes: "Helping", dislikes: "Negativity", funFact: "Has vinyls", birthplace: "UK" },
      { name: "Alex", age: 33, job: "Photographer", hobbies: "Traveling", likes: "Sunsets", dislikes: "Cloudy days", funFact: "Shot wedding in rainforest", birthplace: "Brazil" },
      { name: "Eve", age: 27, job: "Developer", hobbies: "Gaming", likes: "Tech", dislikes: "Bugs", funFact: "Built a game", birthplace: "Germany" },
      { name: "Peter", age: 39, job: "Engineer", hobbies: "Climbing", likes: "Adventure", dislikes: "Waiting", funFact: "Climbed Everest", birthplace: "New Zealand" },
      { name: "Julia", age: 45, job: "Artist", hobbies: "Painting", likes: "Creativity", dislikes: "Routine", funFact: "City mural", birthplace: "France" },
      { name: "Mark", age: 50, job: "Historian", hobbies: "Museums", likes: "Ancient cultures", dislikes: "Noise", funFact: "Wrote 3 books", birthplace: "Italy" },
      { name: "Clara", age: 31, job: "Doctor", hobbies: "Running", likes: "Quiet", dislikes: "Rudeness", funFact: "Speaks 4 languages", birthplace: "Mexico" },
      { name: "Liam", age: 36, job: "Photographer", hobbies: "Kayaking", likes: "Adventure", dislikes: "Early mornings", funFact: "Won photo award", birthplace: "Australia" },
      { name: "Tina", age: 30, job: "Developer", hobbies: "Drawing", likes: "Puzzles", dislikes: "Bugs", funFact: "Draws comics", birthplace: "South Korea" },
      { name: "Omar", age: 42, job: "Teacher", hobbies: "Cooking", likes: "Kids", dislikes: "Delays", funFact: "Cooks for charity", birthplace: "Morocco" },
      { name: "Sara", age: 29, job: "Engineer", hobbies: "Gaming", likes: "Robotics", dislikes: "Repetitive work", funFact: "Built a robot arm", birthplace: "Norway" },
      { name: "Victor", age: 40, job: "Chef", hobbies: "Fishing", likes: "Fresh food", dislikes: "Fast food", funFact: "Caught a shark", birthplace: "Portugal" }
    ];




  let currentPlayer = 1; // Start with player 1
  let currentCharacters = [];
  let eliminatedBy = {}; // { characterName: { 1: true/false, 2: true/false } }
  let selectedCharacters = [];
  let visibleTraits = {
    job: false,
    hobbies: false,
    likes: false,
    dislikes: false,
    funFact: false,
    birthplace: false
  };


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setCharacterCount(count) {
    currentCharacters = shuffle([...allCharacters]).slice(0, parseInt(count));
    restartGame();
  }

  function restartGame() {
    eliminatedBy = {};
    selectedCharacters = [];
    document.getElementById('profileDisplay').style.display = 'none';
    displayGrid();
  }

  function switchPlayer() {
    // Switch between player 1 and player 2
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('currentPlayer').innerText = `Player ${currentPlayer}'s Turn`;
    displayGrid(); // Update the grid display after switching players
  }

  function markSelectedEliminated() {
  selectedCharacters.forEach(character => {
    if (!eliminatedBy[character.name]) eliminatedBy[character.name] = {};
    eliminatedBy[character.name][currentPlayer] = true;
  });
  selectedCharacters = []; // clear selection after marking
  displayGrid();
}


  function toggleTrait(trait) {
    visibleTraits[trait] = !visibleTraits[trait];
    displayGrid();
  }

  function displayGrid() {
    const grid = document.getElementById('gameGrid');
    grid.innerHTML = '';

    currentCharacters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('card');

      const mark = eliminatedBy[character.name] || {};

      // Elimination color highlighting for the current player only
      if (mark[1] && currentPlayer === 1) card.classList.add('eliminated-p1');
      if (mark[2] && currentPlayer === 2) card.classList.add('eliminated-p2');

      card.onclick = () => {
        toggleCharacterSelection(character);
      };


      let cardContent = `<h3>${character.name}</h3><p>Age: ${character.age}</p>`;

      // Show visible traits based on toggles
      if (visibleTraits.job) cardContent += `<p><strong>Job:</strong> ${character.job}</p>`;
      if (visibleTraits.hobbies) cardContent += `<p><strong>Hobbies:</strong> ${character.hobbies}</p>`;
      if (visibleTraits.likes) cardContent += `<p><strong>Likes:</strong> ${character.likes}</p>`;
      if (visibleTraits.dislikes) cardContent += `<p><strong>Dislikes:</strong> ${character.dislikes}</p>`;
      if (visibleTraits.funFact) cardContent += `<p><strong>Fun Fact:</strong> ${character.funFact}</p>`;
      if (visibleTraits.birthplace) cardContent += `<p><strong>Birthplace:</strong> ${character.birthplace}</p>`;

      // Add elimination markers for both players (always visible)
      if (mark[1]) cardContent += '<div class="marker p1">1</div>';
      if (mark[2]) cardContent += '<div class="marker p2">2</div>';

      if (selectedCharacters.find(c => c.name === character.name)) {
        card.classList.add('selected');
      }

      card.innerHTML = cardContent;
      grid.appendChild(card);
    });
  }

  function toggleCharacterSelection(character) {
    const index = selectedCharacters.findIndex(c => c.name === character.name);
    if (index !== -1) {
      selectedCharacters.splice(index, 1); // unselect if already selected
    } else {
      selectedCharacters.push(character); // add to selection
    }
    displayGrid();
  }


    function showProfile(character) {
      selectedCharacter = character;
      document.getElementById('characterName').innerText = `${character.name}, Age: ${character.age}`;
      document.getElementById('characterDetails').innerHTML = `
        <p><strong>Job:</strong> ${character.job}</p>
        <p><strong>Hobbies:</strong> ${character.hobbies}</p>
        <p><strong>Likes:</strong> ${character.likes}</p>
        <p><strong>Dislikes:</strong> ${character.dislikes}</p>
        <p><strong>Fun Fact:</strong> ${character.funFact}</p>
        <p><strong>Birthplace:</strong> ${character.birthplace}</p>
      `;
      document.getElementById('profileDisplay').style.display = 'block';
    }

    setCharacterCount(12); // Initialize with 12 characters
