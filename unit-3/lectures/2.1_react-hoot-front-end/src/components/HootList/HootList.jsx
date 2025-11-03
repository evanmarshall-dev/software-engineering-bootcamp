// ----------------------------------------
// NOTES:
// - Notice how we are wrapping the <article> with a Link component. The to property specifies the URL a user should be directed to when they click the link. Think of the value assigned to the to property as an argument passed into a function. Once we add params (:hootId) on a corresponding client-side route, the Link component will direct a user to a details page for a specific hoot whenever they click on a card.
// ----------------------------------------

import { Link } from "react-router";

import styles from "./HootList.module.css";

const HootList = ({ hoots }) => {
  return (
    <main className={styles.container}>
      {hoots.map((hoot) => {
        // ? return <p key={hoot._id}>{hoot.title}</p>;
        return (
          <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
            <article>
              <header>
                <h1>{hoot.title}</h1>
                <p>
                  {`${hoot.author?.username || "Unknown User"} posted on
                ${new Date(hoot.createdAt).toLocaleDateString()}`}
                </p>
              </header>
              <p>{hoot.text}</p>
            </article>
          </Link>
        );
      })}
    </main>
  );
};

export default HootList;
