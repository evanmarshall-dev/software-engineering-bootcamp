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

console.log(
  "\n****************************************************************"
);
console.log("Exercise 3: Game Difficulties:\n");

// Added a new property called difficulty to the game object.
// Decided to assign its value as an array with the three strings representing Easy, Medium, and Hard.
game.difficulty = ["Easy", "Medium", "Hard"];
// ? console.log(game);
console.log(
  `The added game difficulties are: ${game.difficulty[0]}, ${game.difficulty[1]}, and ${game.difficulty[2]}.`
);

/***********************************************************************************************************
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

console.log(
  "\n****************************************************************"
);
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
console.log(
  `The starter Pokemon added to the party is: ${game.party[0].name}.`
);

/***********************************************************************************************************
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

console.log(
  "\n****************************************************************"
);
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
console.log(
  `The three added Pokemon are: ${game.party[0].name}, ${game.party[1].name}, and ${game.party[2].name}.`
);

/***********************************************************************************************************
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 6: Completed Gyms:\n");

// Created a for loop with g as the iterator for each property in the game object.
for (let g = 0; g < game.gyms.length; g++) {
  // The if statement condition is checking to see if the difficulty property of the gyms array that is part of the game object has a value less than 3.
  if (game.gyms[g].difficulty < 3) {
    // When condition is true update the completed property of the gyms array inside the game object to true.
    game.gyms[g].completed = true;
  }

  console.log(
    `${game.gyms[g].location} gym is ${
      game.gyms[g].completed ? "" : "NOT "
    }completed.`
  );
}

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

console.log(
  "\n****************************************************************"
);
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
// ? console.log(game.party[3].name);
console.log(`The evolved Pokemon is: ${game.party[3].name}.`);

/***********************************************************************************************************
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 8: Pokemon in Party:\n");

// Loop through the game.party arrays and print out the name value for each iteration.
for (let i = 0; i < game.party.length; i++) {
  console.log(`${game.party[i].name} is in the party.`);
}

/***********************************************************************************************************
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

console.log(
  "\n****************************************************************"
);
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

console.log(
  "\n****************************************************************"
);
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
console.log(
  `${game.party[
    game.party.length - 1
  ].name.toUpperCase()} has been added to the party.`
);

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

console.log(
  "\n****************************************************************"
);
console.log(
  "Exercise 11: Added Pokemon to Party & Updated Pokeball Quantity:\n"
);

// Modified the catchPokemon function to include an if statement checking if pokemonObj has been added to game.party object.
game.catchPokemon = function (pokemonObj) {
  if (game.party.push(pokemonObj)) {
    // If there has been a pokemon added then decrease quantity by one.
    game.items[1].quantity--;
  }
};

game.catchPokemon(pokemon[9]);
// Check that game.items has been decremented by one after the above call.
console.log(`${game.items[1].quantity} Pokeballs remaining.`);

/***********************************************************************************************************
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this? (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 12: Completed Gyms with Difficulty Below 6:\n");

for (let g = 0; g < game.gyms.length; g++) {
  // The if statement condition is checking to see if the difficulty property of the gyms array that is part of the game object has a value less than 6.
  if (game.gyms[g].difficulty < 6) {
    // When condition is true update the completed property of the gyms array inside the game object to true.
    game.gyms[g].completed = true;
  }

  console.log(
    `${game.gyms[g].location} gym is ${
      game.gyms[g].completed ? "" : "NOT "
    }completed.`
  );
}

/***********************************************************************************************************
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the
    properties on `gymTally` as follows:
    - `completed` should count how many gyms in the array have a value of `true`
      for their `completed` property.
    - `incomplete` should count how many gyms in the array have a value of
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 13: Tally of Completed and Incomplete Gyms:\n");

// Created a function that creates a variable that is assigned to an empty object for complete and incomplete gyms.
game.gymStatus = function () {
  // Empty object for gymTally.
  let gymTally = { completed: 0, incomplete: 0 };
  // For loop that iterates over the gym object until all objects have been iterated over.
  for (let i = 0; i < game.gyms.length; i++) {
    // Condition checks if each completed object is strictly equal to true.
    if (game.gyms[i].completed === true) {
      // If completed is true then increment the completed property in the gymTally object by one.
      gymTally.completed++;
    } else {
      // If completed is false then increment the incomplete property in the gymTally object by one.
      gymTally.incomplete++;
    }
  }
  // Log the value of gymTally.
  console.log(
    `Tally: ${gymTally.completed} completed gyms and ${gymTally.incomplete} incomplete gyms.`
  );
};

// Call the function.
game.gymStatus();

/***********************************************************************************************************
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 14: Current Party Size:\n");

// Added method to game object.
game.partyCount = function () {
  // Method returns the length of the game party array.
  return game.party.length;
};

// ? console.log(game.partyCount());
console.log(`There are ${game.partyCount()} Pokemon in the party.`);

/***********************************************************************************************************
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 15: Completed Gyms with Difficulty Below 8:\n");

// Similar to the last two gym completion exercises. All that was changed is the value in the if statement to 8.
for (let g = 0; g < game.gyms.length; g++) {
  // The if statement condition is checking to see if the difficulty property of the gyms array that is part of the game object has a value less than 8.
  if (game.gyms[g].difficulty < 8) {
    // When condition is true update the completed property of the gyms array inside the game object to true.
    game.gyms[g].completed = true;
  }

  console.log(
    `${game.gyms[g].location} gym is ${
      game.gyms[g].completed ? "" : "NOT "
    }completed.`
  );
}

/***********************************************************************************************************
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 16: The full game object:\n");

console.log(game);

/***********************************************************************************************************
  LEVEL UP!
***********************************************************************************************************/

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 17: Party Sorted by HP:\n");

