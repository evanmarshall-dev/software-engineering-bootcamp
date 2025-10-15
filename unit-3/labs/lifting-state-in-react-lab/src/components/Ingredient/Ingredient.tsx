import type { IngredientProps } from "../../types";
import styles from "./Ingredient.module.scss";

// Functional React component that takes in props defined by IngredientProps type.
// Destructures props to extract ingredient (object with name and color), onClick (function to handle button click), buttonLabel (text for button), and buttonAction (symbol for button).
const Ingredient = ({
  ingredient,
  onClick,
  buttonLabel,
  buttonAction,
}: IngredientProps) => {
  return (
    // List item styled with background color from ingredient object.
    // Displays ingredient name and a button.
    // Button triggers onClick function when clicked, displaying buttonLabel and buttonAction.
    <li className={styles.item} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}{" "}
      <button onClick={onClick}>
        {buttonLabel} {buttonAction}
      </button>
    </li>
  );
};

export default Ingredient;
