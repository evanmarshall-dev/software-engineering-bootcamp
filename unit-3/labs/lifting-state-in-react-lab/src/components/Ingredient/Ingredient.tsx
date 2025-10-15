import type { IngredientProps } from "../../types";
import styles from "./Ingredient.module.scss";

const Ingredient = ({
  ingredient,
  onClick,
  buttonLabel,
  buttonAction,
}: IngredientProps) => {
  return (
    <li className={styles.item} style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}{" "}
      <button onClick={onClick}>
        {buttonLabel} {buttonAction}
      </button>
    </li>
  );
};

export default Ingredient;
