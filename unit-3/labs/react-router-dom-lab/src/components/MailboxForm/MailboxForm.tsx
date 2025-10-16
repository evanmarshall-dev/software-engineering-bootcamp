import type { MailboxFormProps } from "../../types/mailbox";
import { useNavigate } from "react-router";
import styles from "./MailboxForm.module.scss";

const MailboxForm = ({
  addBox,
  newMailbox,
  setNewMailbox,
}: MailboxFormProps) => {
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMailbox({ ...newMailbox, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBox(newMailbox);
    setNewMailbox({ boxSize: "", boxOwner: "" });
    navigate("/mailboxes");
  };

  return (
    <div className={styles.container}>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='boxOwner'>Box Owner:</label>
          <input
            id='boxOwner'
            type='text'
            name='boxOwner'
            value={newMailbox.boxOwner}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='boxSize'>Box Size:</label>
          <select
            id='boxSize'
            name='boxSize'
            value={newMailbox.boxSize}
            onChange={handleChange}
            required>
            <option value=''>Select a size</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </div>
        <button type='submit' className={styles.submitButton}>
          Add Mailbox
        </button>
      </form>
    </div>
  );
};

export default MailboxForm;
