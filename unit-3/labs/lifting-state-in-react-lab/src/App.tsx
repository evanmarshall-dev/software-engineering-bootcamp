import { useState } from "react";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import IngredientList from "./components/IngredientList/IngredientList";
import ingredients from "./data/ingredients";
import type { Ingredient } from "./types";
import styles from "./App.module.scss";

const App = () => {
  const [stack, setStack] = useState<Ingredient[]>([]);

  // Take param ingredient, add to beginning of array called stack.
  // The spread operator on stack creates a new array (stack) that contains the new ingredient first followed by all existing ingredients from the stack state.
  // Using setStack setter function from useState ensures state change is detected and React re-renders the UI.
  const onAddIngredient = (ingredient: Ingredient) => {
    setStack([ingredient, ...stack]);
  };

  // This function takes an index param (eg. Number representing position of ingredient in the array), and removes said ingredient from the stack.
  // Uses filter method to create a new array that excludes the ingredient at specified index. The underscore is a placeholder for the array element itself and i represents current index during iteration.
  // The filter keeps all elements where the index does not match the index we want to remove. Filter iterates through each element of array and only includes items in the new array where condition i !== index is true.
  // Using setStack setter function from useState ensures state change is detected and React re-renders the UI.
  const onRemoveIngredient = (index: number) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <h1>Burger Stacker</h1>
      <section>
        {/* Renders the ingredient list component and passes ingredients and onAddIngredient props to it. */}
        {/* This component displays all available ingredients the user can add to the burger. It receives the full list of ingredients from the ingredients prop which is imported from the ingredients data file. */}
        {/* The second prop is a callback function (onAddIngredient) that can be invoked to add an ingredient to the burger stack. */}
        {/* This is lifting state because this component does not manage the burger stack itself, but rather it receives a function (onAddIngredient) from the parent component (App). When a user clicks to add an ingredient, the function is called, which updates the state of the parent App component. This shares state between sibling components (IngredientList and BurgerStack). */}
        {/* The parent component (App) manages app state and child component simply triggers an action. */}
        <IngredientList
          ingredients={ingredients}
          onAddIngredient={onAddIngredient}
        />
        {/* Renders the burger stack component and passes stack and onRemoveIngredient props to it. */}
        {/* This component displays the current burger being built, showing all ingredients that have been added to the stack. */}
        {/* It receives the stack array (containing the list of ingredients) to render each ingredient visually. */}
        {/* The second prop (onRemoveIngredient) is a callback function that allows the user to remove an ingredient from the burger stack. */}
        {/* This is also an example of lifting state, because the BurgerStack component does not manage the burger stack itself. It receives the data (stack) and a function to modify said data (onRemoveIngredient) from the parent App component. When a user clicks remove and ingredient the BurgerStack calls the function with the ingredient's index and triggers a state update in the App component. */}
        {/* When you add an ingredient in IngredientList, the stack state updates in App, which causes the BurgerStack to re-render with the new ingredients as well. */}
        <BurgerStack stack={stack} onRemoveIngredient={onRemoveIngredient} />
      </section>
    </main>
  );
};

export default App;
