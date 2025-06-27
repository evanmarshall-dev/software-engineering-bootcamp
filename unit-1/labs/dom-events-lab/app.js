/*---------------------------
  State Management
---------------------------*/
// This object groups everything the calculator needs to know about its current status into one organized place.
const calculatorState = {
  // Start with '0' for a more realistic calculator feel.
  displayValue: "0",
  // This stores the first number in a calculation. Set to null because no 1st number selected yet.
  firstOperand: null,
  // This property holds the mathematical operation the user has selected.
  operator: null,
  // Boolean flag. When false any number appended to display, when selecting operator it switches to true and waits for 2nd number, and the next number selected replaces display instead of being added to it.
  waitingForSecondOperand: false,
};

/*---------------------------
  Constants
---------------------------*/
// A "lookup dictionary" for all the mathematical functions your calculator can perform. Easily add to core math operation logic (scalability), clean and contained in one object (modular), and more readable than a complex if/else statement or switch statement.
// Keys are strings representing the operators for the calculator buttons.
// Values are arrow functions to return the corresponding mathematical operation.
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  // This function contains error handling for dividing by 0. If divisor is 0 then output error, else perform division equation.
  "/": (a, b) => (b === 0 ? "Error" : a / b),
};

/*---------------------------
  Cached Element References
---------------------------*/
const calc = document.getElementById("calculator");
const display = document.getElementById("display");

/*---------------------------
  Event Listeners
---------------------------*/
// 1) Design pattern (event delegation) for the central control for entire calculator.
// Instead of attaching a separate event listener to every single button on the calculator, this code attaches just one listener to the parent div with the ID calculator. It listens for any click event that happens anywhere inside that container (Reduces code, less memory, and scalable to add new buttons).
calc.addEventListener("click", (event) => {
  // 2) The event.target property from event object points to the exact HTML element that was clicked.
  const target = event.target;

  // 3) The Guard Clause. If the clicked element does not contain class of button the return statement stops the function (Reduces errors).
  if (!target.classList.contains("button")) {
    return;
  }

  // 4) Router. Series of if statements to determine what kind of button the target is then delegates to the correct function to handle correct action. The return at the end of each if statement stops the function once the correct handler is found (Optimization).
  if (target.classList.contains("operator")) {
    handleOperator(target.innerText);
    return;
  }

  if (target.classList.contains("equals")) {
    handleEquals();
    return;
  }

  if (event.target.classList.contains("number")) {
    inputNumber(target.innerText);
    return;
  }
});

/*---------------------------
  Functions
---------------------------*/
// updateDisplay syncs UI with app's state.
function updateDisplay() {
  // 1) Takes current value stored in calculatorState object for display and sets it to the text content of the display HTML element. This is a RENDER logic separated from CHANGING DATA.
  display.innerText = calculatorState.displayValue;
}
// 2) updateDisplay makes sure screen reflects the change. This being called once script loads is responsible for the initial display value of "0".
updateDisplay();

// Function to manage what happens every time a user clicks a number button. Takes number from the clicked button (num) and decides what to do with it.
function inputNumber(num) {
  // 1) Checks if user has pressed an operator button. If true the calculator waits for a new number to be entered.
  if (calculatorState.waitingForSecondOperand) {
    // 2) Function replaces current display with new number.
    calculatorState.displayValue = num;
    // 3) After new number selected it switches back to false for waiting for second number since it is not waiting but receiving second number.
    calculatorState.waitingForSecondOperand = false;
  } else {
    // 1) If user still typing first number or continuing to type second number.
    calculatorState.displayValue =
      // 2) Ternary for if display is 0, replace with new number (No prepending of 0 to numbers).
      // 3) Else, append new number to end of current display string (multi-digit numbers).
      calculatorState.displayValue === "0"
        ? num
        : calculatorState.displayValue + num;
  }
  // Ensures user sees result of their action on screen.
  updateDisplay();
}

