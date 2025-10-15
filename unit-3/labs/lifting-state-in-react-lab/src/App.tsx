import { useState } from "react";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import IngredientList from "./components/IngredientList/IngredientList";
import ingredients from "./data/ingredients";
import type { Ingredient } from "./types";
import styles from "./App.module.scss";

const App = () => {
  const [stack, setStack] = useState<Ingredient[]>([]);

  const onAddIngredient = (ingredient: Ingredient) => {
    setStack([ingredient, ...stack]);
  };

  const onRemoveIngredient = (index: number) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main className={styles.main}>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={ingredients}
          onAddIngredient={onAddIngredient}
        />
        <BurgerStack stack={stack} onRemoveIngredient={onRemoveIngredient} />
      </section>
    </main>
  );
};

export default App;
