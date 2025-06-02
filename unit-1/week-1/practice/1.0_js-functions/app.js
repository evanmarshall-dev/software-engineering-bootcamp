/************************
  NOTES
*************************/

// We create a function to call on the two console logs. We will reuse this function by calling it depending on different user interactions.
// The code within the curly braces is called a code block.
// Functions are also a way to consolidate patterns or multi-step process into one.
// Functions limit human error that can be caused when we have to manually type repeatable code or if we need to change the code in the function we only change it in one spot.
// The function keyword below is a DEFINITION SIGNATURE. There are many different types of signatures in JS. There is also a function EXPRESSION SIGNATURE as well (i.e. With arrow functions).
// Parenthesis after the function name/reference is called an INVOCATION SIGNATURE.

/************************
  ARROW FUNCTION
*************************/

const logout = () => {
  console.log("See you next time!");
  console.log("Redirect to landing page.");
};

// ? if (!loggedIn) {
//   ? logout();
// ? } else {
//   ? console.log("Welcome back!");
// ? }

/************************
  REGULAR FUNCTION
*************************/

// Example of function based on everyday tasks.
function getGainz() {
  console.log("Drink protein shake.");
  console.log("Arrive at gym.");
  console.log("Stretch.");
  console.log("Do warm up exercises.");
  console.log("Do main exercises.");
  console.log("Do a cool down.");
  console.log("Complain about why I pay money to hurt my body.");
}

/************************
  FUNCTION CALL
*************************/

// Invoke getGainz function.
// Without the parenthesis would simply pass the function as a reference and NOT invoke/execute it.
// When passed as a reference a function can be used as a value.
getGainz();

/************************
  GLOBAL LOG
*************************/

console.log("\nYeaaahh budddday!!");

/************************
  FUNCTION /W ARGUMENTS
*************************/

function greeting(name, food) {
  console.log(`\n\nHi, my name is ${name} and I like to eat ${food}.`);
}

greeting("Bob", "PIZZA 🍕");
