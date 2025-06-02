/*
const redCards = [
    "Airplane", "Banana", "Beach", "Bicycle", "Birthday", "Book", "Cake", "Camera", "Car", "Cat",
    "Chair", "Chocolate", "Circus", "City", "Classroom", "Computer", "Concert", "Dog", "Doctor", "Dragon",
    "Elephant", "Family", "Firefighter", "Football", "Forest", "Friend", "Garden", "Ghost", "Guitar", "Hospital",
    "Ice cream", "Library", "Magic", "Monster", "Moon", "Movie", "Museum", "Music", "Park", "Party",
    "Pizza", "Playground", "Police officer", "Princess", "Robot", "School", "Soccer", "Superhero", "Teacher", "Volcano",
    "Astronaut", "Avocado", "Backpack", "Balloon", "Bridge", "Butterfly", "Candle", "Castle", "Cave", "Chef",
    "Cloud", "Cowboy", "Desert", "Detective", "Dinosaur", "Diver", "Eagle", "Fairy", "Fireworks", "Fountain",
    "Galaxy", "Glasses", "Helicopter", "Jungle", "Lighthouse", "Mermaid", "Meteor", "Microscope", "Mummy", "Ninja",
    "Octopus", "Painter", "Parrot", "Penguin", "Pirate", "Puppet", "Rainbow", "Rocket", "Scientist", "Snowman",
    "Statue", "Submarine", "Swan", "Telescope", "Tiger", "Tornado", "Train", "Turtle", "Unicorn", "Vampire"
];
const greenCards = ["Amazing","Angry","Beautiful","Boring", "Bright", "Busy", "Clean", "Cold", "Colorful", "Crazy",
                    "Creative", "Dangerous", "Dark", "Delicious", "Difficult", "Exciting", "Expensive", "Fast",
                    "Friendly","Funny", "Generous", "Gentle", "Hardworking", "Happy", "Heavy", "Honest", "Huge",
                    "Important", "Interesting", "Lazy", "Light", "Loud", "Lucky", "Messy", "Modern", "Nervous",
                    "Noisy", "Old-fashioned", "Perfect", "Popular", "Quick", "Quiet", "Safe", "Silly", "Smart",
                    "Soft", "Strong", "Tasty", "Warm","Wild"]
*/
const redCards = [
    "Soccer ball", "T-shirt", "Barcelona", "Madrid", "Supermarket", "Ice cream", "Dog park", "Football", 
    "Festival", "Shopping mall", "Swimming pool", "Beach vacation", "Birthday cake", "Street food", 
    "Madrid's Prado Museum", "Rainy day", "Pizza party", "Football match", "Camping", "Birthday party", 
    "Museum of Art", "Halloween", "Famous Flamenco dancer", "Concert ticket", "New York City", 
    "Toy store", "Camping trip", "Chocolate cake", "Ferris wheel", "Movie theater", "Christmas tree", 
    "Magic show", "Amusement park", "Toy robot", "Unicorn", "Toy car", "Spaghetti dinner", "Christmas gift", 
    "Snow day", "Winter sports", "Pizza delivery", "Park bench", "Library books", "Superhero costume", 
    "Popcorn machine", "Family picnic", "Water balloon fight", "Magic wand", "Lighthouse", "Superhero movie", 
    "Paris", "Las Ramblas in Barcelona", "Hot air balloon", "Alien invasion", "TV remote", "Dragon costume", 
    "Christmas party", "Eiffel Tower", "Super Mario", "Space station", "Toy train", "Camping tent", 
    "Picnic basket", "Ferris wheel ride", "Summer camp", "Sports car", "Halloween costume", "Rodeo", 
    "Clown", "Ski resort", "Christmas market", "The White House", "The Grand Canyon", "Tokyo Tower", 
    "Statue of Liberty", "Harlem Globetrotters", "London Eye", "Formula 1", "Fireworks show", "City parade", 
    "Sushi restaurant", "Rocket ship", "Guitar solo", "A big parade", "Harry Potter", "Spider-Man", "Captain America", 
    "Pirate ship", "Shakespeare", "Stadium", "Bungee jump", "Rolling Stones concert", "Ballet performance", 
    "Marching band", "Cultural festival", "Hiking trip", "Mountain climbing", "Surfing", "Train ride", 
    "Snowball fight", "Beach volleyball", "Magic carpet", "Space travel", "Ice skating rink", "Kung Fu movie", 
    "Backyard barbecue", "Lego set", "Christmas cookies", "Birthday present", "Teddy bear", "Hot chocolate", 
    "Popcorn", "Circus tent", "Petting zoo", "Rock concert", "Ballet slippers", "Cinderella", "Snowman", 
    "Bookstore", "Bike ride", "Treasure hunt", "Laser tag", "Superhero comic", "Viking ship", "Yoga retreat", 
    "Cooking class", "Magic potion", "Dance floor", "Board game", "Football stadium", "Movie popcorn", 
    "Gumball machine", "Helicopter ride", "Pirate treasure", "Airplane ride", "World Cup", "Mount Everest", 
    "Amusement park ride", "Easter egg hunt", "Vampire", "Zombie apocalypse", "Monster truck show", 
    "Ski lift", "Giant balloon", "Ocean cruise", "Easter Bunny", "Hot air balloon ride", "Magic kingdom", 
    "Fairy tale", "Robot dance", "Gravy train", "Trampoline", "Electric guitar", "Easter parade", "Picnic blanket", 
    "Candy store", "Jungle safari", "Hockey game", "Volleyball", "Safari tour", "Roller coaster", 
    "Football trophy", "Museum tour", "Pirate map", "Jelly beans", "Water park", "Lego castle", "Crayon box", 
    "Rock climbing", "Amusement park ticket", "Butterfly garden", "Playground swing", "Mountain range", 
    "Space rocket", "Roller skating", "Paintball game", "Christmas shopping", "Zoological garden", "Beach hut", 
    "Farm animals", "Chocolates", "Carnival ride", "Amusement park food", "Bubble gum", "Lawn chair", 
    "Ocean wave", "Magic show ticket", "Big top tent", "Circus animals", "Haunted house", "Motorcycle race", 
    "Giant slide", "Haunted mansion", "Train station", "Live concert", "Pool party", "Bouncy castle", 
    "Snowstorm", "Baking cookies", "Cheese fondue", "Scavenger hunt", "Skydiving", "Mystery box", 
    "Sandcastle", "Treasure chest", "Christmas tree ornaments", "Invention", "School play", "Snowmobile"
];

