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
// Centralizing operations makes the code more modular and scalable.
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
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
calc.addEventListener("click", (event) => {
  // Access the `target` property directly from the `event` object.
  const target = event.target;

  // Ignore clicks that are not on a button
  if (!target.classList.contains("button")) {
    return;
  }

  // Route button clicks to the correct handler function
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
// A dedicated function to update the display from the state object.
function updateDisplay() {
  display.innerText = calculatorState.displayValue;
}
updateDisplay(); // Initial render

function inputNumber(num) {
  if (calculatorState.waitingForSecondOperand) {
    calculatorState.displayValue = num;
    calculatorState.waitingForSecondOperand = false;
  } else {
    // If displayValue is '0', replace it; otherwise, append.
    // This prevents numbers like '05'.
    calculatorState.displayValue =
      calculatorState.displayValue === "0"
        ? num
        : calculatorState.displayValue + num;
  }
  updateDisplay();
}

function handleOperator(nextOperator) {
  // Handle the 'C' (Clear) button
  if (nextOperator === "C") {
    clear();
    return;
  }

  const inputValue = parseFloat(calculatorState.displayValue);

  // If an operator is already set, perform the previous calculation first
  if (calculatorState.operator && !calculatorState.waitingForSecondOperand) {
    const result = operate(
      calculatorState.firstOperand,
      inputValue,
      calculatorState.operator
    );
    // Handle potential errors from division by zero and floating point inaccuracies
    calculatorState.displayValue =
      result === "Error" ? "Error" : String(parseFloat(result.toFixed(7)));
    calculatorState.firstOperand = result === "Error" ? null : result;
  } else {
    calculatorState.firstOperand = inputValue;
  }

  calculatorState.operator = nextOperator;
  calculatorState.waitingForSecondOperand = true;
  updateDisplay();
}

function handleEquals() {
  // Don't do anything if there's no operator or we're waiting for the second number
  if (!calculatorState.operator || calculatorState.waitingForSecondOperand) {
    return;
  }

  const secondOperand = parseFloat(calculatorState.displayValue);
  const result = operate(
    calculatorState.firstOperand,
    secondOperand,
    calculatorState.operator
  );

  calculatorState.displayValue =
    result === "Error" ? "Error" : String(parseFloat(result.toFixed(7)));
  calculatorState.firstOperand = null; // Reset for the next calculation
  calculatorState.operator = null;
  calculatorState.waitingForSecondOperand = false;
  updateDisplay();
}

function operate(a, b, op) {
  if (op in operations) {
    return operations[op](a, b);
  }
  return null;
}
const clear = () => {
  calculatorState.displayValue = "0";
  calculatorState.firstOperand = null;
  calculatorState.operator = null;
  calculatorState.waitingForSecondOperand = false;
  updateDisplay();
};
