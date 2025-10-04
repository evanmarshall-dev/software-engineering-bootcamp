import { useState } from "react";
import fighters from "./data/fighters";
import styles from "./App.module.css";
import type { Fighter } from "./types";

const App = () => {
  const [team, setTeam] = useState<Fighter[]>([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState<Fighter[]>(fighters);

  const handleAddFighter = (fighter: Fighter): void => {
    // Check if there is enough money to add the fighter.
    if (money < fighter.price) {
      console.log("Not enough money to add this fighter.");
      return;
    }
    // Add the selected fighter to the team state array.
    console.log("Adding fighter:", fighter);
    setTeam([...team, fighter]);
    // Remove the selected fighter from the zombieFighters state array
    setZombieFighters(zombieFighters.filter((f) => f.id !== fighter.id));
    // Subtract the fighter's price from the current money value
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter: Fighter): void => {
    // Remove the selected fighter from the team state array.
    setTeam(team.filter((f) => f.id !== fighter.id));
    // Add the selected fighter back to the zombieFighters state array.
    setZombieFighters([...zombieFighters, fighter]);
    // Add the fighter's price back to the current money value.
    setMoney(money + fighter.price);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Zombie Fighters</h1>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>${money}</div>
          <div className={styles.statLabel}>Money</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {team.reduce((total, fighter) => total + fighter.strength, 0)}
          </div>
          <div className={styles.statLabel}>Team Strength</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {team.reduce((total, fighter) => total + fighter.agility, 0)}
          </div>
          <div className={styles.statLabel}>Team Agility</div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Team</h2>
      {team.length === 0 ? (
        <div className={styles.emptyState}>
          Your team is empty. Pick some fighters below!
        </div>
      ) : (
        <section className={styles.section}>
          {team.map((fighter) => (
            <article
              key={fighter.id}
              className={`${styles.card} ${styles.teamCard}`}>
              <img
                src={fighter.img}
                alt={fighter.name}
                className={styles.cardImage}
              />
              <div className={styles.cardStats}>
                <div className={styles.cardStat}>
                  Price:{" "}
                  <span className={styles.statHighlight}>${fighter.price}</span>
                </div>
                <div className={styles.cardStat}>
                  Strength:{" "}
                  <span className={styles.statHighlight}>
                    {fighter.strength}
                  </span>
                </div>
                <div className={styles.cardStat}>
                  Agility:{" "}
                  <span className={styles.statHighlight}>
                    {fighter.agility}
                  </span>
                </div>
              </div>
              <button
                className={styles.cardButton}
                onClick={() => handleRemoveFighter(fighter)}>
                Remove Fighter
              </button>
            </article>
          ))}
        </section>
      )}

      <h2 className={styles.sectionTitle}>Available Fighters</h2>
      <section className={styles.section}>
        {zombieFighters.map((fighter) => {
          const canAfford = money >= fighter.price;
          return (
            <article
              key={fighter.id}
              className={`${styles.card} ${styles.availableCard} ${
                !canAfford ? styles.insufficientFunds : ""
              }`}>
              <img
                src={fighter.img}
                alt={fighter.name}
                className={styles.cardImage}
              />
              <div className={styles.cardStats}>
                <div className={styles.cardStat}>
                  Price:{" "}
                  <span className={styles.statHighlight}>${fighter.price}</span>
                </div>
                <div className={styles.cardStat}>
                  Strength:{" "}
                  <span className={styles.statHighlight}>
                    {fighter.strength}
                  </span>
                </div>
                <div className={styles.cardStat}>
                  Agility:{" "}
                  <span className={styles.statHighlight}>
                    {fighter.agility}
                  </span>
                </div>
              </div>
              <button
                className={`${styles.cardButton} ${
                  !canAfford ? styles.disabled : ""
                }`}
                onClick={() => handleAddFighter(fighter)}
                disabled={!canAfford}>
                {canAfford ? "Add Fighter" : "Too Expensive"}
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default App;
