import type { BurgerStackProps } from "../../types";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./BurgerStack.module.scss";

// Functional React component that takes in props defined by BurgerStackProps type.
// Destructures props to extract stack (array of ingredients) and onRemoveIngredient (function to remove ingredient by index).
const BurgerStack = ({ stack, onRemoveIngredient }: BurgerStackProps) => {
  return (
    <div className={styles.container}>
      {/* If there are no ingredients in the stack, display a message */}
      {stack.length === 0 ? (
        <p className={styles.emptyMessage}>No Ingredients</p>
      ) : (
        <>
          <h3 className={styles.heading}>Burger Stack</h3>
          <ul className={styles.list}>
            {/* Map over the stack array to render each ingredient. */}
            {/* Receives both the ingredient object and its index position. */}
            {/* For each ingredient it renders an Ingredient component with specific props. */}
            {stack.map((ingredient, index) => (
              // The key prop uses the index to identify each list item uniquely.
              // The ingredient prop passes the ingredient object to the Ingredient component.
              // The onClick prop is an arrow function that calls onRemoveIngredient with the current index when clicked.
              // buttonLabel and buttonAction props define the button text and symbol for removing an ingredient.
              <Ingredient
                key={index}
                ingredient={ingredient}
                onClick={() => onRemoveIngredient(index)}
                buttonLabel='Remove'
                buttonAction='-'
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BurgerStack;
