import { useState } from "react";
import { Route, Routes } from "react-router";
import type { Mailbox, MailboxFormData } from "./types/mailbox";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import styles from "./App.module.scss";

const App = () => {
  const [mailboxes, setMailboxes] = useState<Mailbox[]>([]);
  const [newMailbox, setNewMailbox] = useState<MailboxFormData>({
    boxSize: "",
    boxOwner: "",
  });

  const addBox = (formData: MailboxFormData) => {
    const newBox: Mailbox = {
      ...formData,
      boxSize: formData.boxSize as "Small" | "Medium" | "Large",
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<h1>Post Office</h1>} />
          <Route
            path='/mailboxes'
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path='/new-mailbox'
            element={
              <MailboxForm
                newMailbox={newMailbox}
                setNewMailbox={setNewMailbox}
                addBox={addBox}
              />
            }
          />
          <Route
            path='/mailboxes/:mailboxId'
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
          <Route path='*' element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
