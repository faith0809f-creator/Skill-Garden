/* =========================================
   SKILL GARDEN
========================================= */


/* =========================================
   PLAYER
========================================= */

const defaultPlayer = {

    level: "",

    subject: "",

    stars: 0,

    seeds: 0,

    soil: 0,

    correctAnswers: 0,

    unlockedAreas: [
        "Starter Garden"
    ],

    currentArea:
        "Starter Garden",

    ownedDecorations: [],

    ownedPacks: [],

    usedQuestions: {}

};


let player = {
    ...defaultPlayer
};


let currentQuiz = [];

let currentQuestion = 0;

let quizScore = 0;


/* =========================================
   SUBJECTS
========================================= */

const subjects = {

    Kindergarten: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P1: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P2: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P3: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P4: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P5: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    P6: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    S1: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    S2: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    S3: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    S4: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ],

    Advanced: [
        "Maths",
        "English",
        "Science",
        "Geography",
        "History",
        "Computing"
    ]

};


/* =========================================
   PLANT
========================================= */

const plantStages = [

    {
        name: "Little Seedling",
        emoji: "🌱"
    },

    {
        name: "Growing Sprout",
        emoji: "🌿"
    },

    {
        name: "Young Plant",
        emoji: "🪴"
    },

    {
        name: "Budding Plant",
        emoji: "🌷"
    },

    {
        name: "Blooming Flower",
        emoji: "🌸"
    },

    {
        name: "Garden Tree",
        emoji: "🌳"
    }

];


/* =========================================
   GARDEN AREAS
========================================= */

const gardenAreas = [

    {
        name: "Starter Garden",

        emoji: "🌷",

        theme: "starter-theme",

        stars: 0,

        seeds: 0,

        soil: 0,

        objects: [
            "🌷",
            "🌼",
            "🌿"
        ]
    },


    {
        name: "Flower Garden",

        emoji: "🌸",

        theme: "flower-theme",

        stars: 50,

        seeds: 10,

        soil: 5,

        objects: [
            "🌸",
            "🌺",
            "🌻",
            "🪻",
            "🌷",
            "🐝"
        ]
    },


    {
        name: "Cozy Picnic Garden",

        emoji: "🧺",

        theme: "picnic-theme",

        stars: 100,

        seeds: 20,

        soil: 10,

        objects: [
            "🧺",
            "🍓",
            "🥪",
            "🧃",
            "🌷"
        ]
    },


    {
        name: "Bunny Garden",

        emoji: "🐰",

        theme: "bunny-theme",

        stars: 150,

        seeds: 25,

        soil: 15,

        objects: [
            "🐰",
            "🥕",
            "🥬",
            "🌷",
            "🌼"
        ]
    },


    {
        name: "Woodland Garden",

        emoji: "🌲",

        theme: "woodland-theme",

        stars: 200,

        seeds: 30,

        soil: 20,

        objects: [
            "🌲",
            "🍄",
            "🦊",
            "🐿️",
            "🪵"
        ]
    },


    {
        name: "Panda Bamboo Garden",

        emoji: "🐼",

        theme: "panda-theme",

        stars: 250,

        seeds: 40,

        soil: 25,

        objects: [
            "🐼",
            "🎋",
            "🌿",
            "🪨",
            "🍵"
        ]
    },


    {
        name: "Butterfly Garden",

        emoji: "🦋",

        theme: "butterfly-theme",

        stars: 400,

        seeds: 60,

        soil: 40,

        objects: [
            "🦋",
            "🌸",
            "🌺",
            "🌼",
            "🪻"
        ]
    },


    {
        name: "Magical Animal Garden",

        emoji: "🦄",

        theme: "magic-theme",

        stars: 600,

        seeds: 80,

        soil: 50,

        objects: [
            "🦄",
            "🌈",
            "✨",
            "🏰",
            "🌙"
        ]
    }

];


/* =========================================
   SHOP
========================================= */

const decorations = [

    ["Small Flower", "🌸", 10],
    ["Tulip", "🌷", 15],
    ["Mushroom", "🍄", 20],
    ["Bird", "🐦", 25],
    ["Butterfly", "🦋", 30],
    ["Bee", "🐝", 30],
    ["Small Plant", "🌿", 35],
    ["Carrot Basket", "🥕", 40],
    ["Log Stool", "🪵", 45],
    ["Squirrel", "🐿️", 50],
    ["Bunny", "🐰", 60],
    ["Picnic Basket", "🧺", 65],
    ["Garden Bench", "🪑", 70],
    ["Strawberry Basket", "🍓", 75],
    ["Bear", "🐻", 90],
    ["Fox", "🦊", 100],
    ["Small Tree", "🌳", 100],
    ["Bamboo", "🎋", 110],
    ["Pond", "🪷", 130],
    ["Rainbow", "🌈", 150],
    ["Tree House", "🏡", 200],
    ["Panda", "🐼", 250],
    ["Unicorn", "🦄", 350],
    ["Magical Castle", "🏰", 500]

].map(
    item => ({

        name:
            item[0],

        emoji:
            item[1],

        price:
            item[2]

    })
);


const packs = [

    ["Flower Starter", "🌸", 80],
    ["Butterfly Garden", "🦋", 150],
    ["Bunny Picnic", "🐰", 220],
    ["Cozy Picnic", "🧺", 280],
    ["Woodland", "🦊", 300],
    ["Rainbow Garden", "🌈", 350],
    ["Panda Bamboo", "🐼", 450],
    ["Magical Garden", "🦄", 650],
    ["Fairy Garden", "🏰", 800],
    ["Ultimate Garden", "👑", 1200]

].map(
    item => ({

        name:
            item[0],

        emoji:
            item[1],

        price:
            item[2]

    })
);


/* =========================================
   LEVEL GROUP
========================================= */

function getLevelGroup(level) {

    if (
        level ===
        "Kindergarten"
    ) {

        return "kindergarten";

    }


    if (
        level === "P1" ||
        level === "P2"
    ) {

        return "lowerPrimary";

    }


    if (
        level === "P3" ||
        level === "P4"
    ) {

        return "middlePrimary";

    }


    if (
        level === "P5" ||
        level === "P6"
    ) {

        return "upperPrimary";

    }


    if (
        level === "S1" ||
        level === "S2"
    ) {

        return "lowerSecondary";

    }


    if (
        level === "S3" ||
        level === "S4"
    ) {

        return "upperSecondary";

    }


    return "advanced";

}


/* =========================================
   KNOWLEDGE QUESTIONS
========================================= */

