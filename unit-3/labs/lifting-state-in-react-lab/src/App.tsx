// ? import { useState } from "react";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import IngredientList from "./components/IngredientList/IngredientList";
import availableIngredients from "./data/ingredients";
import styles from "./App.module.scss";

const App = () => {
  console.log(availableIngredients);
  // ? const [stack, setStack] = useState<string[]>([]);

  return (
    <main className={styles.main}>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList />
        <BurgerStack />
      </section>
    </main>
  );
};

export default App;
