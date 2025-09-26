import styles from "./App.module.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className={styles.app}>
      <Header title='My App' subtitle='Welcome to my app!' />
    </div>
  );
};

export default App;
