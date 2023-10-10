//1
let fruit, vegetable, food;
[fruit, vegetable, food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

//2
let fran, martina, camille;

( {fran, martina, camille} = {
    fran: "monster",
    martina: "ghost",
    camille: "witch",
} );

console.log(fran, martina, camille);

//3
const musician = {
    name: "Dave Gahan",
    "greatest hit": "Never Let Me Down Again",
    nationality: "english",
    genre: "Synth-Rock",
};

const displayMusicianDetails = ({name, nationality, genre, "greatest hit":greatestHit }) => 
                        `${name} is an ${nationality} singer. His band plays ${genre} and their greatest hit is '${greatestHit}'.`;

console.log( displayMusicianDetails(musician) );