const greenCards = [
    "Something you can eat", 
    "A famous landmark", 
    "A place to go on vacation", 
    "Something that makes you laugh", 
    "An exciting sport", 
    "A popular city", 
    "A famous football team", 
    "A kind of weather", 
    "Something that makes you smile", 
    "A family tradition", 
    "A famous festival", 
    "A type of food", 
    "A fun game", 
    "An outdoor activity", 
    "A fun holiday", 
    "A fun birthday party", 
    "A place to relax", 
    "A hobby", 
    "A magical creature", 
    "Something fun to do with friends", 
    "A place with a lot of tourists", 
    "A popular type of music", 
    "A funny costume", 
    "Something you would see in a movie", 
    "A funny event", 
    "A popular sport", 
    "A superhero's power", 
    "A dangerous adventure", 
    "A thing that helps you have fun", 
    "Something everyone loves", 
    "A way to spend a day off", 
    "A gift you would love to receive", 
    "Something that makes a perfect gift", 
    "An activity to do in the snow", 
    "A type of celebration", 
    "A fun theme park ride", 
    "A city known for art", 
    "A place you could go to meet people", 
    "Something you do at a party", 
    "A way to get to a new city", 
    "A popular toy", 
    "Something you do on the weekend", 
    "An event that involves costumes", 
    "A fun thing to do with your family", 
    "A famous actor or singer", 
    "A scary movie scene", 
    "A weird invention", 
    "A funny prank", 
    "A childhood game", 
    "A fun theme park", 
    "A place to have a picnic", 
    "A place to watch a sunset", 
    "A type of magic", 
    "A place to take a photo", 
    "A fun thing to do in the summer", 
    "A way to keep warm in the winter", 
    "Something you see in a science fiction movie", 
    "A kind of dance", 
    "A form of transportation", 
    "A time of the day", 
    "Something you find at a festival", 
    "A thing to do at a sleepover", 
    "A weekend getaway", 
    "A hobby you can do inside", 
    "A popular summer activity", 
    "Something that can make you happy", 
    "A toy from your childhood", 
    "A funny game", 
    "A delicious treat", 
    "A superhero's weapon", 
    "A kind of fruit", 
    "A fun birthday game", 
    "Something you can wear at a party", 
    "A sports competition", 
    "A food you can share with friends", 
    "A family tradition", 
    "A favorite place to visit", 
    "A tradition you do every year", 
    "A fun game to play in the park", 
    "A scary Halloween decoration", 
    "Something you can find in a toy store", 
    "A dream vacation spot", 
    "A place to go for a weekend trip", 
    "Something to do with your friends", 
    "A type of adventure", 
    "A family event", 
    "A family recipe", 
    "A fun winter activity", 
    "A favorite type of ice cream", 
    "A fun outdoor sport", 
    "A fun science experiment", 
    "A relaxing activity", 
    "Something you do when you're bored", 
    "A cool new gadget", 
    "A game you play with a group", 
    "A movie you can watch with family", 
    "A holiday you look forward to", 
    "A trip you want to take", 
    "A popular festival", 
    "A hobby that is good for your health", 
    "Something you do to relax", 
    "A thing you need for a birthday party", 
    "A popular hobby", 
    "Something you can do to help others"
];

