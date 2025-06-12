const pokemon = require("./data.js");

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// ? console.dir(pokemon, { maxArrayLength: null });

/*********************************************************************
Exercise 1
1. Use console.log to log the name of the Pokemon with the number 59.
*/
// ? console.log(pokemon[58].name);

/***********************************************************************************************************
Exercise 2
1. Run the following:
console.log(game)
*/

// ? console.log(game);

/***********************************************************************************************************
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

console.log("\n******************************");
console.log("Exercise 3: Game Difficulties:\n");

// Added a new property called difficulty to the game object.
// Decided to assign its value as an array with the three strings representing Easy, Medium, and Hard.
game.difficulty = ["Easy", "Medium", "Hard"];
// ? console.log(game);
console.log(game.difficulty);

/***********************************************************************************************************
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

console.log("\n******************************");
console.log("Exercise 4: Starter Pokemon:\n");

// I approached this exercise as if I did not know which property in the pokemon object had starter set to true.
// Iterated over the object and set a conditional to check if the starter property in the pokemon array was strictly equal to true.
// When the starter value was true I used the push method to add that pokemon to the party property of the game object.
// Since the exercise only requires one starter Pokemon, I added a break after the push method to stop the loop once one instance of a starter Pokemon is added to the game object. Otherwise ALL starter Pokemon will be added to the game party property.
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    game.party.push(pokemon[i]);
    break;
  }
}

// ? console.log(game.party);
console.log(game.party[0].name);

/***********************************************************************************************************
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

console.log("\n******************************");
console.log("Exercise 5: Added Pokemon:\n");

// Again, working under the assumption that we do not have access to the pokemon object.
// Create a counter variable to increment each time we add a pokemon to the game object. We want to stop the addition of pokemon after 3 have been added.
// Could use the break keyword if using a for loop.
let firePk = 0;

// Using the forEach method and pk set as the iterator for each loop.
pokemon.forEach((pk) => {
  // Created a condition for when the counter is less than 3 (< 3 loops) AND the pokemon.type property is equal to fire.
  if (firePk < 3 && pk.type === "fire") {
    // If the iterations are less than 3 and the pokemon type is fire then we add the pokemon to the start of the game.party object using unshift.
    game.party.unshift(pk);
    // After each iteration increment the counter by 1.
    firePk++;
  }
});

// ? console.log(game.party);
console.log(game.party[0].name);
console.log(game.party[1].name);
console.log(game.party[2].name);

/***********************************************************************************************************
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

console.log("\n******************************");
console.log("Exercise 6: Completed Gyms:\n");

// Created a for loop with g as the iterator for each property in the game object.
for (let g = 0; g < game.gyms.length; g++) {
  // The if statement condition is checking to see if the difficulty property of the gyms array that is part of the game object has a value less than 3.
  if (game.gyms[g].difficulty < 3) {
    // When condition is true update the completed property of the gyms array inside the game object to true.
    game.gyms[g].completed = true;
  }
}

console.log(game.gyms);

/***********************************************************************************************************
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint:
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another.


Solve Exercise 7 here:
*/

console.log("\n******************************");
console.log("Exercise 7: Evolved Pokemon:\n");

// First, get the evolved pokemon for Bulbasaur from the pokemon array. Loop through the pokemon object and find Ivysaur.
for (let i = 0; i < pokemon.length; i++) {
  // If the pokemon name is Ivysaur then the condition is true.
  if (pokemon[i].name === "Ivysaur") {
    // When condition is true we splice out the 3rd index in the game.party array (Bulbasaur) and replace with the current pokemon we are on in the pokemon object (Ivysaur).
    game.party.splice(3, 1, pokemon[i]);
  }
}

// ? console.log(game.party);
console.log(game.party[3].name);

/***********************************************************************************************************
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log("\n******************************");
console.log("Exercise 8: Pokemon in Party:\n");

// Loop through the game.party arrays and print out the name value for each iteration.
for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name);
}

/***********************************************************************************************************
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log("\n******************************");
console.log("Exercise 9: Starter Pokemon:\n");

// Created a for loop to iterate through all properties of the pokemon object.
for (let i = 0; i < pokemon.length; i++) {
  // If the starter value is equal to true.
  if (pokemon[i].starter === true) {
    // Print out the Pokemon name if the condition is true.
    console.log(`${pokemon[i].name.toUpperCase()} is a starter Pokemon!`);
  }
}

/***********************************************************************************************************
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

console.log("\n******************************");
console.log("Exercise 10: Added Pokemon to Party:\n");

// Adding function to game object.
game.catchPokemon = function (pokemonObj) {
  // Function accepts a pokemonObj param and pushes it to the game.party objects.
  game.party.push(pokemonObj);
};

// Adding a random pokemon from the pokemon object at index of 6 as an argument.
game.catchPokemon(pokemon[6]);

// ? console.log(game.party);
// ? console.log(game);
console.log(game.party[game.party.length - 1].name);

/***********************************************************************************************************
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