// Called each time user clicks operator button.
function handleOperator(nextOperator) {
  // 1) Handle clear button or guard clause. Check if button pressed was C then call clear function to reset calculator's state.
  if (nextOperator === "C") {
    clear();
    // 2) Return called to exit function.
    return;
  }

  // 3) Prepare input value. Take number user has typed and ready for math calculation.
  // Take display value from calculator state (string) and converts it into a floating-point number.
  const inputValue = parseFloat(calculatorState.displayValue);

  // 4) Determines if perform calculation now or store number for later.
  // If an operator is stored in state and we are not waiting for a second operand.
  if (calculatorState.operator && !calculatorState.waitingForSecondOperand) {
    // 5) Calculate result of previous operation.
    const result = operate(
      calculatorState.firstOperand,
      inputValue,
      calculatorState.operator
    );
    // 6) Update display to show result of calculation, handle error for division by 0, and round to fixed 7.
    calculatorState.displayValue =
      result === "Error" ? "Error" : String(parseFloat(result.toFixed(7)));
    // 7) The result of calculation now becomes the first operand for next calculation.
    calculatorState.firstOperand = result === "Error" ? null : result;
  } else {
    // 8) When you press operator first in sequence, it takes number from display and stores it as first operand in state object.
    calculatorState.firstOperand = inputValue;
  }

  // 9) Prepare calculator for next step. Stores new operator that was clicked, flips flag to true to trigger input number function to replace current number with next one typed, and update display so user sees results of chained calculations on screen.
  calculatorState.operator = nextOperator;
  calculatorState.waitingForSecondOperand = true;
  updateDisplay();
}

// Final action in calculator operations. Triggered when user pressed "=" and it performs final calculation and resets memory for next problem.
function handleEquals() {
  // 1) Guard clause. If user has not selected an operator or user has selected operator but no second number then the function stops.
  if (!calculatorState.operator || calculatorState.waitingForSecondOperand) {
    return;
  }

  // 2) Takes number currently on screen and converts from string to a number (second operand).
  const secondOperand = parseFloat(calculatorState.displayValue);
  // 3) Calls operate helper function and passes it all pieces from state object, does math and returns final result.
  const result = operate(
    // First operand stored when operator pressed.
    calculatorState.firstOperand,
    // Second operand which we got from display.
    secondOperand,
    // The operator itself.
    calculatorState.operator
  );

  // 4) Updating state and display. The calculated result is set to display value.
  // Displays error if dividing by 0.
  // Rounds number to 7 decimal places.
  calculatorState.displayValue =
    result === "Error" ? "Error" : String(parseFloat(result.toFixed(7)));
  // 5) Reset calculators memory and user can start new calculation.
  calculatorState.firstOperand = null;
  calculatorState.operator = null;
  calculatorState.waitingForSecondOperand = false;
  // 6) Render final result. Sets new display value to final answer from state and shows on screen.
  updateDisplay();
}

// 1) Helper function that takes two numbers, an operator symbol and returns results of calculation.
// a = 1st operand, b = second operand, and op = string representing operator (modular and avoids if/else and switch statements).
function operate(a, b, op) {
  // 2) Refers to operations object above which maps operators to corresponding math function. op in operations checks if key exists to validate the operator.
  if (op in operations) {
    // 3) If condition is true (operator exists) then look up value for op key. Value is arrow function that performs math. The (a, b) call retrieved function and passes numbers a and b as arguments. The result of the function call is returned by the operate function.
    return operations[op](a, b);
  }
  // 4) Fallback if condition is false (invalid operator) the function returns null.
  return null;
}

// Factory reset for calculator. Called when user clicks "C" button. Wipes calculators memory and return it to starting state.
const clear = () => {
  // 1) Resets display value to 0.
  calculatorState.displayValue = "0";
  // 2) Erases any number stored as first operand.
  calculatorState.firstOperand = null;
  // 3) Clears out any operator selected.
  calculatorState.operator = null;
  // 4) Resets logic flag to false state so next number starts a new display value not append to existing.
  calculatorState.waitingForSecondOperand = false;
  // 5) After all state props reset, HTML on page so user sees 0.
  updateDisplay();
};