const blackCardPrompts = [
    "The best thing about my day was ___.",
    "I can't live without ___.",
    "___ is the funniest thing I know.",
    "___ is my secret talent.",
    "If I were a superhero, my power would be ___.",
    "My favorite food is ___.",
    "___ makes me laugh every time.",
    "If I could travel anywhere, I would go to ___.",
    "The weirdest thing I've ever done is ___.",
    "___ is my guilty pleasure.",
    "I love to spend my free time ___.",
    "___ is the best invention ever.",
    "___ is the worst part of the day.",
    "___ always makes me smile.",
    "When I grow up, I want to be ___.",
    "___ is what I do best.",
    "The coolest thing I own is ___.",
    "If I could have any pet, I would choose ___.",
    "___ is the first thing I do in the morning.",
    "___ makes me feel relaxed.",
    "I once dreamed about ___.",
    "The most embarrassing thing that ever happened to me was ___.",
    "If I had a time machine, I would go to ___.",
    "___ is my worst habit.",
    "Nothing is scarier than ___.",
    "If I could switch places with someone for a day, I’d choose ___.",
    "___ is my dream job.",
    "The best prank I ever pulled was ___.",
    "___ is something I could talk about all day.",
    "If aliens visited Earth, the first thing I’d show them is ___.",
    "The best way to make friends is ___.",
    "___ is my idea of the perfect weekend.",
    "The last thing I searched for online was ___.",
    "I would never say no to ___.",
    "___ is my biggest fear.",
    "The funniest movie scene ever is about ___.",
    "If I could only eat one thing for the rest of my life, it would be ___.",
    "Nothing beats the feeling of ___.",
    "___ would be the worst thing to forget at home.",
    "If I found a magic lamp, I would wish for ___."
];

