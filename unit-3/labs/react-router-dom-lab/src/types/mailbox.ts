export interface Mailbox {
  _id: number;
  boxSize: "Small" | "Medium" | "Large";
  boxOwner: string;
}

export interface MailboxFormData {
  boxSize: string;
  boxOwner: string;
}

export interface MailboxFormProps {
  addBox: (formData: MailboxFormData) => void;
  newMailbox: MailboxFormData;
  setNewMailbox: (mailbox: MailboxFormData) => void;
}

export interface MailboxListProps {
  mailboxes: Mailbox[];
}

export interface MailboxDetailsProps {
  mailboxes: Mailbox[];
}
