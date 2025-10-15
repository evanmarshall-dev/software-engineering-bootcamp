import type { BurgerStackProps } from "../../types";
import Ingredient from "../Ingredient/Ingredient";
import styles from "./BurgerStack.module.scss";

const BurgerStack = ({ stack, onRemoveIngredient }: BurgerStackProps) => {
  return (
    <div className={styles.container}>
      {stack.length === 0 ? (
        <p className={styles.emptyMessage}>No Ingredients</p>
      ) : (
        <>
          <h3 className={styles.heading}>Burger Stack</h3>
          <ul className={styles.list}>
            {stack.map((ingredient, index) => (
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
