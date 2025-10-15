import type { IngredientListProps } from "../../types";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./IngredientList.module.scss";

const IngredientList = ({
  ingredients,
  onAddIngredient,
}: IngredientListProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Available Ingredients</h3>
      <ul className={styles.list}>
        {ingredients.map((ingredient, index) => (
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
