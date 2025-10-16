import { useParams } from "react-router";
import type { MailboxDetailsProps } from "../../types/mailbox";
import styles from "./MailboxDetails.module.scss";

const MailboxDetails = ({ mailboxes }: MailboxDetailsProps) => {
  const { mailboxId } = useParams<{ mailboxId: string }>();
  const selectedMailbox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedMailbox) {
    return <p className={styles.notFound}>Mailbox Not Found!</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Mailbox {selectedMailbox._id}</h2>
      <div className={styles.details}>
        <dl className={styles.detailsList}>
          <dt>Box Number:</dt>
          <dd>{selectedMailbox._id}</dd>
          <dt>Box Holder:</dt>
          <dd>{selectedMailbox.boxOwner}</dd>
          <dt>Box Size:</dt>
          <dd>{selectedMailbox.boxSize}</dd>
        </dl>
      </div>
    </div>
  );
};

export default MailboxDetails;
