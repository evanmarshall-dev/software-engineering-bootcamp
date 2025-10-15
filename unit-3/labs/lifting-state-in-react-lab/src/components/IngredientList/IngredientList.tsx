import type { IngredientListProps } from "../../types";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./IngredientList.module.scss";

// Functional React component that takes in props defined by IngredientListProps type.
// Destructures props to extract ingredients (array of available ingredients) and onAddIngredient (function to add ingredient to burger stack).
const IngredientList = ({
  ingredients,
  onAddIngredient,
}: IngredientListProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Available Ingredients</h3>
      <ul className={styles.list}>
        {/* Map over the ingredients array to render each ingredient. */}
        {/* Receives both the ingredient object and its index position. */}
        {/* For each ingredient it renders an Ingredient component with specific props. */}
        {ingredients.map((ingredient, index) => (
          // The key prop uses the index to identify each list item uniquely.
          // The ingredient prop passes the ingredient object to the Ingredient component.
          // The onClick prop is an arrow function that calls onAddIngredient with the current ingredient when clicked.
          // buttonLabel and buttonAction props define the button text and symbol for adding an ingredient.
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => onAddIngredient(ingredient)}
            buttonLabel='Add'
            buttonAction='+'
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