const grayCards = [
    "a giant pizza",
    "playing video games all day",
    "laughing at silly jokes",
    "dancing like no one’s watching",
    "my amazing collection of comics",
    "flying through the sky",
    "eating chocolate in bed",
    "a talking cat",
    "spending the weekend on the couch",
    "telling funny stories",
    "running a marathon in my pajamas",
    "a pet unicorn",
    "a mysterious treasure map",
    "a new phone",
    "singing in the shower",
    "being a professional napper",
    "winning the lottery",
    "the smell of fresh cookies",
    "a secret underground lair",
    "a magical spellbook",
    "a roller coaster in my backyard",
    "forgetting my homework at home",
    "a suitcase full of spaghetti",
    "a robot butler",
    "getting stuck in a revolving door",
    "a trampoline in my bedroom",
    "turning into a pickle",
    "accidentally emailing my teacher instead of my friend",
    "a hamster with a jetpack",
    "a never-ending ice cream cone",
    "an embarrassing dance video going viral",
    "a talking dog who gives life advice",
    "my little brother’s awful singing",
    "finding an old treasure chest in my backyard",
    "a dinosaur as my best friend",
    "a group of squirrels planning a bank heist",
    "falling asleep in the middle of class",
    "a birthday cake explosion",
    "a fortune cookie that told the future",
    "a llama wearing sunglasses",
    "getting caught wearing mismatched socks",
    "an alien invasion during math class",
    "a baby driving a car",
    "a superhero with terrible fashion sense",
    "a bear riding a skateboard",
    "finding a secret passage in my school",
    "a wizard who only knows useless spells",
    "a ghost who just wants to be my friend",
    "an octopus who’s great at playing the piano",
    "a dragon that loves to cuddle"
];



let selectedCards = [];
let promptCard = '';
let gameMode = 'red'; // 'red' for Red Card Game, 'green' for Cards Against Humanity

// Function to generate random cards
function getRandomCard(cardDeck) {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    return cardDeck[randomIndex];
}

// Function to generate a green card (prompt card)
function getPromptCard(promptDeck) {
    const randomIndex = Math.floor(Math.random() * promptDeck.length);
    return promptDeck[randomIndex];
}

// Function to create a new set of 7 red cards
function generateNewCards() {
    selectedCards = [];
    while (selectedCards.length < 7) {
        const newCard = gameMode === 'black' ? getRandomCard(grayCards) : getRandomCard(redCards);
        if (!selectedCards.includes(newCard)) {
            selectedCards.push(newCard);
        }
    }
    renderCards();
    generatePromptCard(blackCardPrompts);
    if (gameMode === 'black'){
      console.log("black");
      generatePromptCard(blackCardPrompts);
    }else{
      generatePromptCard(greenCards);
    }
}

// Render the cards on the page
function renderCards() {
    const cardContainer = document.getElementById('cards');
    cardContainer.innerHTML = '';
    selectedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        cardElement.onclick = () => markCardAsUsed(cardElement);
        cardContainer.appendChild(cardElement);
    });
}

// Render the green card (prompt)
function generatePromptCard(promptDeck) {
    promptCard = getPromptCard(promptDeck);
    const promptCardElement = document.getElementById('promptCard');
    promptCardElement.textContent = promptCard;
}


// Mark a card as used
function markCardAsUsed(cardElement) {
    cardElement.classList.toggle('used');
    //cardElement.onclick = null; // Disable further clicking
  
}

// Discard a word and replace it with a new one
function discardAndReplaceCard() {
    const usedCards = document.querySelectorAll('.used');
    if (usedCards.length === 0) {
        alert("You must use a card before discarding!");
        return;
    }
    
    // Find the first used card and replace it with a new random card
    usedCards[0].classList.remove('used');
    const newCard = getRandomCard(redCards);
    usedCards[0].textContent = newCard;
}

function changePromptCard(){
  if (gameMode === 'black'){
      generatePromptCard(blackCardPrompts);
  }else{
    generatePromptCard(greenCards);
  }
}

// Switch game mode
function switchGameMode() {
    if (gameMode === 'red') {
        gameMode = 'black';
        document.getElementById('gameMode').innerHTML = '<button onclick="switchGameMode()">Switch to Apples to Apples Game</button>';
        alert("You are now in Fill the ____ mode! Pick a word to fill in the blank.");
        generateNewCards();
    } else {
        gameMode = 'red';
        document.getElementById('gameMode').innerHTML = '<button onclick="switchGameMode()">Switch to Fill the ____ Game</button>';
        generateNewCards();
    }
}

function uploadFile() {
    alert("File upload function is triggered!");
    // Your file upload logic will go here
}

// Initialize the game with random cards
generateNewCards();