// Pass in compare function since we are dealing with numbers and we do not want them to be converted to strings and sorted by their equivalent string values vs numerical values.
game.party.sort(function (a, b) {
  // By subtracting a value hp from b value of hp creates a descending order of numbers from highest to lowest hp value.
  return b.hp - a.hp;
});

console.log(game.party);

/***********************************************************************************************************
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time.
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 18: New Pokemon Collection when Party is Full:\n");

// Add collection property to game object and initialize as an empty array.
game.collection = [];

// Re-defined catchPokemon function with a different if statement and added an else statement.
game.catchPokemon = function (pokemonObj) {
  // New condition is that the party object length should be less than or equal to 6 pokemon.
  if (game.party.length < 6) {
    // If condition is true then add new pokemon to game party and decrement the pokeball collection by one.
    game.party.push(pokemonObj);
    game.items[1].quantity--;
  } else {
    // If condition is false then add excess pokemon to the new collection object and decrement the pokeball collection by one.
    game.collection.push(pokemonObj);
    game.items[1].quantity--;
  }
};

// Added pokemon from pokemon object at 22nd index or the 23rd pokemon and another at the 23rd index or 24th pokemon.
game.catchPokemon(pokemon[22]);
game.catchPokemon(pokemon[23]);

// Check if there are any pokemon in the new collection object. If there are then log added pokemon name to console.
if (game.collection.length > 0) {
  console.log(`${game.collection[0].name} has been added to the COLLECTION.`);
}

// Log names of any pokemon added to the party object to the console.
console.log(
  `${game.party[game.party.length - 1].name} has been added to the PARTY.`
);

// Check remaining number of pokeballs after addition.
console.log(`${game.items[1].quantity} Pokeballs remaining.`);
// ? console.log(game.collection);

/***********************************************************************************************************
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with.

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 19: Warning Message if No Pokeballs:\n");

game.catchPokemon = function (pokemonObj) {
  if (game.items[1].quantity > 0) {
    if (game.party.length < 6) {
      game.party.push(pokemonObj);
      game.items[1].quantity--;
    } else {
      game.collection.push(pokemonObj);
      game.items[1].quantity--;
    }
  } else {
    console.log("THERE ARE NOT ENOUGH POKEBALLS TO CATCH THE DESIRED POKEMON!");
  }
};

game.catchPokemon(pokemon[140]);
game.catchPokemon(pokemon[141]);
game.catchPokemon(pokemon[142]);
game.catchPokemon(pokemon[143]);
game.catchPokemon(pokemon[144]);
// TODO: Un-comment below line to trip the warning for no more pokeballs.
// ? game.catchPokemon(pokemon[145]);

// ? if (game.collection.length > 0) {
//   ? console.log("\nExcess Pokemon Collection:\n");
//   ? console.log(game.collection);
// ? }
// ? if (game.party.length > 0) {
//   ? console.log("\nParty Pokemon:\n");
//   ? console.log(game.party);
// ? }
console.log(`${game.items[1].quantity} Pokeballs remaining.`);

/***********************************************************************************************************
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set).

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 20: Name-Only for Captured Pokemon:\n");

/***********************************************************************************************************
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

console.log(
  "\n****************************************************************"
);
console.log("Exercise 21: New Object Sorted by Pokemon Type:\n");