const knowledgeBank = {


kindergarten: {


English: [

["Which word starts with B?", "Ball", "Cat", "Dog", "Fish", "easy"],

["Which word rhymes with cat?", "Hat", "Dog", "Sun", "Fish", "easy"],

["Which word is an animal?", "Rabbit", "Table", "Cup", "Book", "easy"],

["Which word is a colour?", "Blue", "Jump", "Sing", "Run", "easy"],

["What is the opposite of happy?", "Sad", "Fast", "Tall", "Round", "normal"],

["Which word names a fruit?", "Apple", "Chair", "Shoe", "Pencil", "easy"],

["Which one is a greeting?", "Hello", "Banana", "Window", "Jump", "easy"],

["Which word starts with S?", "Sun", "Dog", "Cat", "Ball", "easy"],

["Which word rhymes with log?", "Dog", "Fish", "Sun", "Pen", "normal"],

["Which word names a body part?", "Hand", "Chair", "Book", "Cup", "easy"],

["Which word means very small?", "Tiny", "Huge", "Tall", "Wide", "normal"],

["Which sentence is a question?", "Where is Mum?", "I like cats.", "It is sunny.", "The dog runs.", "normal"],

["Which word starts with M?", "Moon", "Sun", "Hat", "Dog", "easy"],

["Which word rhymes with sun?", "Fun", "Dog", "Pen", "Fish", "normal"],

["Which word names food?", "Bread", "Chair", "Door", "Shoe", "easy"],

["Which word means the opposite of big?", "Small", "Tall", "Fast", "Long", "easy"]

],


Science: [

["Which animal can fly?", "Bird", "Fish", "Dog", "Cat", "easy"],

["Which animal lives in water?", "Fish", "Dog", "Rabbit", "Bird", "easy"],

["Which body part helps you see?", "Eyes", "Ears", "Feet", "Hands", "easy"],

["Which body part helps you hear?", "Ears", "Eyes", "Nose", "Feet", "easy"],

["Which body part helps you smell?", "Nose", "Eyes", "Hands", "Feet", "easy"],

["Which thing is alive?", "Tree", "Rock", "Cup", "Chair", "normal"],

["What do plants need to grow?", "Water", "Plastic", "Shoes", "Toys", "easy"],

["What gives us light in the daytime?", "Sun", "Chair", "Book", "Shoe", "easy"],

["What does a caterpillar become?", "Butterfly", "Dog", "Fish", "Cat", "normal"],

["Which animal has feathers?", "Bird", "Fish", "Snake", "Frog", "normal"],

["Which animal has fins?", "Fish", "Dog", "Cat", "Rabbit", "normal"],

["Which part of a plant is usually underground?", "Roots", "Flower", "Fruit", "Leaf", "normal"],

["What falls from clouds when it rains?", "Water", "Sand", "Wood", "Plastic", "easy"],

["Which sense helps us taste?", "Taste", "Sight", "Hearing", "Touch", "easy"],

["Which object is not alive?", "Rock", "Bird", "Tree", "Ant", "normal"],

["Which animal lays eggs?", "Chicken", "Dog", "Cat", "Rabbit", "normal"]

],


Geography: [

["What planet do we live on?", "Earth", "Mars", "Moon", "Sun", "easy"],

["What helps us find places?", "Map", "Cup", "Spoon", "Pencil", "easy"],

["Which place is very high?", "Mountain", "Beach", "River", "Lake", "normal"],

["Where can you find sand near the sea?", "Beach", "Forest", "School", "Road", "easy"],

["Which place has many trees?", "Forest", "Ocean", "Road", "Carpark", "easy"],

["Singapore is a...", "Country", "Planet", "Ocean", "Mountain", "normal"],

["Which carries flowing water?", "River", "Mountain", "Road", "Hill", "normal"],

["Which is bigger?", "Ocean", "Cup", "Puddle", "Bottle", "easy"],

["Where would you find many buildings?", "City", "Ocean", "Forest", "River", "normal"],

["Which direction is at the top of most maps?", "North", "South", "East", "West", "normal"],

["What surrounds an island?", "Water", "Roads", "Mountains only", "Buildings", "normal"],

["Where does a boat travel?", "Water", "Sky", "Mountain", "Forest", "easy"],

["Which place can be very dry?", "Desert", "River", "Ocean", "Lake", "normal"],

["Which place has lots of salt water?", "Ocean", "Road", "Forest", "School", "easy"],

["What can show roads and buildings?", "Map", "Spoon", "Toy", "Shoe", "normal"],

["Which landform is higher than the land around it?", "Hill", "River", "Lake", "Beach", "normal"]

],


History: [

["History teaches us about...", "The past", "Only tomorrow", "Only games", "Only maths", "easy"],

["Yesterday is in the...", "Past", "Future", "Next year", "Tomorrow", "easy"],

["Tomorrow is in the...", "Future", "Past", "Yesterday", "Last year", "easy"],

["What can an old photograph show?", "The past", "Tomorrow", "Only numbers", "The future only", "normal"],

["A timeline puts events in...", "Time order", "Colour order", "Size order", "Alphabet order", "normal"],

["A museum may contain...", "Old objects", "Only food", "Only plants", "Only sports", "easy"],

["Who is usually older?", "Grandparent", "Baby", "New toy", "Puppy", "easy"],

["Who studies the past?", "Historian", "Chef", "Driver", "Pilot", "normal"],

["Which happened first?", "Being born", "Starting school", "Becoming an adult", "Growing old", "easy"],

["An old toy can tell us about...", "The past", "Tomorrow only", "Weather only", "Maths only", "normal"],

["A birthday from last year is in the...", "Past", "Future", "Tomorrow", "Next month", "easy"],

["People lived long ago before we were...", "Born", "Sleeping", "Eating", "Running", "easy"],

["Which can help tell a family story?", "Family photographs", "Random numbers", "Weather map only", "Calculator", "normal"],

["A castle built long ago is...", "Historical", "Tomorrow", "Future", "New", "normal"],

["What comes after yesterday?", "Today", "Last year", "Past", "Last month", "easy"],

["People can learn about long ago by visiting a...", "Museum", "Car wash", "Supermarket only", "Playground only", "normal"]

],


Computing: [

["Which device is used to type?", "Keyboard", "Speaker", "Screen", "Printer", "easy"],

["Which device moves the pointer?", "Mouse", "Speaker", "Printer", "Monitor", "easy"],

["Which part shows pictures?", "Screen", "Keyboard", "Cable", "Mouse pad", "easy"],

["Which device prints on paper?", "Printer", "Mouse", "Keyboard", "Speaker", "normal"],

["A computer follows...", "Instructions", "Food", "Weather", "Dreams", "normal"],

["What should you do with a password?", "Keep it private", "Tell everyone", "Post it online", "Give it to strangers", "normal"],

["Coding tells a computer...", "What to do", "What to eat", "How to sleep", "How to grow", "normal"],

["What should you do if something online worries you?", "Tell an adult", "Keep it secret", "Share your password", "Click everything", "normal"],

["Which device can play sound?", "Speaker", "Keyboard", "Mouse", "Printer", "easy"],

["Which device can record your voice?", "Microphone", "Printer", "Mouse", "Monitor", "normal"],

["Which part can you touch to select something on a tablet?", "Screen", "Printer", "Speaker", "Cable", "easy"],

["What should you do before clicking a strange link?", "Ask an adult", "Click immediately", "Share it with strangers", "Type your password", "normal"],

["A robot can follow a...", "Program", "Sandwich", "Pillow", "Cloud", "normal"],

["What is a safe password choice?", "A secret password", "Your name only", "1234", "password", "normal"],

["What does a start button usually do?", "Begin something", "Eat food", "Grow a tree", "Wash clothes", "easy"],

["What is an instruction?", "A step telling what to do", "A colour", "A picture only", "A toy", "normal"]

]

},


/* LOWER PRIMARY */

lowerPrimary: {


English: [

["Which word is a noun?", "Apple", "Run", "Quickly", "Happy", "easy"],

["Which word is a verb?", "Jump", "Blue", "Chair", "Soft", "easy"],

["Which word is an adjective?", "Happy", "Run", "Eat", "Jump", "normal"],

["What is the plural of cat?", "Cats", "Cat", "Cat's", "Cates", "easy"],

["What is the plural of dog?", "Dogs", "Dog", "Dog's", "Doges", "easy"],

["What is the opposite of hot?", "Cold", "Fast", "Tall", "Big", "easy"],

["Which word means nearly the same as big?", "Large", "Tiny", "Slow", "Thin", "normal"],

["The dogs ___ running.", "are", "is", "am", "be", "normal"],

["The boy ___ happy.", "is", "are", "am", "be", "normal"],

["What is the past tense of jump?", "Jumped", "Jumping", "Jumps", "Jump", "normal"],

["What is the past tense of walk?", "Walked", "Walking", "Walks", "Walk", "normal"],

["Which word describes the cat?", "Fluffy", "Run", "Eat", "Jump", "normal"],

["Which sentence is correct?", "She likes apples.", "She like apples.", "She liking apples.", "She apples like.", "normal"],

["Which word is a pronoun?", "He", "Table", "Run", "Blue", "normal"],

["Which word means the opposite of noisy?", "Quiet", "Loud", "Fast", "Bright", "normal"],

["Which sentence ends with a question mark?", "Where are you?", "I like dogs.", "The sun is hot.", "We can run.", "easy"]

],


Science: [

["Which part of a plant absorbs water?", "Roots", "Flower", "Fruit", "Petal", "easy"],

["What do humans breathe in?", "Oxygen", "Plastic", "Sand", "Wood", "easy"],

["Which object is living?", "Tree", "Rock", "Cup", "Pencil", "easy"],

["Which is a solid?", "Rock", "Air", "Steam", "Rain", "easy"],

["Which organ helps us breathe?", "Lungs", "Stomach", "Bones", "Teeth", "normal"],

["What happens to ice when it gets warm?", "It melts", "It freezes", "It grows", "It becomes metal", "normal"],

["Which animal is a mammal?", "Dog", "Fish", "Frog", "Butterfly", "normal"],

["Water becomes ice when it...", "Freezes", "Melts", "Boils", "Evaporates", "normal"],

["Which animal has a backbone?", "Dog", "Butterfly", "Ant", "Worm", "normal"],

["Which part of a plant makes food using sunlight?", "Leaf", "Root", "Seed only", "Soil", "normal"],

["Which is a source of light?", "Lamp", "Chair", "Book", "Spoon", "easy"],

["What happens when water boils?", "It becomes water vapour", "It becomes ice", "It becomes rock", "It becomes wood", "normal"],

["Which sense detects sound?", "Hearing", "Sight", "Taste", "Touch", "easy"],

["Which sense detects colour?", "Sight", "Hearing", "Smell", "Taste", "easy"],

["Which material is usually transparent?", "Glass", "Wood", "Brick", "Metal", "normal"],

["What do most animals need to survive?", "Food and water", "Plastic", "Paint", "Toys", "normal"]

],


Geography: [

["Which is a continent?", "Asia", "Singapore", "London", "Pacific", "easy"],

["Which is an ocean?", "Pacific Ocean", "Asia", "Japan", "Singapore", "easy"],

["Singapore is in which continent?", "Asia", "Europe", "Africa", "South America", "normal"],

["Which direction is opposite north?", "South", "East", "West", "Up", "easy"],

["What does a map key explain?", "Map symbols", "Weather only", "Maths answers", "Street sounds", "normal"],

["Which place is surrounded by water?", "Island", "Mountain", "Valley", "Road", "normal"],

["A compass helps show...", "Direction", "Temperature", "Weight", "Time", "normal"],

["The Equator is an imaginary line around...", "Earth", "Moon", "Singapore only", "A house", "normal"],

["Which direction is opposite east?", "West", "North", "South", "Up", "easy"],

["What is a capital city?", "A main city of a country", "A mountain", "An ocean", "A river", "normal"],

["Which is a natural feature?", "River", "Shopping mall", "Road", "School", "normal"],

["Which is a human-made feature?", "Bridge", "River", "Mountain", "Forest", "normal"],

["Which landform has a peak?", "Mountain", "Lake", "Beach", "River", "normal"],

["Where does a river usually flow?", "Toward lower ground", "Only uphill", "Into the sky", "Inside mountains only", "normal"],

["Which place usually has the most buildings?", "City", "Forest", "Desert", "Ocean", "normal"],

["A globe is a model of...", "Earth", "The Sun only", "A city only", "A house", "easy"]

],


History: [

["History is mainly about...", "The past", "Only weather", "Only numbers", "Only computers", "easy"],

["What is a timeline?", "Events in time order", "A map", "A drawing tool", "A food", "easy"],

["Who built the pyramids at Giza?", "Ancient Egyptians", "Vikings", "Aztecs", "Australians", "normal"],

["A museum helps preserve...", "Historical objects", "Only food", "Only sports equipment", "Only plants", "easy"],

["An archaeologist studies...", "Objects from the past", "Future weather", "Modern traffic", "Passwords", "normal"],

["Which can be evidence about the past?", "Old photograph", "Future prediction", "Blank paper", "Tomorrow's weather", "easy"],

["An ancient civilisation is...", "A society from long ago", "A future city", "A computer", "A sports team", "normal"],

["Why compare historical sources?", "To understand the past better", "To make them colourful", "To avoid reading", "To remove dates", "normal"],

["What is an artefact?", "An object from the past", "A future prediction", "A weather report only", "A maths problem", "normal"],

["Which is a primary source?", "Old diary", "Modern cartoon about history", "New textbook", "Recent website summary", "normal"],

["Why do people preserve old buildings?", "They can teach us about the past", "To erase history", "To make maps smaller", "To stop time", "normal"],

["What can old coins tell historians about?", "People and trade", "Future weather", "Computer passwords", "Tomorrow only", "normal"],

["Which group lived in Scandinavia long ago?", "Vikings", "Romans in China", "Aztecs in Europe", "Modern astronauts", "normal"],

["Ancient Rome was centred in which modern country?", "Italy", "Japan", "Australia", "Brazil", "normal"],

["Why are dates useful in history?", "They help place events in order", "They change the events", "They remove evidence", "They predict weather", "normal"],

["Which source could show how people dressed long ago?", "Painting", "Calculator", "Weather chart only", "Modern blank page", "normal"]

],


Computing: [

["Which is an input device?", "Mouse", "Monitor", "Speaker", "Printer", "easy"],

["Which device displays information?", "Monitor", "Keyboard", "Mouse", "Microphone", "easy"],

["What is an algorithm?", "A set of steps", "A picture", "A keyboard", "A score", "normal"],

["What is coding?", "Writing computer instructions", "Cooking food", "Drawing only", "Running", "easy"],

["What does a loop do?", "Repeats instructions", "Deletes instructions", "Stops every program", "Changes hardware", "normal"],

["What is a bug in a program?", "A coding error", "A keyboard key", "A picture", "A mouse", "normal"],

["A sequence runs instructions...", "In order", "Only backwards", "Only randomly", "Without instructions", "normal"],

["Which is an output device?", "Speaker", "Keyboard", "Mouse", "Microphone", "normal"],

["Which device is used to record sound?", "Microphone", "Monitor", "Printer", "Mouse", "normal"],

["What is debugging?", "Finding and fixing coding errors", "Creating more errors", "Deleting the computer", "Changing a screen colour only", "normal"],

["Which instruction would make a sprite move?", "Move 10 steps", "Say hello only", "Change colour only", "Wait forever only", "normal"],

["What does repeat 4 mean?", "Do something four times", "Delete four things", "Wait four hours", "Stop everything", "normal"],

["What is personal information?", "Information about you", "A random colour", "A game score only", "A cartoon", "normal"],

["Which should not be shared with strangers?", "Home address", "Favourite colour", "Favourite animal", "Favourite game genre", "normal"],

["What is a username?", "A name used to identify an account", "A computer mouse", "A screen", "A printer", "normal"],

["Which action is safest online?", "Ask a trusted adult if unsure", "Click every pop-up", "Tell strangers your password", "Share your address", "normal"]

]

},


/* MIDDLE PRIMARY */

middlePrimary: {

English: [

["Which word is an adverb?", "Quickly", "Quick", "Runner", "Run", "easy"],

["Which word is a conjunction?", "Because", "Happy", "Jump", "Table", "easy"],

["Choose the correct sentence.", "She walks to school.", "She walk to school.", "She walking to school.", "She walk yesterday.", "normal"],

["Which word is a synonym for angry?", "Furious", "Quiet", "Tiny", "Slow", "normal"],

["Which word is an antonym of ancient?", "Modern", "Old", "Historic", "Past", "normal"],

["Which sentence contains an adverb?", "The dog ran quickly.", "The blue dog ran.", "The dog is large.", "The dog has fur.", "normal"],

["Which word is a comparative adjective?", "Taller", "Tall", "Tallest", "Height", "normal"],

["Which sentence is in past tense?", "They played football.", "They play football.", "They are playing football.", "They will play football.", "easy"],

["Which word is a preposition?", "Under", "Happy", "Run", "Slowly", "normal"],

["Which word is a pronoun?", "They", "Table", "Jump", "Blue", "normal"],

["What is the superlative form of tall?", "Tallest", "Taller", "Tall", "Height", "normal"],

["Which word is a synonym for enormous?", "Huge", "Tiny", "Slow", "Quiet", "normal"],

["Which word is an antonym of generous?", "Selfish", "Kind", "Helpful", "Giving", "challenging"],

["Choose the sentence with correct punctuation.", "Where are you going?", "Where are you going.", "where are you going?", "Where are you going", "normal"],

["Which sentence contains a conjunction?", "I stayed inside because it rained.", "The dog barked.", "She smiled.", "We ran.", "normal"],

["What is the past tense of teach?", "Taught", "Teached", "Teaching", "Teaches", "challenging"]

],


Science: [

["What force pulls objects toward Earth?", "Gravity", "Electricity", "Sound", "Light", "easy"],

["Which change is reversible?", "Melting ice", "Burning paper", "Cooking an egg", "Rusting iron", "normal"],

["Which organ pumps blood?", "Heart", "Lungs", "Stomach", "Brain", "easy"],

["Which material conducts electricity well?", "Copper", "Rubber", "Wood", "Plastic", "normal"],

["What is evaporation?", "Liquid changing to gas", "Gas changing to liquid", "Solid changing to liquid", "Liquid changing to solid", "normal"],

["Which animal begins life as a tadpole?", "Frog", "Bird", "Cat", "Butterfly", "easy"],

["What happens when opposite magnetic poles meet?", "They attract", "They repel", "They melt", "They disappear", "normal"],

["What turns water vapour into liquid water?", "Condensation", "Evaporation", "Freezing", "Melting", "normal"],

["Which force can slow a moving object?", "Friction", "Light", "Sound", "Heat only", "normal"],

["Which material is an electrical insulator?", "Rubber", "Copper", "Aluminium", "Iron", "normal"],

["What happens when a liquid freezes?", "It becomes a solid", "It becomes gas", "It disappears", "It becomes light", "normal"],

["What happens when a solid melts?", "It becomes liquid", "It becomes gas immediately", "It becomes a plant", "It becomes light", "normal"],

["Which organ helps digest food?", "Stomach", "Heart", "Lungs", "Skin", "normal"],

["What carries blood around the body?", "Blood vessels", "Bones", "Teeth", "Hair", "normal"],

["Which part of a flowering plant makes seeds?", "Flower", "Root", "Stem only", "Soil", "normal"],

["Which energy source comes from the Sun?", "Solar energy", "Coal", "Oil", "Natural gas", "normal"]

],


Geography: [

["What is the Equator?", "An imaginary line around Earth", "A mountain", "An ocean", "A country", "easy"],

["Which landform is low land between hills?", "Valley", "Plateau", "Island", "Cliff", "normal"],

["What is climate?", "Long-term weather pattern", "Weather at one moment", "A map", "A river", "normal"],

["What is a map scale used for?", "Comparing map distance with real distance", "Showing temperature", "Showing colours only", "Naming countries only", "normal"],

["What is population?", "Number of people living in a place", "Number of roads", "Amount of rain", "Number of rivers", "easy"],

["Which is a renewable resource?", "Solar energy", "Coal", "Oil", "Natural gas", "normal"],

["Latitude measures distance north or south of...", "The Equator", "The Moon", "A river", "A city centre", "normal"],

["Which process wears away rock and soil?", "Erosion", "Condensation", "Freezing", "Photosynthesis", "challenging"],

["What is a tributary?", "A smaller river joining a larger river", "A mountain", "A road", "A desert", "normal"],

["What is the mouth of a river?", "Where it enters a larger body of water", "Where it begins only", "A hill", "A city centre", "normal"],

["Which climate is usually hot and wet all year?", "Tropical rainforest", "Polar", "Desert", "Tundra", "normal"],

["Which climate receives very little rainfall?", "Desert", "Rainforest", "Monsoon only", "Oceanic", "normal"],

["What is a settlement?", "A place where people live", "Only a river", "Only a mountain", "Only a forest", "normal"],

["What is a rural area?", "Countryside with fewer buildings", "Busy city centre", "Airport only", "Industrial estate only", "normal"],

["What is an urban area?", "A town or city", "A forest only", "A desert", "An ocean", "normal"],

["Which natural hazard involves shaking of the ground?", "Earthquake", "Drought", "Flood only", "Heatwave only", "normal"]

],


History: [

["Which is a primary source?", "A letter written during an event", "A modern textbook", "A recent documentary", "A new encyclopedia", "easy"],

["Chronology means...", "Arranging events by time", "Comparing colours", "Drawing maps", "Counting money", "easy"],

["Why did settlements often grow near rivers?", "Water and transport", "No water", "Only colder weather", "No food nearby", "normal"],

["Which civilisation used hieroglyphics?", "Ancient Egyptians", "Vikings", "Mongols", "Modern Europeans", "normal"],

["An artefact is...", "An object made or used by people", "Only a law", "Only a map", "Only a photograph", "normal"],

["What does cause mean in history?", "Something that helps make an event happen", "Something after every event", "A map symbol", "A museum", "normal"],

["Why can two sources disagree?", "People may have different perspectives", "History has no evidence", "Dates never exist", "All sources are identical", "challenging"],

["What helps historians judge trustworthiness?", "Source evaluation", "Guessing", "Ignoring evidence", "Only memorising dates", "challenging"],

["What is a secondary source?", "A later account based on other evidence", "An object from the event itself", "Only an ancient coin", "A diary written during an event", "normal"],

["Why is context important?", "It helps explain events and choices", "It removes evidence", "It changes dates", "It stops historians comparing", "normal"],

["What was an empire?", "A group of territories ruled by one power", "One small house", "A weather pattern", "A computer program", "normal"],

["Which people built a large empire around the Mediterranean?", "Romans", "Aztecs", "Maori only", "Modern astronauts", "normal"],

["Which civilisation built Machu Picchu?", "Inca", "Romans", "Vikings", "Egyptians", "normal"],

["Which civilisation built cities such as Tenochtitlan?", "Aztec", "Roman", "Viking", "Greek only", "normal"],

["What does consequence mean?", "A result of an event", "A cause only", "A map symbol", "A source type", "normal"],

["Why do historians use evidence?", "To support explanations", "To avoid facts", "To guess randomly", "To remove context", "normal"]

],


Computing: [

["What does a variable store?", "A value", "Only pictures", "Only keyboards", "Only websites", "easy"],

["What does a loop do?", "Repeats instructions", "Deletes every instruction", "Stops all programs", "Changes hardware", "easy"],

["What does an if statement do?", "Makes a decision using a condition", "Always repeats forever", "Only draws pictures", "Turns off the computer", "normal"],

["What is debugging?", "Finding and fixing errors", "Adding errors", "Deleting every program", "Changing the monitor", "normal"],

["Which is a Boolean value?", "True", "Hello", "25.5", "Cat", "normal"],

["What is an input?", "Data sent into a system", "Only screen information", "A printout", "Only speaker sound", "normal"],

["Why are functions useful?", "They organise reusable code", "They remove all variables", "They only draw pictures", "They always slow programs", "normal"],

["Which is a strong password?", "T7!mQ2#p", "123456", "password", "abc", "challenging"],

["What does output mean?", "Information produced by a system", "Only keyboard typing", "Only mouse clicks", "Only passwords", "normal"],

["What is a condition?", "A test that can be true or false", "A picture", "A sound only", "A keyboard", "normal"],

["Which data type usually stores whole numbers?", "Integer", "String", "Boolean only", "Image", "normal"],

["Which data type usually stores text?", "String", "Integer", "Boolean only", "Loop", "normal"],

["What does forever loop mean?", "Repeat continuously", "Repeat once", "Delete code", "Stop immediately", "normal"],

["What is an event in programming?", "Something that triggers code", "A broken computer only", "A password", "A monitor", "normal"],

["Why should code be tested?", "To find problems and check it works", "To make it longer", "To remove all instructions", "To avoid debugging", "normal"],

["What is a sprite?", "A programmable character or object", "A keyboard", "A printer", "A password", "normal"]

]

},


/* UPPER PRIMARY */

upperPrimary: {

English: [

["Which sentence contains a simile?", "The cloud was like cotton.", "The cloud is white.", "The cloud moved.", "The cloud disappeared.", "easy"],

["Which sentence contains a metaphor?", "Time is a thief.", "Time moves slowly.", "I checked the time.", "The clock is loud.", "normal"],

["What does infer mean?", "Work something out using clues", "Copy a sentence", "Count words", "Find only the title", "normal"],

["Which word means reluctant?", "Unwilling", "Excited", "Certain", "Careless", "challenging"],

["Which sentence is passive?", "The cake was eaten by Tom.", "Tom ate the cake.", "Tom likes cake.", "Tom will eat cake.", "challenging"],

["Which word is an abstract noun?", "Courage", "Chair", "Dog", "Apple", "normal"],

["What is the main idea of a paragraph?", "Its central message", "Its longest word", "Its punctuation", "Its first letter", "easy"],

["Which sentence uses personification?", "The wind whispered through the trees.", "The wind was strong.", "The wind blew.", "The trees were green.", "challenging"],

["Which word is a synonym for cautious?", "Careful", "Reckless", "Loud", "Tiny", "normal"],

["Which word is an antonym of scarce?", "Abundant", "Rare", "Limited", "Few", "challenging"],

["What is a topic sentence?", "A sentence stating a paragraph's main point", "The final word", "A punctuation mark", "A quotation only", "normal"],

["Which sentence contains alliteration?", "Peter picked purple plums.", "The cat slept.", "It was sunny.", "We ate lunch.", "normal"],

["What is a conclusion?", "The ending that brings ideas together", "Only a title", "Only a first sentence", "A spelling rule", "normal"],

["What is evidence in persuasive writing?", "Information supporting a claim", "A random opinion only", "A title only", "A spelling mistake", "normal"],

["Which sentence uses direct speech correctly?", "\"Come here,\" said Mum.", "Come here said Mum", "Come here. said Mum", "\"Come here said Mum.", "challenging"],

["What does context clue mean?", "Nearby information helping explain a word", "A page number", "A punctuation symbol", "A random picture only", "normal"]

],


Science: [

["Where does photosynthesis mainly occur?", "Leaves", "Roots only", "Flowers only", "Fruit only", "easy"],

["Which gas do plants take in for photosynthesis?", "Carbon dioxide", "Oxygen", "Helium", "Hydrogen", "normal"],

["Which organ filters waste from blood?", "Kidneys", "Lungs", "Heart", "Stomach", "normal"],

["Which force opposes motion between surfaces?", "Friction", "Gravity only", "Magnetism only", "Buoyancy only", "easy"],

["What usually happens to particles when heated?", "They move faster", "They stop moving", "They disappear", "They become weightless", "challenging"],

["What is an ecosystem?", "Living things and their environment interacting", "Only one animal", "Only rocks", "Only water", "normal"],

["Which cells carry oxygen around the body?", "Red blood cells", "Skin cells", "Bone cells", "Nerve cells", "challenging"],

["What do decomposers do?", "Break down dead material", "Make sunlight", "Stop food chains", "Create rocks", "normal"],

["What is a producer in a food chain?", "An organism that makes its own food", "An animal that eats everything", "A decomposer only", "A rock", "normal"],

["What is a consumer?", "An organism that gets energy by eating others", "A plant making its own food only", "A rock", "Sunlight", "normal"],

["Which organ controls the body?", "Brain", "Stomach", "Skin", "Kidney", "easy"],

["What is respiration?", "A process releasing energy from food", "Only breathing in", "Only digestion", "Only sweating", "normal"],

["Which circuit component supplies electrical energy?", "Battery", "Switch only", "Wire only", "Bulb only", "normal"],

["What happens in an open electrical circuit?", "Current does not flow", "Current always increases", "Battery doubles", "Bulb becomes a motor", "normal"],

["What is a habitat?", "The place where an organism lives", "Only its food", "Only its body", "Only its predator", "normal"],

["Which process moves water from roots to leaves?", "Transport through the plant", "Digestion", "Respiration only", "Freezing", "normal"]

],


Geography: [

["What is population density?", "People per unit area", "Number of roads", "Amount of rainfall", "Number of mountains", "easy"],

["What is migration?", "Movement of people from one place to another", "Movement of clouds", "Movement of rivers", "Movement of rocks", "easy"],

["Which is a push factor for migration?", "War", "Better jobs", "Good schools", "Safer neighbourhoods", "normal"],

["Which is a pull factor?", "More job opportunities", "Drought", "War", "Natural disaster", "normal"],

["What does urbanisation mean?", "Growth in people living in towns and cities", "Growth of forests", "Decrease in cities", "Movement of rivers", "challenging"],

["Which is non-renewable?", "Coal", "Solar", "Wind", "Hydroelectric power", "easy"],

["What causes day and night?", "Earth rotating", "Earth stopping", "The Moon disappearing", "Cloud movement", "normal"],

["What does sustainability mean?", "Meeting needs without harming future generations", "Using everything quickly", "Never using resources", "Only building cities", "challenging"],

["What is deforestation?", "Removal of forests", "Planting more forests", "Creating rivers", "Freezing oceans", "normal"],

["What is conservation?", "Protecting natural resources and environments", "Using all resources quickly", "Removing every forest", "Increasing waste", "normal"],

["What is a natural resource?", "A useful material from nature", "Only a road", "Only a building", "Only a computer", "normal"],

["What is renewable energy?", "Energy from sources that can naturally replenish", "Energy only from coal", "Energy only from oil", "Energy that never changes form", "normal"],

["What is a flood?", "Water covering normally dry land", "A long period without rain", "Ground shaking", "A volcanic eruption only", "normal"],

["What is drought?", "A long period with very little rainfall", "Too much rain in one hour only", "An earthquake", "A snowstorm only", "normal"],

["Why are cities often warmer than nearby rural areas?", "Buildings and surfaces store heat", "Cities are closer to the Sun", "Rivers create heat", "Trees create heat", "challenging"],

["What is land use?", "How land is used by people", "Only the height of land", "Only rainfall", "Only population", "normal"]

],


History: [

["What is a historical cause?", "A factor that helps produce an event", "Only something after an event", "A map symbol", "A random date", "easy"],

["What is a consequence?", "A result of an event", "Only a cause", "A source type", "A building", "easy"],

["Why are primary sources useful?", "They provide evidence from the time", "They are always unbiased", "They predict the future", "They have no perspective", "normal"],

["Why should historians consider bias?", "A source may reflect a viewpoint", "Every source is false", "Dates are never useful", "All writers agree", "normal"],

["What does continuity mean?", "Something stays similar over time", "Something changes instantly", "A false source", "A future event", "normal"],

["What does historical change mean?", "Something becomes different over time", "Everything stays identical", "Only a date", "Only a place", "easy"],

["Why use multiple historical sources?", "To compare evidence and perspectives", "To avoid evidence", "To remove context", "To make accounts identical", "challenging"],

["What is historical significance?", "How important something is for understanding the past", "How colourful a source is", "How long a book is", "How old a historian is", "challenging"],

["What is perspective?", "A person's point of view", "A date only", "A map scale", "A random number", "normal"],

["What is reliability?", "How trustworthy evidence may be", "How colourful it is", "How long it is", "How expensive it is", "normal"],

["Why did empires expand?", "For resources, power, trade or territory", "Only because of weather", "To remove every city", "To stop transport", "normal"],

["What is colonisation?", "Establishing control over another territory", "Ending all government", "Only moving within one city", "A weather event", "normal"],

["What does reform mean?", "A change intended to improve something", "Destroying all records", "Ignoring problems", "Stopping all change", "normal"],

["What is revolution?", "Major political or social change", "A map symbol", "A weather front", "A type of source only", "normal"],

["Why can historical interpretations differ?", "Historians may emphasise different evidence", "Evidence never exists", "All sources say exactly the same thing", "Dates change automatically", "challenging"],

["What is chronology useful for?", "Understanding the sequence of events", "Measuring temperature", "Drawing only maps", "Writing code", "normal"]

],


Computing: [

["What is binary?", "A number system using 0 and 1", "A system using only letters", "A picture format", "A password type", "easy"],

["What is a function?", "A reusable block of code", "A monitor", "A password", "A mouse movement", "easy"],

["What is an array?", "A collection of values", "One keyboard key", "One colour", "A network cable", "normal"],

["What does == often mean?", "Compare whether values are equal", "Assign a value", "Delete a value", "Print a value", "normal"],

["What is phishing?", "Trying to trick people into revealing information", "Making a computer faster", "Drawing digital art", "Compressing a file", "normal"],

["What is a database?", "An organised collection of data", "One picture", "A shortcut", "An animation", "normal"],

["What does AND mean in Boolean logic?", "Both conditions must be true", "At least one is true", "Both must be false", "Conditions are ignored", "challenging"],

["What is authentication?", "Checking a user's identity", "Changing monitor size", "Deleting a database", "Changing website colours", "challenging"],

["What does OR mean in Boolean logic?", "At least one condition must be true", "Both must always be true", "Both must always be false", "Conditions are ignored", "normal"],

["What is a list in programming?", "An ordered collection of values", "Only one number", "A password", "A network cable", "normal"],

["What is a parameter?", "A value passed into a function", "A monitor", "A password", "A database table only", "normal"],

["What is a return value?", "A result sent back by a function", "A keyboard key", "An error only", "A network cable", "normal"],

["Why use comments in code?", "To explain code to people", "To make the CPU faster automatically", "To store passwords", "To delete variables", "normal"],

["What is a cybersecurity threat?", "Something that may harm systems or data", "A safe password", "A normal keyboard", "A screen colour", "normal"],

["What is two-factor authentication?", "Using two ways to verify identity", "Using two usernames only", "Having two monitors", "Typing a password twice", "normal"],

["What is data validation?", "Checking whether data is sensible or allowed", "Deleting all data", "Encrypting every image only", "Printing data", "challenging"]

]

},


/* LOWER SECONDARY */

lowerSecondary: {

English: [

["What is an inference?", "A conclusion based on evidence", "A quotation only", "A spelling rule", "A title", "easy"],

["What is tone?", "The writer's attitude", "Number of paragraphs", "Only the topic", "Only punctuation", "easy"],

["Which is a complex sentence?", "Although it rained, we continued walking.", "It rained.", "We walked.", "Rain fell.", "normal"],

["What is imagery?", "Language appealing to the senses", "Only statistics", "Only punctuation", "A spelling mistake", "normal"],

["What is connotation?", "An associated meaning or feeling", "Only dictionary spelling", "Sentence length", "Word count", "challenging"],

["What is a thesis statement?", "The main claim of an argument", "A random example", "A page number", "A title only", "normal"],

["Which is alliteration?", "Wild winds whistle.", "The sun is hot.", "I like books.", "It began to rain.", "easy"],

["Which statement is most objective?", "The temperature was 30°C.", "The weather was horrible.", "It felt disgustingly hot.", "The awful heat ruined everything.", "challenging"],

["What is a rhetorical question?", "A question used mainly for effect", "A maths equation", "A spelling mistake", "A title only", "normal"],

["What is hyperbole?", "Deliberate exaggeration", "A factual statistic only", "A quotation mark", "A paragraph break", "normal"],

["What is personification?", "Giving human qualities to non-human things", "Comparing using like only", "Repeating consonants", "Listing facts", "normal"],

["What is an argument?", "A reasoned position supported by evidence", "Only a disagreement", "Only a question", "A punctuation mark", "normal"],

["What is evidence?", "Information supporting a claim", "Only an opinion", "A title", "A spelling rule", "normal"],

["What is a counterargument?", "An opposing view considered in an argument", "The title", "A conclusion only", "A metaphor", "challenging"],

["What is formal register?", "Language appropriate for serious or professional contexts", "Slang only", "Random abbreviations", "Only emojis", "normal"],

["What is a summary?", "A shorter account of main points", "A complete copy", "A list of every word", "Only the title", "normal"]

],


Science: [

["What is an atom?", "Smallest unit of an element retaining its properties", "A type of organ", "An ecosystem", "A force", "easy"],

["Which particle has a negative charge?", "Electron", "Proton", "Neutron", "Nucleus", "easy"],

["What is velocity?", "Speed in a given direction", "Distance only", "Time only", "Mass divided by volume", "normal"],

["What is density?", "Mass per unit volume", "Volume per unit time", "Force per unit distance", "Energy per temperature", "normal"],

["Which organelle controls cell activities?", "Nucleus", "Cell membrane only", "Cytoplasm only", "Vacuole only", "normal"],

["What is an acid's pH usually?", "Below 7", "Exactly 7", "Above 7", "Always 14", "normal"],

["What is kinetic energy?", "Energy of motion", "Stored chemical energy only", "Nuclear charge", "Mass", "normal"],

["Which quantity is measured in newtons?", "Force", "Mass", "Time", "Temperature", "challenging"],

["What is an element?", "A substance containing one type of atom", "Any mixture", "Any liquid", "A cell", "normal"],

["What is a compound?", "A substance made from chemically bonded elements", "Only one atom", "A physical mixture only", "A force", "normal"],

["What is a mixture?", "Substances combined without chemical bonding", "Only one element", "A single atom", "A force", "normal"],

["What does a cell membrane do?", "Controls movement of substances in and out", "Stores all DNA only", "Makes bones", "Pumps blood", "normal"],

["Which organelle releases energy during respiration?", "Mitochondria", "Cell wall", "Vacuole only", "Nucleus only", "normal"],

["What is speed calculated from?", "Distance divided by time", "Time divided by distance", "Mass divided by volume", "Force times distance", "normal"],

["What is pressure?", "Force per unit area", "Mass per unit volume", "Distance per time", "Energy per second only", "challenging"],

["What is a neutral solution's pH?", "7", "1", "14", "0", "normal"]

],


Geography: [

["At a divergent plate boundary, plates...", "Move apart", "Move together", "Stop moving", "Disappear", "normal"],

["At a convergent boundary, plates...", "Move toward each other", "Move apart", "Stop moving", "Turn into rivers", "normal"],

["What is weather?", "Short-term atmospheric conditions", "Long-term averages only", "Population pattern", "Rock type", "easy"],

["What is climate?", "Long-term weather pattern", "Weather at one moment", "River process", "Population count", "easy"],

["What is urban sprawl?", "Expansion of a city into surrounding land", "Shrinking all cities", "A river", "A volcanic eruption", "normal"],

["What is a drainage basin?", "Area drained by a river and tributaries", "Only a river mouth", "Only a waterfall", "An ocean current", "challenging"],

["What is erosion?", "Removal of material", "Dropping material", "Condensation", "Plant growth", "easy"],

["What is globalisation?", "Increasing connections between countries", "Complete isolation", "Only local weather", "Only farming", "challenging"],

["What is deposition?", "Dropping transported material", "Removing rock", "Heating air", "Forming clouds only", "normal"],

["What is weathering?", "Breakdown of rock in place", "Transport of rock", "Movement of people", "City growth", "normal"],

["What is river discharge?", "Volume of water flowing past a point per time", "River width only", "Rainfall only", "River temperature", "challenging"],

["What is a watershed?", "Boundary separating drainage basins", "A waterfall", "A river mouth", "A beach", "normal"],

["What is a meander?", "A bend in a river", "A mountain peak", "A city", "A desert dune only", "normal"],

["What is population growth?", "Increase in number of people", "Decrease in rainfall", "Increase in mountains", "Movement of plates", "normal"],

["What is birth rate?", "Number of births in a population over time", "Number of deaths", "Number of migrants only", "Number of houses", "normal"],

["What is death rate?", "Number of deaths in a population over time", "Number of births", "Rainfall", "Population density only", "normal"]

],


History: [

["What is historical causation?", "Explaining why events happened", "Only listing dates", "Only naming people", "Only describing places", "easy"],

["What is provenance?", "Where a source came from and who created it", "Its colour", "Its word count", "Its page number", "normal"],

["Why does a source's purpose matter?", "It may influence what the creator says", "Purpose never affects content", "It changes the date", "It removes context", "normal"],

["What was the Renaissance?", "A period of renewed interest in classical learning", "A computer age", "An Egyptian dynasty", "A weather event", "normal"],

["What is imperialism?", "Extending control over other territories", "Ending all trade", "Studying maps", "Building one city", "normal"],

["What is nationalism?", "Strong identification with a nation", "A type of farming", "A source type", "A weather pattern", "normal"],

["What is source reliability?", "How trustworthy a source may be", "How colourful it is", "How old the paper looks", "How long it is", "challenging"],

["Why compare historical interpretations?", "Historians may explain evidence differently", "All historians agree", "Interpretations use no evidence", "Dates do not matter", "challenging"],

["What is industrialisation?", "Growth of machine-based production", "Return to hunting only", "End of all trade", "A weather process", "normal"],

["What was the Industrial Revolution?", "Major change toward factory and machine production", "An ancient Egyptian event", "A climate event", "A computer revolution", "normal"],

["What is democracy?", "A system where people participate in choosing government", "Rule by one emperor only", "No government", "A source type", "normal"],

["What is monarchy?", "Government headed by a monarch", "Government with no leader", "A trade network", "A source type", "normal"],

["Why might propaganda be unreliable?", "It is designed to persuade", "It always contains no words", "It has no purpose", "It cannot use images", "challenging"],

["What is historical context?", "Conditions surrounding an event", "Only the date", "Only the title", "Only one person's name", "normal"],

["What is significance?", "Importance of an event or development", "Length of a source", "Colour of a document", "Number of paragraphs", "normal"],

["Why do historians corroborate sources?", "To check evidence against other evidence", "To avoid comparison", "To remove dates", "To create bias", "challenging"]

],


Computing: [

["What is decomposition?", "Breaking a problem into smaller parts", "Joining everything together", "Deleting code", "Brightening a screen", "normal"],

["What is abstraction?", "Focusing on important details", "Adding every detail", "Deleting all data", "Only using pictures", "normal"],

["What is a Boolean value?", "True or false", "Only a decimal", "Only text", "Only an image", "easy"],

["What does NOT do in Boolean logic?", "Reverses a truth value", "Adds two numbers", "Repeats a loop", "Stores an image", "normal"],

["What does RAM store?", "Data currently being used", "Only permanent data", "Paper documents", "Internet cables", "normal"],

["What is a CPU?", "Processor that executes instructions", "A storage drive", "A keyboard", "A password", "easy"],

["What is malware?", "Malicious software", "A programming language", "A safe password", "A monitor type", "normal"],

["What is encryption?", "Transforming data to protect it", "Deleting data", "Printing data", "Sorting files only", "challenging"],

["What is secondary storage?", "Long-term storage such as SSD or HDD", "RAM only", "CPU cache only", "Keyboard memory", "normal"],

["What is an operating system?", "Software managing hardware and programs", "A keyboard", "A password", "A database record", "normal"],

["What is a network?", "Connected devices that can communicate", "One isolated file", "A keyboard", "A printer cable only", "normal"],

["What is an IP address used for?", "Identifying a device on a network", "Storing a password", "Drawing graphics", "Measuring CPU speed", "normal"],

["What is a protocol?", "A set of rules for communication", "A type of keyboard", "A colour value", "A database row", "normal"],

["What is source code?", "Human-readable program instructions", "Only binary data", "A monitor", "A hard drive", "normal"],

["What is syntax?", "Rules for writing valid code", "A password", "A database table", "A computer virus", "normal"],

["What is a syntax error?", "Code that breaks language-writing rules", "A damaged monitor", "Slow internet only", "A strong password", "normal"]

]

},


/* UPPER SECONDARY */

upperSecondary: {

English: [

["What is a rhetorical question?", "A question asked mainly for effect", "A numerical question", "A spelling rule", "A sentence with no purpose", "easy"],

["What is juxtaposition?", "Placing contrasting ideas close together", "Repeating one word", "Removing comparisons", "Writing alphabetically", "normal"],

["What is an unreliable narrator?", "A narrator whose account may not be fully trustworthy", "A narrator who never speaks", "A narrator giving dates only", "A narrator always objective", "normal"],

["What is pathos?", "Appeal to emotion", "Appeal only to mathematics", "Sentence structure", "Rhyme scheme", "normal"],

["What is ethos?", "Appeal based on credibility", "Appeal based only on emotion", "A rhyme pattern", "A punctuation mark", "normal"],

["What is logos?", "Appeal using reasoning or evidence", "Appeal only to reputation", "A metaphor", "A sound effect", "normal"],

["What is satire?", "Humour or exaggeration used to criticise", "A neutral report", "A dictionary definition", "A simple rhyme", "challenging"],

["What is a motif?", "A recurring element with significance", "A random typo", "One punctuation mark", "A page number", "challenging"],

["What is symbolism?", "Using something to represent a deeper idea", "Using only facts", "Correcting spelling", "Counting paragraphs", "normal"],

["What is dramatic irony?", "Audience knows something a character does not", "Everyone knows the same thing", "A character speaks loudly", "A narrator changes tense", "challenging"],

["What is ambiguity?", "Language allowing more than one interpretation", "Language with one exact meaning only", "A spelling error", "A short sentence", "normal"],

["What is a semantic field?", "A group of words linked by meaning", "A rhyme pattern", "A punctuation rule", "A paragraph length", "challenging"],

["What is persuasive language?", "Language intended to influence an audience", "Language only describing weather", "Only dialogue", "Only instructions", "normal"],

["What is a concession in argument?", "Acknowledging part of an opposing view", "Ignoring every opposing view", "Repeating the thesis only", "Using no evidence", "challenging"],

["What is synthesis?", "Combining ideas from different sources", "Copying one source exactly", "Listing titles only", "Deleting evidence", "challenging"],

["What is evaluation?", "Judging strengths, weaknesses or significance using criteria", "Repeating facts only", "Listing words", "Adding punctuation", "challenging"]

],


Science: [

["What is acceleration?", "Rate of change of velocity", "Distance only", "Mass per volume", "Force per area only", "easy"],

["What does Newton's second law relate?", "Force, mass and acceleration", "Energy and temperature only", "Voltage and resistance only", "Density and pressure only", "normal"],

["What is a covalent bond?", "A bond formed by sharing electrons", "Sharing protons", "A force between planets", "Cell division", "normal"],

["What is an ionic bond?", "Attraction between oppositely charged ions", "Sharing neutrons", "Sharing nuclei", "A cell division process", "normal"],

["Which molecule carries genetic information?", "DNA", "Water", "Oxygen", "Carbon dioxide", "easy"],

["What is mitosis?", "Cell division producing genetically similar cells", "Production of gametes only", "Respiration", "Digestion", "normal"],

["What is resistance measured in?", "Ohms", "Volts", "Amperes", "Watts", "normal"],

["What is natural selection?", "Advantageous inherited traits can increase reproductive success", "Organisms change because they want to", "Every organism survives equally", "Traits are never inherited", "challenging"],

["What is current measured in?", "Amperes", "Volts", "Ohms", "Watts only", "normal"],

["What is potential difference measured in?", "Volts", "Amperes", "Ohms", "Newtons", "normal"],

["What is power measured in?", "Watts", "Volts", "Ohms", "Kelvin only", "normal"],

["What is an isotope?", "Atoms of one element with different neutron numbers", "Different elements with identical protons", "A compound", "A molecule with no atoms", "challenging"],

["What is meiosis?", "Cell division producing genetically varied gametes", "Growth of identical body cells only", "Respiration", "Digestion", "challenging"],

["What is a gene?", "A section of DNA influencing a characteristic", "A whole organ", "A protein only", "A cell membrane", "normal"],

["What is an enzyme?", "A biological catalyst", "A type of cell wall", "A mineral only", "A force", "normal"],

["What happens to resistance if voltage is constant and current decreases?", "Resistance increases", "Resistance decreases", "Resistance becomes zero", "Voltage becomes mass", "challenging"]

],


Geography: [

["What is subduction?", "One plate moving beneath another", "Two rivers meeting", "Wind moving sand", "A city expanding", "normal"],

["Which boundary forms many mid-ocean ridges?", "Divergent", "Convergent", "Stationary", "Collision only", "normal"],

["What is carrying capacity?", "Maximum population an environment can support sustainably", "Number of roads", "Total rainfall", "Maximum river speed", "challenging"],

["What is food security?", "Reliable access to sufficient safe food", "Only growing rice", "Only importing food", "No agriculture", "normal"],

["What is climate mitigation?", "Actions reducing causes of climate change", "Ignoring emissions", "Measuring rainfall only", "Building roads only", "normal"],

["What is climate adaptation?", "Adjusting to climate effects", "Removing all weather", "Stopping Earth's rotation", "Only measuring temperature", "normal"],

["What is global interdependence?", "Countries relying on one another", "Countries having no connections", "Only local transport", "Only domestic tourism", "normal"],

["Which measure is associated with inequality?", "Gini coefficient", "Latitude", "River discharge", "Wind speed", "challenging"],

["What is a tectonic hazard?", "Hazard linked to movements of Earth's crust", "Only rainfall", "Only heatwaves", "Only drought", "normal"],

["What is liquefaction?", "Water-saturated ground losing strength during shaking", "Rock melting into magma", "River freezing", "Cloud formation", "challenging"],

["What is a storm surge?", "Abnormal rise of sea level caused by a storm", "A drought", "A landslide only", "A volcanic eruption", "normal"],

["What is coastal erosion?", "Removal of coastal material by waves and processes", "Building a new coast", "Only deposition", "Forest growth", "normal"],

["What is managed retreat?", "Allowing selected coastal areas to flood naturally", "Building higher skyscrapers", "Removing all rivers", "Stopping tides", "challenging"],

["What is economic development?", "Improvement in economic well-being and opportunities", "Only population increase", "Only rainfall", "Only land size", "normal"],

["What is HDI?", "Index combining health, education and income indicators", "Only income", "Only life expectancy", "Only population", "challenging"],

["What is urban regeneration?", "Improving run-down urban areas", "Removing every building", "Moving all people to farms", "Creating a river", "normal"]

],


History: [

["What is corroboration?", "Checking whether sources support each other", "Ignoring sources", "Using only one viewpoint", "Counting words", "normal"],

["What is historiography?", "Study of how history has been written and interpreted", "Study of weather", "Study of maps only", "Study of code", "challenging"],

["What was appeasement before World War II?", "Making concessions to avoid conflict", "Starting immediate war", "Ending diplomacy", "Closing every border", "normal"],

["What was the Cold War?", "Rivalry mainly between the US and Soviet Union", "A medieval war", "A winter battle", "A trade agreement", "easy"],

["What is propaganda?", "Information designed to influence attitudes", "An unbiased weather record", "A private diary only", "A map scale", "easy"],

["What is a turning point?", "An event causing important change in direction", "Any random date", "Only a battle", "A source type", "normal"],

["What is collective security?", "Countries acting together against threats", "Every country acting alone", "Ending international organisations", "Only economic competition", "challenging"],

["What is source utility?", "How useful a source is for a historical question", "How attractive it looks", "How long it is", "How expensive it is", "normal"],

["What was fascism?", "An authoritarian ultranationalist political ideology", "A form of direct democracy only", "A trade system", "A source type", "challenging"],

["What was communism in twentieth-century political history?", "An ideology advocating common ownership and a classless society", "A monarchy only", "A religious festival", "A weather system", "challenging"],

["What does détente mean in Cold War history?", "Easing of tensions", "Immediate war", "End of diplomacy", "Colonisation", "challenging"],

["What is containment?", "Policy aimed at limiting the spread of communism", "A farming method", "A source type", "A weather strategy", "challenging"],

["What is decolonisation?", "End of colonial rule and emergence of independent states", "Beginning of every empire", "Industrialisation only", "Urbanisation", "normal"],

["What is total war?", "War involving broad mobilisation of society and resources", "A small local disagreement", "Only naval fighting", "A trade agreement", "challenging"],

["Why is provenance useful?", "It helps evaluate origin, purpose and context", "It removes the need for evidence", "It changes the source", "It proves every source true", "challenging"],

["What is historical interpretation?", "An evidence-based explanation of the past", "An artefact only", "A date only", "A map symbol", "normal"]

],


Computing: [

["What is pseudocode?", "A human-readable description of an algorithm", "Machine code only", "Hardware", "A database table", "easy"],

["What is linear search?", "Checking items one by one", "Always dividing a list in half", "Sorting using a tree only", "Encrypting data", "normal"],

["What is needed for binary search?", "Data must be sorted", "Data must be encrypted", "Data must be text", "Data must be random", "normal"],

["What is recursion?", "A function calling itself", "A loop that can never end", "A network protocol", "A database key", "challenging"],

["What is a primary key?", "A field uniquely identifying a record", "A password", "A duplicate field", "A network address", "normal"],

["What is object-oriented programming?", "Programming organised around objects", "Programming without data", "Only machine code", "Only HTML", "normal"],

["What is a firewall?", "A system filtering network traffic", "A physical wall around a PC", "A graphics program", "A database field", "normal"],

["What is algorithm efficiency?", "Resources required as input grows", "Colour of code", "Number of comments", "Monitor resolution", "challenging"],

["What is a class?", "A blueprint for creating objects", "A network cable", "A database password", "A loop only", "normal"],

["What is an object?", "An instance of a class", "Only a variable name", "A network protocol", "A database table", "normal"],

["What is encapsulation?", "Bundling data and behaviour together with controlled access", "Deleting classes", "Using no variables", "Only writing comments", "challenging"],

["What is inheritance?", "A class gaining features from another class", "Deleting all methods", "A database search", "A network attack", "challenging"],

["What is SQL SELECT used for?", "Retrieving data", "Deleting hardware", "Styling CSS", "Encrypting files", "normal"],

["What is a foreign key?", "A field linking to a key in another table", "A password", "A CPU register only", "A sorting method", "challenging"],

["What is hashing commonly used for?", "Producing a fixed-size value from data", "Drawing images", "Sending electricity", "Creating monitor pixels", "normal"],

["What is a brute-force attack?", "Trying many possible credentials or keys", "Compressing files", "Sorting records", "Drawing graphics", "normal"]

]

},


/* ADVANCED */

advanced: {

English: [

["What is a logical fallacy?", "An error in reasoning", "A spelling mistake only", "A genre", "A punctuation mark", "easy"],

["What is a false dilemma?", "Presenting only two choices when more exist", "Giving too many sources", "Using a metaphor", "Repeating a word", "normal"],

["What is an ad hominem argument?", "Attacking the person instead of the argument", "Providing evidence", "Comparing texts", "Defining a term", "normal"],

["What is synthesis in academic writing?", "Combining ideas from multiple sources", "Copying one source", "Listing sources without links", "Ignoring evidence", "normal"],

["What is register?", "Language style suited to context", "Only handwriting", "Number of sentences", "Only grammar rules", "normal"],

["What is modality?", "Expression of possibility, certainty or obligation", "Only past tense", "Only nouns", "Only punctuation", "challenging"],

["What is a straw man argument?", "Misrepresenting an opponent's argument", "Quoting an opponent accurately", "Using numerical evidence", "Providing a definition", "challenging"],

["What is metacognition?", "Thinking about one's own thinking", "Memorising without reflection", "Ignoring mistakes", "Only reading quickly", "challenging"],

["What is inductive reasoning?", "Moving from specific observations toward a general conclusion", "Starting with a general rule and applying it", "Using no evidence", "Repeating a claim", "challenging"],

["What is deductive reasoning?", "Applying a general rule to reach a specific conclusion", "Guessing from one example", "Using emotion only", "Ignoring evidence", "challenging"],

["What is an assumption?", "An idea accepted without being fully demonstrated", "A proven fact only", "A punctuation mark", "A quotation", "normal"],

["What is a premise?", "A statement supporting an argument's conclusion", "A heading only", "A stylistic device only", "A spelling rule", "normal"],

["What is a qualified claim?", "A claim limited by conditions or degree", "An absolute claim only", "A quotation only", "A title", "challenging"],

["What is rhetoric?", "Use of language to persuade or influence", "Only punctuation", "Only rhyme", "Only spelling", "normal"],

["What is critical evaluation?", "Judging evidence and reasoning using clear criteria", "Repeating a source", "Ignoring limitations", "Listing words only", "challenging"],

["What is intertextuality?", "Relationship between texts through reference or influence", "Only sentence length", "A grammar error", "A paragraph title", "challenging"]

],


Science: [

["What does conservation of energy state?", "Energy is transferred or transformed, not created or destroyed", "Energy disappears permanently", "Energy comes from nothing", "Energy has no effects", "easy"],

["What is momentum?", "Mass multiplied by velocity", "Force divided by time", "Mass divided by volume", "Energy divided by distance", "normal"],

["What is equilibrium in a reversible reaction?", "Forward and reverse rates are equal", "All reactions stop", "Only the forward reaction occurs", "All reactants disappear", "challenging"],

["What is homeostasis?", "Maintaining stable internal conditions", "Stopping cell activity", "Producing only hormones", "Changing DNA constantly", "normal"],

["What is an allele?", "An alternative form of a gene", "A protein only", "A whole chromosome pair", "A whole organism", "normal"],

["What is a vector quantity?", "A quantity with magnitude and direction", "Magnitude only", "A unit without measurement", "A chemical symbol", "normal"],

["What is activation energy?", "Minimum energy needed to start a reaction", "Maximum reaction energy", "Energy only in nuclei", "Energy lost permanently", "challenging"],

["What is osmosis?", "Net movement of water through a partially permeable membrane", "Movement of any particle through metal", "Movement of electrons", "Only active transport", "challenging"],

["What is an exothermic reaction?", "A reaction releasing energy to surroundings", "A reaction absorbing energy only", "A reaction with no energy transfer", "A nuclear reaction only", "normal"],

["What is an endothermic reaction?", "A reaction absorbing energy from surroundings", "A reaction always releasing heat", "A reaction with no energy change", "A force", "normal"],

["What is an electric field?", "A region where a charge experiences force", "A magnetic material only", "A chemical solution", "A cell organelle", "challenging"],

["What is a gravitational field?", "A region where mass experiences gravitational force", "A chemical bond", "A cell membrane", "A voltage", "challenging"],

["What is genotype?", "Genetic makeup for a characteristic", "Observable characteristic only", "An ecosystem", "A protein only", "normal"],

["What is phenotype?", "Observable characteristics influenced by genes and environment", "DNA sequence only", "An allele only", "A chromosome only", "normal"],

["What is oxidation in redox chemistry?", "Loss of electrons", "Gain of electrons", "Only melting", "Only freezing", "challenging"],

["What is reduction in redox chemistry?", "Gain of electrons", "Loss of electrons", "Only combustion", "Only dissolving", "challenging"]

],


Geography: [

["What is spatial distribution?", "The pattern of where things are located", "Only population size", "Only map colour", "Only climate data", "easy"],

["What is vulnerability?", "Degree to which people or systems can be harmed", "Only hazard magnitude", "Only hazard location", "Only rainfall", "normal"],

["What is resilience?", "Ability to recover and adapt", "Ability to avoid all change", "Number of buildings", "Amount of rainfall", "normal"],

["What is a carbon sink?", "A system absorbing more carbon than it releases", "A system only emitting carbon", "A river channel", "A weather station", "normal"],

["What is demographic ageing?", "A growing proportion of older people", "Increasing birth rate only", "Rapid urban growth only", "Falling rainfall", "normal"],

["What is ecological footprint?", "Area needed to support consumption and absorb waste", "Only amount of rubbish", "Number of parks", "Amount of rainfall", "challenging"],

["What is gentrification?", "Neighbourhood change involving investment and rising costs", "Abandonment of every city", "Only rural migration", "A volcanic process", "normal"],

["What is water stress?", "Water demand approaching or exceeding supply", "Any rainfall", "Only flooding", "Water being cold", "challenging"],

["What is environmental justice?", "Fair distribution of environmental benefits and burdens", "Only building parks", "Only measuring rainfall", "Removing every industry", "challenging"],

["What is a climate feedback loop?", "A process that amplifies or reduces change", "A river bend", "A map scale", "A migration route", "challenging"],

["What is a positive climate feedback?", "A process that amplifies an initial change", "A process that always improves weather", "A process that cancels all change", "A type of map", "challenging"],

["What is a negative feedback?", "A process that reduces an initial change", "A process increasing every change", "Only a social problem", "A river feature", "challenging"],

["What is spatial inequality?", "Uneven distribution of resources or opportunities across places", "Equal rainfall everywhere", "Equal population everywhere", "Only income data", "challenging"],

["What is a megacity?", "An urban area with more than about ten million people", "Any small town", "A village", "A rural district only", "normal"],

["What is resource security?", "Reliable access to resources such as food, water or energy", "Only importing resources", "Only reducing population", "Only building roads", "normal"],

["What is sustainable development?", "Development meeting present needs without undermining future needs", "Using resources as fast as possible", "Stopping all development", "Only economic growth", "challenging"]

],


History: [

["What is historical revisionism?", "Reinterpreting the past using new evidence or perspectives", "Inventing evidence", "Ignoring sources", "Changing dates randomly", "normal"],

["What is structural causation?", "Long-term systems influencing events", "Only one person's choice", "Only later events", "A source type", "challenging"],

["What is agency in history?", "Capacity of people or groups to act", "Only economic data", "Only geography", "A timeline", "normal"],

["What is historical contingency?", "Outcomes depend on particular circumstances", "Every event was unavoidable", "A source type", "A dating system", "challenging"],

["What is presentism?", "Judging the past mainly by present-day values", "Using present-tense verbs", "Studying modern history", "Reading current news", "challenging"],

["What is a historical interpretation?", "An explanation based on evidence and argument", "A raw artefact only", "A map scale", "A date only", "easy"],

["What is periodisation?", "Dividing history into periods for analysis", "Removing dates", "Using only primary sources", "Drawing maps", "normal"],

["What is historical context?", "Conditions surrounding an event", "Only the date", "Only the location", "Only the title", "easy"],

["What is a counterfactual question?", "A question asking what might have happened under different conditions", "A question with no historical relevance", "A primary source", "A date", "challenging"],

["What is continuity and change analysis?", "Examining what stayed similar and what changed over time", "Only listing dates", "Ignoring comparisons", "Studying weather", "normal"],

["What is a historical narrative?", "An organised account explaining events over time", "A map only", "An artefact", "A statistic only", "normal"],

["What is source limitation?", "A weakness affecting what a source can tell us", "Proof that a source is useless", "The colour of a source", "The age of paper only", "normal"],

["What is source value?", "A feature making a source useful for a particular question", "Its price", "Its word count only", "Its colour", "normal"],

["What is an unintended consequence?", "A result that was not originally planned", "A planned goal", "A primary source", "A date", "challenging"],

["What is path dependence?", "Past choices shaping later possibilities", "History having no influence", "Only geography", "A method of dating", "challenging"],

["What is comparative history?", "Studying similarities and differences across societies or periods", "Studying only one date", "Avoiding comparisons", "Using only one source", "challenging"]

],


Computing: [

["What is Big O notation used for?", "Describing algorithm growth in resource use", "Naming variables", "Encrypting passwords", "Styling web pages", "normal"],

["What is O(1)?", "Constant-time complexity", "Linear-time complexity", "Quadratic-time complexity", "Exponential-time complexity", "normal"],

["What is a stack?", "Last-in first-out data structure", "First-in first-out structure", "Database key", "Network protocol", "easy"],

["What is a queue?", "First-in first-out data structure", "Last-in first-out structure", "Sorting algorithm", "Encryption key", "easy"],

["What is a hash function?", "A function mapping data to a fixed-size value", "A loop", "A graphics effect", "A database relationship", "normal"],

["What is polymorphism?", "A common interface with different implementations", "Keeping every class identical", "Deleting all methods", "Using one variable", "challenging"],

["What is SQL mainly used for?", "Working with relational databases", "Drawing graphics", "Styling HTML", "Managing power", "easy"],

["What is a race condition?", "An outcome depending on timing of concurrent operations", "A sorting algorithm", "A database query", "A graphics effect", "challenging"],

["What is O(n)?", "Linear-time complexity", "Constant-time complexity", "Quadratic-time complexity", "Logarithmic-time complexity", "normal"],

["What is O(n²)?", "Quadratic-time complexity", "Constant-time complexity", "Linear-time complexity", "Logarithmic-time complexity", "normal"],

["What is a binary tree?", "A tree structure where each node has at most two children", "A flat array only", "A network protocol", "A database key", "normal"],

["What is a linked list?", "Nodes connected using references", "A fixed-size integer", "A network attack", "A CSS rule", "normal"],

["What is concurrency?", "Multiple tasks making progress during overlapping time", "Only one instruction existing", "Deleting threads", "Sorting only", "challenging"],

["What is a deadlock?", "Processes waiting indefinitely for one another", "A fast algorithm", "A database table", "A graphics effect", "challenging"],

["What is normalisation in databases?", "Organising data to reduce redundancy and dependency problems", "Encrypting all data", "Deleting every table", "Sorting alphabetically only", "challenging"],

["What is an API?", "An interface allowing software systems to communicate", "A CPU instruction only", "A database password", "A keyboard shortcut", "normal"]

]

}

};


