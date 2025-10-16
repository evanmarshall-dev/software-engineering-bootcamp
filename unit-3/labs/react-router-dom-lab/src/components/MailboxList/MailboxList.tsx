import { Link } from "react-router";
import type { MailboxListProps } from "../../types/mailbox";
import styles from "./MailboxList.module.scss";

const MailboxList = ({ mailboxes }: MailboxListProps) => {
  return (
    <div className={styles.container}>
      <h2>Mailboxes</h2>
      {mailboxes.length === 0 ? (
        <p>No mailboxes yet. Create one!</p>
      ) : (
        <ul className={styles.mailboxGrid}>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id} className={styles.mailBox}>
              <Link to={`/mailboxes/${mailbox._id}`}>{mailbox._id}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MailboxList;