/* =========================================
   HASH
========================================= */

function hashString(text) {

    let hash =
        2166136261;


    for (
        let i = 0;
        i < text.length;
        i++
    ) {

        hash ^=
            text.charCodeAt(i);


        hash =
            Math.imul(
                hash,
                16777619
            );

    }


    return hash >>> 0;

}


/* =========================================
   BUILD KNOWLEDGE QUESTIONS
========================================= */

function buildKnowledgePool(
    level,
    subject
) {

    const group =
        getLevelGroup(
            level
        );


    const base =
        knowledgeBank[
            group
        ]?.[
            subject
        ];


    if (!base) {

        return [];

    }


    return base.map(
        (
            source,
            index
        ) => {

            return {

                id:
                    level +
                    "|" +
                    subject +
                    "|" +
                    index +
                    "|" +
                    hashString(
                        source[0]
                    ),

                question:
                    source[0],

                answers: [
                    source[1],
                    source[2],
                    source[3],
                    source[4]
                ],

                correct:
                    source[1],

                difficulty:
                    source[5]

            };

        }
    );

}


/* =========================================
   SEEDED RANDOM
========================================= */

function seededRandom(seed) {

    return function () {

        seed +=
            0x6D2B79F5;


        let value =
            seed;


        value =
            Math.imul(
                value ^
                (
                    value >>>
                    15
                ),

                value |
                1
            );


        value ^=
            value +
            Math.imul(

                value ^
                (
                    value >>>
                    7
                ),

                value |
                61

            );


        return (

            (
                value ^
                (
                    value >>>
                    14
                )
            )
            >>> 0

        ) /
        4294967296;

    };

}


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

    const copy =
        [
            ...array
        ];


    for (
        let i =
            copy.length -
            1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(

                Math.random() *
                (
                    i +
                    1
                )

            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


/* =========================================
   MATH ANSWERS
========================================= */

function makeUniqueAnswers(
    correct,
    wrongAnswers
) {

    const answers = [];


    [
        correct,
        ...wrongAnswers
    ].forEach(
        answer => {

            if (
                !answers.some(
                    existing =>
                        String(
                            existing
                        ) ===
                        String(
                            answer
                        )
                )
            ) {

                answers.push(
                    answer
                );

            }

        }
    );


    let offset = 1;


    while (
        answers.length <
        4
    ) {

        const number =
            Number(
                correct
            );


        if (
            Number.isFinite(
                number
            )
        ) {

            const extra =
                number +
                offset;


            if (
                !answers.includes(
                    extra
                )
            ) {

                answers.push(
                    extra
                );

            }

        }


        offset++;

    }


    return answers.slice(
        0,
        4
    );

}


function makeMathQuestion(
    text,
    correct,
    wrongAnswers,
    difficulty
) {

    return {

        question:
            text,

        correct:
            correct,

        answers:
            makeUniqueAnswers(
                correct,
                wrongAnswers
            ),

        difficulty:
            difficulty

    };

}


/* =========================================
   GENERATE MATH QUESTIONS
========================================= */

function generateMathPool(level) {

    const random =
        seededRandom(

            hashString(
                "SkillGarden-" +
                level
            )

        );


    const pool = [];

    const usedTexts =
        new Set();


    function rnd(
        minimum,
        maximum
    ) {

        return Math.floor(

            random() *
            (
                maximum -
                minimum +
                1
            )

        ) +
        minimum;

    }


    function add(
        question
    ) {

        if (
            !question
        ) {

            return;

        }


        if (
            usedTexts.has(
                question.question
            )
        ) {

            return;

        }


        question.id =

            level +
            "|Maths|" +
            hashString(
                question.question
            );


        usedTexts.add(
            question.question
        );


        pool.push(
            question
        );

    }


    let attempts = 0;


    while (
        pool.length <
        100 &&
        attempts <
        15000
    ) {

        attempts++;


        let difficulty;


        if (
            pool.length <
            30
        ) {

            difficulty =
                "easy";

        }

        else if (
            pool.length <
            75
        ) {

            difficulty =
                "normal";

        }

        else {

            difficulty =
                "challenging";

        }


        const mode =
            attempts %
            6;


        /* KINDERGARTEN */

        if (
            level ===
            "Kindergarten"
        ) {

            if (
                mode === 0
            ) {

                const a =
                    rnd(
                        0,
                        10
                    );


                const b =
                    rnd(
                        0,
                        10
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} + ${b}?`,

                        a + b,

                        [
                            a + b + 1,

                            Math.max(
                                0,
                                a + b - 1
                            ),

                            a + b + 2
                        ],

                        difficulty

                    )
                );

            }


            else if (
                mode === 1
            ) {

                const a =
                    rnd(
                        2,
                        20
                    );


                const b =
                    rnd(
                        0,
                        a
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} - ${b}?`,

                        a - b,

                        [
                            a - b + 1,

                            Math.max(
                                0,
                                a - b - 1
                            ),

                            a - b + 2
                        ],

                        difficulty

                    )
                );

            }


            else if (
                mode === 2
            ) {

                const number =
                    rnd(
                        1,
                        40
                    );


                add(
                    makeMathQuestion(

                        `What number comes after ${number}?`,

                        number + 1,

                        [
                            number,

                            number - 1,

                            number + 2
                        ],

                        difficulty

                    )
                );

            }


            else if (
                mode === 3
            ) {

                const number =
                    rnd(
                        2,
                        40
                    );


                add(
                    makeMathQuestion(

                        `What number comes before ${number}?`,

                        number - 1,

                        [
                            number,

                            number + 1,

                            number - 2
                        ],

                        difficulty

                    )
                );

            }


            else {

                const a =
                    rnd(
                        1,
                        40
                    );


                const b =
                    rnd(
                        1,
                        40
                    );


                if (
                    a === b
                ) {

                    continue;

                }


                add(
                    makeMathQuestion(

                        `Which number is bigger: ${a} or ${b}?`,

                        Math.max(
                            a,
                            b
                        ),

                        [
                            Math.min(
                                a,
                                b
                            ),

                            Math.max(
                                a,
                                b
                            ) + 1,

                            0
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P1 */

        else if (
            level === "P1"
        ) {

            if (
                mode <= 2
            ) {

                const a =
                    rnd(
                        1,
                        60
                    );


                const b =
                    rnd(
                        1,
                        40
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} + ${b}?`,

                        a + b,

                        [
                            a + b - 1,

                            a + b + 1,

                            a + b + 10
                        ],

                        difficulty

                    )
                );

            }


            else if (
                mode <= 4
            ) {

                const a =
                    rnd(
                        10,
                        100
                    );


                const b =
                    rnd(
                        1,
                        a
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} - ${b}?`,

                        a - b,

                        [
                            a - b - 1,

                            a - b + 1,

                            a - b + 10
                        ],

                        difficulty

                    )
                );

            }


            else {

                const a =
                    rnd(
                        1,
                        100
                    );


                const b =
                    rnd(
                        1,
                        100
                    );


                if (
                    a === b
                ) {

                    continue;

                }


                add(
                    makeMathQuestion(

                        `Which is smaller: ${a} or ${b}?`,

                        Math.min(
                            a,
                            b
                        ),

                        [
                            Math.max(
                                a,
                                b
                            ),

                            Math.min(
                                a,
                                b
                            ) + 1,

                            0
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P2 */

        else if (
            level ===
            "P2"
        ) {

            if (
                mode === 0
            ) {

                const a =
                    rnd(
                        20,
                        300
                    );


                const b =
                    rnd(
                        10,
                        150
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} + ${b}?`,

                        a + b,

                        [
                            a + b - 10,

                            a + b + 10,

                            a + b - 1
                        ],

                        difficulty

                    )
                );

            }


            else if (
                mode === 1
            ) {

                const a =
                    rnd(
                        50,
                        300
                    );


                const b =
                    rnd(
                        10,
                        a
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} - ${b}?`,

                        a - b,

                        [
                            a - b - 10,

                            a - b + 10,

                            a - b + 1
                        ],

                        difficulty

                    )
                );

            }


            else {

                const table =
                    [
                        2,
                        3,
                        4,
                        5,
                        10
                    ][
                        rnd(
                            0,
                            4
                        )
                    ];


                const amount =
                    rnd(
                        2,
                        12
                    );


                add(
                    makeMathQuestion(

                        `What is ${table} × ${amount}?`,

                        table *
                        amount,

                        [
                            table *
                            (
                                amount -
                                1
                            ),

                            table *
                            (
                                amount +
                                1
                            ),

                            table +
                            amount
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P3 */

        else if (
            level ===
            "P3"
        ) {

            if (
                mode <= 2
            ) {

                const a =
                    rnd(
                        2,
                        12
                    );


                const b =
                    rnd(
                        2,
                        12
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} × ${b}?`,

                        a *
                        b,

                        [
                            a *
                            (
                                b -
                                1
                            ),

                            a *
                            (
                                b +
                                1
                            ),

                            a +
                            b
                        ],

                        difficulty

                    )
                );

            }


            else {

                const divisor =
                    rnd(
                        2,
                        12
                    );


                const answer =
                    rnd(
                        2,
                        15
                    );


                add(
                    makeMathQuestion(

                        `What is ${divisor * answer} ÷ ${divisor}?`,

                        answer,

                        [
                            answer -
                            1,

                            answer +
                            1,

                            answer +
                            divisor
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P4 */

        else if (
            level ===
            "P4"
        ) {

            if (
                mode <=
                2
            ) {

                const a =
                    rnd(
                        10,
                        99
                    );


                const b =
                    rnd(
                        2,
                        12
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} × ${b}?`,

                        a *
                        b,

                        [
                            a *
                            b -
                            b,

                            a *
                            b +
                            b,

                            a +
                            b
                        ],

                        difficulty

                    )
                );

            }


            else {

                const a =
                    rnd(
                        1,
                        9
                    ) /
                    10;


                const b =
                    rnd(
                        1,
                        9
                    ) /
                    10;


                const answer =
                    (
                        a +
                        b
                    ).toFixed(
                        1
                    );


                add(
                    makeMathQuestion(

                        `What is ${a.toFixed(1)} + ${b.toFixed(1)}?`,

                        answer,

                        [
                            (
                                Number(
                                    answer
                                ) +
                                0.1
                            ).toFixed(
                                1
                            ),

                            Math.max(
                                0,
                                Number(
                                    answer
                                ) -
                                0.1
                            ).toFixed(
                                1
                            ),

                            (
                                Number(
                                    answer
                                ) +
                                1
                            ).toFixed(
                                1
                            )
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P5 */

        else if (
            level ===
            "P5"
        ) {

            if (
                mode <=
                2
            ) {

                const percent =
                    [
                        10,
                        20,
                        25,
                        50
                    ][
                        rnd(
                            0,
                            3
                        )
                    ];


                const total =
                    rnd(
                        2,
                        25
                    ) *
                    20;


                const answer =
                    total *
                    percent /
                    100;


                add(
                    makeMathQuestion(

                        `What is ${percent}% of ${total}?`,

                        answer,

                        [
                            answer +
                            10,

                            Math.max(
                                0,
                                answer -
                                10
                            ),

                            total
                        ],

                        difficulty

                    )
                );

            }


            else {

                const a =
                    rnd(
                        5,
                        40
                    );


                const b =
                    rnd(
                        2,
                        12
                    );


                const c =
                    rnd(
                        2,
                        8
                    );


                add(
                    makeMathQuestion(

                        `What is ${a} + ${b} × ${c}?`,

                        a +
                        b *
                        c,

                        [
                            (
                                a +
                                b
                            ) *
                            c,

                            a +
                            b *
                            c +
                            c,

                            a +
                            b *
                            c -
                            c
                        ],

                        difficulty

                    )
                );

            }

        }


        /* P6 */

        else if (
            level ===
            "P6"
        ) {

            if (
                mode <=
                2
            ) {

                const percent =
                    [
                        10,
                        15,
                        20,
                        25,
                        50
                    ][
                        rnd(
                            0,
                            4
                        )
                    ];


                const total =
                    rnd(
                        2,
                        25
                    ) *
                    100;


                const answer =
                    total *
                    percent /
                    100;


                add(
                    makeMathQuestion(

                        `What is ${percent}% of ${total}?`,

                        answer,

                        [
                            answer +
                            20,

                            Math.max(
                                0,
                                answer -
                                20
                            ),

                            total /
                            2
                        ],

                        difficulty

                    )
                );

            }


            else {

                const x =
                    rnd(
                        5,
                        100
                    );


                const addNumber =
                    rnd(
                        5,
                        50
                    );


                add(
                    makeMathQuestion(

                        `If x + ${addNumber} = ${x + addNumber}, what is x?`,

                        x,

                        [
                            x +
                            addNumber,

                            x -
                            1,

                            x +
                            1
                        ],

                        difficulty

                    )
                );

            }

        }


        /* S1 */

        else if (
            level ===
            "S1"
        ) {

            const x =
                rnd(
                    2,
                    50
                );


            const addNumber =
                rnd(
                    2,
                    30
                );


            add(
                makeMathQuestion(

                    `Solve x + ${addNumber} = ${x + addNumber}.`,

                    x,

                    [
                        x -
                        1,

                        x +
                        1,

                        x +
                        addNumber
                    ],

                    difficulty

                )
            );

        }


        /* S2 */

        else if (
            level ===
            "S2"
        ) {

            const x =
                rnd(
                    2,
                    30
                );


            const multiplier =
                rnd(
                    2,
                    7
                );


            const addNumber =
                rnd(
                    1,
                    30
                );


            add(
                makeMathQuestion(

                    `Solve ${multiplier}x + ${addNumber} = ${multiplier * x + addNumber}.`,

                    x,

                    [
                        x -
                        1,

                        x +
                        1,

                        multiplier *
                        x
                    ],

                    difficulty

                )
            );

        }


        /* S3 */

        else if (
            level ===
            "S3"
        ) {

            if (
                mode <=
                2
            ) {

                const root =
                    rnd(
                        2,
                        25
                    );


                add(
                    makeMathQuestion(

                        `If x² = ${root * root} and x is positive, find x.`,

                        root,

                        [
                            -root,

                            root +
                            1,

                            root -
                            1
                        ],

                        difficulty

                    )
                );

            }


            else {

                const gradient =
                    rnd(
                        1,
                        10
                    );


                const x =
                    rnd(
                        1,
                        15
                    );


                add(
                    makeMathQuestion(

                        `For y = ${gradient}x, find y when x = ${x}.`,

                        gradient *
                        x,

                        [
                            gradient *
                            x +
                            gradient,

                            gradient *
                            x -
                            gradient,

                            x +
                            gradient
                        ],

                        difficulty

                    )
                );

            }

        }


        /* S4 */

        else if (
            level ===
            "S4"
        ) {

            const x =
                rnd(
                    2,
                    30
                );


            const y =
                rnd(
                    2,
                    30
                );


            add(
                makeMathQuestion(

                    `If x = ${x} and y = ${y}, find 2x + y.`,

                    2 *
                    x +
                    y,

                    [
                        x +
                        y,

                        2 *
                        (
                            x +
                            y
                        ),

                        x +
                        2 *
                        y
                    ],

                    difficulty

                )
            );

        }


        /* ADVANCED */

        else {

            if (
                mode <=
                2
            ) {

                const coefficient =
                    rnd(
                        2,
                        12
                    );


                const power =
                    rnd(
                        2,
                        6
                    );


                add({

                    question:
                        `What is the derivative of ${coefficient}x^${power}?`,

                    answers: [

                        `${coefficient * power}x^${power - 1}`,

                        `${coefficient}x^${power - 1}`,

                        `${coefficient * power}x^${power}`,

                        `${power}x^${power - 1}`

                    ],

                    correct:
                        `${coefficient * power}x^${power - 1}`,

                    difficulty:
                        difficulty

                });

            }


            else {

                const first =
                    rnd(
                        1,
                        25
                    );


                const difference =
                    rnd(
                        2,
                        12
                    );


                const term =
                    rnd(
                        4,
                        15
                    );


                const answer =
                    first +
                    (
                        term -
                        1
                    ) *
                    difference;


                add(
                    makeMathQuestion(

                        `An arithmetic sequence starts at ${first} and increases by ${difference}. Find term ${term}.`,

                        answer,

                        [
                            answer -
                            difference,

                            answer +
                            difference,

                            first +
                            term *
                            difference
                        ],

                        difficulty

                    )
                );

            }

        }

    }


    return pool;

}


/* =========================================
   GET QUESTION BANK
========================================= */

function getQuestionPool(
    level,
    subject
) {

    if (
        subject ===
        "Maths"
    ) {

        return generateMathPool(
            level
        );

    }


    return buildKnowledgePool(
        level,
        subject
    );

}


/* =========================================
   QUESTION HISTORY
========================================= */

function getHistoryKey(
    level,
    subject
) {

    return (
        level +
        "|" +
        subject
    );

}


function ensureQuestionHistory(
    level,
    subject
) {

    const key =
        getHistoryKey(
            level,
            subject
        );


    if (
        !Array.isArray(
            player.usedQuestions[
                key
            ]
        )
    ) {

        player.usedQuestions[
            key
        ] = [];

    }


    return key;

}


function markQuestionSeen(
    question
) {

    const key =
        ensureQuestionHistory(

            player.level,

            player.subject

        );


    if (
        !player.usedQuestions[
            key
        ].includes(
            question.id
        )
    ) {

        player.usedQuestions[
            key
        ].push(
            question.id
        );


        savePlayer();

    }

}


/* =========================================
   QUESTION CYCLE

   IMPORTANT:

   1. Never repeat an unused question.
   2. When EVERY question has been used,
      clear that subject history.
   3. Start that subject again.
========================================= */

function getQuizQuestions(
    level,
    subject,
    bank
) {

    const key =
        ensureQuestionHistory(
            level,
            subject
        );


    let used =
        player.usedQuestions[
            key
        ];


    let unused =
        bank.filter(
            question =>
                !used.includes(
                    question.id
                )
        );


    /*
        FULL BANK COMPLETED.

        Start a new cycle automatically.
    */

    if (
        unused.length ===
        0
    ) {

        player.usedQuestions[
            key
        ] = [];


        savePlayer();


        used = [];


        unused =
            [
                ...bank
            ];

    }


    /*
        We do NOT restart early.

        If only 3 questions remain,
        the student gets those final
        3 questions.

        The NEXT quiz then starts a
        brand-new cycle.
    */


    const easy =
        shuffle(
            unused.filter(
                question =>
                    question.difficulty ===
                    "easy"
            )
        );


    const normal =
        shuffle(
            unused.filter(
                question =>
                    question.difficulty ===
                    "normal"
            )
        );


    const challenging =
        shuffle(
            unused.filter(
                question =>
                    question.difficulty ===
                    "challenging"
            )
        );


    const selected =
        [];


    function take(
        list,
        amount
    ) {

        while (
            list.length >
            0 &&

            amount >
            0 &&

            selected.length <
            8
        ) {

            selected.push(
                list.shift()
            );


            amount--;

        }

    }


    /*
        AGE-APPROPRIATE MIX
    */

    if (
        level ===
        "Kindergarten"
    ) {

        take(
            easy,
            5
        );


        take(
            normal,
            3
        );

    }


    else if (
        level === "P1" ||
        level === "P2"
    ) {

        take(
            easy,
            3
        );


        take(
            normal,
            4
        );


        take(
            challenging,
            1
        );

    }


    else {

        take(
            easy,
            2
        );


        take(
            normal,
            4
        );


        take(
            challenging,
            2
        );

    }


    /*
        Fill remaining spaces from
        unused questions only.
    */

    const remaining =
        shuffle(

            unused.filter(
                question =>

                    !selected.some(
                        chosen =>
                            chosen.id ===
                            question.id
                    )

            )

        );


    while (
        selected.length <
        8 &&

        remaining.length >
        0
    ) {

        selected.push(
            remaining.shift()
        );

    }


    return shuffle(
        selected
    );

}


/* =========================================
   LEVEL
========================================= */

function selectLevel(level) {

    player.level =
        level;


    savePlayer();


    goHome();

}


/* =========================================
   SUBJECTS
========================================= */

function getEmoji(subject) {

    const emojis = {

        Maths:
            "🔢",

        English:
            "📖",

        Science:
            "🔬",

        Geography:
            "🌍",

        History:
            "🏛️",

        Computing:
            "💻"

    };


    return (
        emojis[
            subject
        ] ||
        "📚"
    );

}


function createSubjectButtons() {

    const container =
        document.getElementById(
            "subjectButtons"
        );


    container.innerHTML =
        "";


    subjects[
        player.level
    ].forEach(
        subject => {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =

                getEmoji(
                    subject
                ) +
                " " +
                subject;


            button.onclick =
                () =>
                    startQuiz(
                        subject
                    );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz(subject) {

    player.subject =
        subject;


    currentQuestion =
        0;


    quizScore =
        0;


    const bank =
        getQuestionPool(

            player.level,

            subject

        );


    if (
        bank.length ===
        0
    ) {

        alert(
            "There are no questions available for this subject."
        );


        return;

    }


    currentQuiz =
        getQuizQuestions(

            player.level,

            subject,

            bank

        );


    showPage(
        "quizPage"
    );


    showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        currentQuiz[
            currentQuestion
        ];


    /*
        Only mark the question when
        the student really sees it.
    */

    markQuestionSeen(
        question
    );


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const labels = {

        easy:
            "🟢 Warm-up",

        normal:
            "🟡 Challenge",

        challenging:
            "🟠 Extra Challenge"

    };


    document.getElementById(
        "questionDifficulty"
    ).textContent =
        labels[
            question.difficulty
        ] ||
        "";


    document.getElementById(
        "feedback"
    ).textContent =
        "";


    const container =
        document.getElementById(
            "answerButtons"
        );


    container.innerHTML =
        "";


    shuffle(
        question.answers
    ).forEach(
        answer => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.onclick =
                () =>
                    checkAnswer(

                        button,

                        answer,

                        question.correct

                    );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    clickedButton,
    selected,
    correct
) {

    const buttons =
        document.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;


            if (
                String(
                    button.textContent
                ) ===
                String(
                    correct
                )
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        String(
            selected
        ) ===
        String(
            correct
        )
    ) {

        clickedButton.classList.add(
            "correct"
        );


        quizScore++;


        player.stars +=
            10;


        player.seeds +=
            2;


        player.soil +=
            1;


        player.correctAnswers++;


        document.getElementById(
            "feedback"
        ).textContent =
            "🎉 Correct! +10 ⭐ +2 🌱 +1 🪨";


        savePlayer();


        updateResources();

    }

    else {

        clickedButton.classList.add(
            "wrong"
        );


        document.getElementById(
            "feedback"
        ).textContent =
            "🌼 Not quite!";

    }


    setTimeout(
        () => {

            currentQuestion++;


            if (
                currentQuestion >=
                currentQuiz.length
            ) {

                finishQuiz();

            }

            else {

                showQuestion();

            }

        },

        1200
    );

}


/* =========================================
   RESULT
========================================= */

function finishQuiz() {

    showPage(
        "resultPage"
    );


    document.getElementById(
        "resultText"
    ).innerHTML =

        `You earned:

        <br><br>

        ⭐ ${quizScore * 10}

        &nbsp;

        🌱 ${quizScore * 2}

        &nbsp;

        🪨 ${quizScore}`;


    document.getElementById(
        "resultPlant"
    ).textContent =
        getPlantStage().emoji;


    savePlayer();


    updateAllUI();

}


/* =========================================
   PLANT
========================================= */

function getPlantStage() {

    const stage =
        Math.floor(

            player.correctAnswers /
            5

        );


    return plantStages[
        Math.min(

            stage,

            plantStages.length -
            1

        )
    ];

}


function updateHome() {

    const stage =
        getPlantStage();


    const stageNumber =
        Math.floor(

            player.correctAnswers /
            5

        );


    const finished =

        stageNumber >=
        plantStages.length -
        1;


    const progress =

        player.correctAnswers %
        5;


    document.getElementById(
        "homePlant"
    ).textContent =
        stage.emoji;


    document.getElementById(
        "plantStage"
    ).textContent =
        stage.name;


    document.getElementById(
        "growthText"
    ).textContent =

        finished
        ?
        "🌳 Fully grown!"
        :
        `${progress} / 5 correct`;


    document.getElementById(
        "growthBar"
    ).style.width =

        (
            finished
            ?
            100
            :
            progress *
            20
        ) +
        "%";


    document.getElementById(
        "homeLevel"
    ).textContent =
        player.level;


    document.getElementById(
        "homeStars"
    ).textContent =
        player.stars;


    document.getElementById(
        "homeSeeds"
    ).textContent =
        player.seeds;


    document.getElementById(
        "homeSoil"
    ).textContent =
        player.soil;


    document.getElementById(
        "homeArea"
    ).textContent =
        player.currentArea;


    updateResources();

}


/* =========================================
   PAGES
========================================= */

function showPage(id) {

    document.querySelectorAll(
        ".page"
    ).forEach(
        page => {

            page.classList.add(
                "hidden"
            );

        }
    );


    document.getElementById(
        id
    ).classList.remove(
        "hidden"
    );

}


function goHome() {

    if (
        !player.level
    ) {

        openLevelPage();


        return;

    }


    showPage(
        "homePage"
    );


    updateHome();

}


function openLevelPage() {

    showPage(
        "levelPage"
    );

}


function openQuizMenu() {

    if (
        !player.level
    ) {

        openLevelPage();


        return;

    }


    showPage(
        "subjectPage"
    );


    document.getElementById(
        "selectedLevelTitle"
    ).textContent =

        "📚 " +
        player.level +
        " — Choose a Subject";


    createSubjectButtons();

}


function openGarden() {

    if (
        !player.level
    ) {

        openLevelPage();


        return;

    }


    showPage(
        "gardenPage"
    );


    renderGarden();

}


function openAreas() {

    if (
        !player.level
    ) {

        openLevelPage();


        return;

    }


    showPage(
        "areasPage"
    );


    renderAreas();

}


function openShop() {

    if (
        !player.level
    ) {

        openLevelPage();


        return;

    }


    showPage(
        "shopPage"
    );


    renderShop();

}


/* =========================================
   GARDEN
========================================= */

function renderGarden() {

    const area =
        gardenAreas.find(
            item =>
                item.name ===
                player.currentArea
        );


    if (!area) {

        return;

    }


    document.getElementById(
        "currentAreaTitle"
    ).textContent =

        area.emoji +
        " " +
        area.name;


    const scene =
        document.getElementById(
            "gardenScene"
        );


    scene.classList.remove(

        "starter-theme",

        "flower-theme",

        "picnic-theme",

        "bunny-theme",

        "woodland-theme",

        "panda-theme",

        "butterfly-theme",

        "magic-theme"

    );


    scene.classList.add(
        area.theme
    );


    const container =
        document.getElementById(
            "gardenObjects"
        );


    container.innerHTML =
        "";


    const objects =
        [
            ...area.objects
        ];


    player.ownedDecorations.forEach(
        name => {

            const item =
                decorations.find(
                    decoration =>
                        decoration.name ===
                        name
                );


            if (
                item
            ) {

                objects.push(
                    item.emoji
                );

            }

        }
    );


    objects.forEach(
        (
            emoji,
            index
        ) => {

            const object =
                document.createElement(
                    "div"
                );


            object.className =
                "garden-object";


            object.textContent =
                emoji;


            const column =
                index %
                6;


            const row =
                Math.floor(
                    index /
                    6
                );


            object.style.left =

                (
                    7 +
                    column *
                    15
                ) +
                "%";


            object.style.bottom =

                (
                    8 +
                    row *
                    18
                ) +
                "%";


            container.appendChild(
                object
            );

        }
    );

}


/* =========================================
   AREAS
========================================= */

function renderAreas() {

    const container =
        document.getElementById(
            "areaList"
        );


    container.innerHTML =
        "";


    gardenAreas.forEach(
        area => {

            const unlocked =
                player.unlockedAreas.includes(
                    area.name
                );


            const current =
                player.currentArea ===
                area.name;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "area-card";


            let button;


            if (
                current
            ) {

                button =
                    `<button disabled>
                        Using ✓
                    </button>`;

            }

            else if (
                unlocked
            ) {

                button =
                    `<button onclick="useArea('${area.name}')">
                        Use Area
                    </button>`;

            }

            else {

                button =
                    `<button onclick="unlockArea('${area.name}')">
                        🔓 Unlock
                    </button>`;

            }


            const price =

                area.stars ===
                0

                ?

                "Free"

                :

                `⭐ ${area.stars}
                + 🌱 ${area.seeds}
                + 🪨 ${area.soil}`;


            card.innerHTML =

                `<div class="area-icon">
                    ${area.emoji}
                </div>

                <h3>
                    ${area.name}
                </h3>

                <p>
                    ${price}
                </p>

                ${button}`;


            container.appendChild(
                card
            );

        }
    );

}


function unlockArea(name) {

    const area =
        gardenAreas.find(
            item =>
                item.name ===
                name
        );


    if (
        !area
    ) {

        return;

    }


    const message =
        document.getElementById(
            "areaMessage"
        );


    if (

        player.stars >=
        area.stars

        &&

        player.seeds >=
        area.seeds

        &&

        player.soil >=
        area.soil

    ) {

        player.stars -=
            area.stars;


        player.seeds -=
            area.seeds;


        player.soil -=
            area.soil;


        if (
            !player.unlockedAreas.includes(
                area.name
            )
        ) {

            player.unlockedAreas.push(
                area.name
            );

        }


        player.currentArea =
            area.name;


        message.textContent =
            "🎉 New garden unlocked!";


        savePlayer();


        updateResources();


        renderAreas();

    }

    else {

        message.textContent =
            "🌱 You need more resources.";

    }

}


function useArea(name) {

    if (
        !player.unlockedAreas.includes(
            name
        )
    ) {

        return;

    }


    player.currentArea =
        name;


    savePlayer();


    renderAreas();

}


/* =========================================
   SHOP
========================================= */

function renderShop() {

    updateResources();


    renderDecorations();


    renderPacks();

}


function renderDecorations() {

    const container =
        document.getElementById(
            "decorationShop"
        );


    container.innerHTML =
        "";


    decorations.forEach(
        item => {

            const owned =
                player.ownedDecorations.includes(
                    item.name
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "shop-item";


            card.innerHTML =

                `<div class="shop-icon">
                    ${item.emoji}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ⭐ ${item.price}
                </p>

                ${
                    owned

                    ?

                    `<button disabled>
                        Owned ✓
                    </button>`

                    :

                    `<button onclick="buyDecoration('${item.name}')">
                        Buy
                    </button>`
                }`;


            container.appendChild(
                card
            );

        }
    );

}


function buyDecoration(name) {

    const item =
        decorations.find(
            item =>
                item.name ===
                name
        );


    if (
        !item
    ) {

        return;

    }


    if (
        player.ownedDecorations.includes(
            item.name
        )
    ) {

        return;

    }


    const message =
        document.getElementById(
            "shopMessage"
        );


    if (
        player.stars >=
        item.price
    ) {

        player.stars -=
            item.price;


        player.ownedDecorations.push(
            item.name
        );


        message.textContent =

            item.emoji +
            " Purchased!";


        savePlayer();


        updateResources();


        renderDecorations();

    }

    else {

        message.textContent =
            "⭐ You need more points.";

    }

}


function renderPacks() {

    const container =
        document.getElementById(
            "packShop"
        );


    container.innerHTML =
        "";


    packs.forEach(
        pack => {

            const owned =
                player.ownedPacks.includes(
                    pack.name
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "shop-item";


            card.innerHTML =

                `<div class="shop-icon">
                    ${pack.emoji}
                </div>

                <h3>
                    ${pack.name}
                </h3>

                <p>
                    ⭐ ${pack.price}
                </p>

                ${
                    owned

                    ?

                    `<button disabled>
                        Owned ✓
                    </button>`

                    :

                    `<button onclick="buyPack('${pack.name}')">
                        Buy
                    </button>`
                }`;


            container.appendChild(
                card
            );

        }
    );

}


function buyPack(name) {

    const pack =
        packs.find(
            item =>
                item.name ===
                name
        );


    if (
        !pack
    ) {

        return;

    }


    if (
        player.ownedPacks.includes(
            pack.name
        )
    ) {

        return;

    }


    const message =
        document.getElementById(
            "shopMessage"
        );


    if (
        player.stars >=
        pack.price
    ) {

        player.stars -=
            pack.price;


        player.ownedPacks.push(
            pack.name
        );


        message.textContent =
            "🎁 Pack unlocked!";


        savePlayer();


        updateResources();


        renderPacks();

    }

    else {

        message.textContent =
            "⭐ You need more points.";

    }

}


/* =========================================
   RESOURCES
========================================= */

function updateResources() {

    const values = {

        headerStars:
            player.stars,

        headerSeeds:
            player.seeds,

        headerSoil:
            player.soil,

        shopStars:
            player.stars,

        shopSeeds:
            player.seeds,

        shopSoil:
            player.soil

    };


    Object.entries(
        values
    ).forEach(
        (
            [
                id,
                value
            ]
        ) => {

            const element =
                document.getElementById(
                    id
                );


            if (
                element
            ) {

                element.textContent =
                    value;

            }

        }
    );

}


/* =========================================
   SAVE
========================================= */

function savePlayer() {

    localStorage.setItem(

        "skillGardenPlayer",

        JSON.stringify(
            player
        )

    );

}


function loadPlayer() {

    const saved =
        localStorage.getItem(
            "skillGardenPlayer"
        );


    if (
        !saved
    ) {

        return;

    }


    try {

        const data =
            JSON.parse(
                saved
            );


        player = {

            ...defaultPlayer,

            ...data

        };


        if (
            !Array.isArray(
                player.unlockedAreas
            )
        ) {

            player.unlockedAreas =
                [
                    "Starter Garden"
                ];

        }


        if (
            !player.unlockedAreas.includes(
                "Starter Garden"
            )
        ) {

            player.unlockedAreas.unshift(
                "Starter Garden"
            );

        }


        if (
            !Array.isArray(
                player.ownedDecorations
            )
        ) {

            player.ownedDecorations =
                [];

        }


        if (
            !Array.isArray(
                player.ownedPacks
            )
        ) {

            player.ownedPacks =
                [];

        }


        if (
            !player.usedQuestions ||
            typeof
            player.usedQuestions !==
            "object"
        ) {

            player.usedQuestions =
                {};

        }

    }

    catch (
        error
    ) {

        console.error(
            error
        );

    }

}


/* =========================================
   RESET GAME
========================================= */

function resetGame() {

    const answer =
        confirm(

            "Reset Skill Garden?\n\n" +

            "Your level, resources, garden, plant and quiz history will be deleted."

        );


    if (
        !answer
    ) {

        return;

    }


    localStorage.removeItem(
        "skillGardenPlayer"
    );


    player = {

        level: "",

        subject: "",

        stars: 0,

        seeds: 0,

        soil: 0,

        correctAnswers: 0,

        unlockedAreas: [
            "Starter Garden"
        ],

        currentArea:
            "Starter Garden",

        ownedDecorations: [],

        ownedPacks: [],

        usedQuestions: {}

    };


    currentQuiz =
        [];


    currentQuestion =
        0;


    quizScore =
        0;


    updateResources();


    openLevelPage();

}


/* =========================================
   START
========================================= */

function updateAllUI() {

    updateResources();


    if (
        player.level
    ) {

        updateHome();

    }

}


function startGame() {

    loadPlayer();


    updateAllUI();


    if (
        player.level
    ) {

        goHome();

    }

    else {

        openLevelPage();

    }

}


startGame();