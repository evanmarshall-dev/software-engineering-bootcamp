import { useState } from "react";
import styles from "./BookShelf.module.css";

const BookShelf = () => {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", id: 1 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", id: 2 },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "", id: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, { ...newBook, id: books.length + 1 }]);
      setNewBook({ title: "", author: "", id: 0 });
    }
  };

  return (
    <div className={styles.bookshelfDiv}>
      <div className={styles.formDiv}>
        <h3>Add a Book</h3>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={newBook.title}
            onChange={handleInputChange}
            className={styles.input}
          />
          <input
            type='text'
            name='author'
            placeholder='Author'
            value={newBook.author}
            onChange={handleInputChange}
            className={styles.input}
          />
          <button type='submit' className={styles.submitButton}>
            Add Book
          </button>
        </form>
      </div>
      <div className={styles.bookCardsDiv}>
        <h3>Book List</h3>
        <div className={styles.bookCardsContainer}>
          {books.map((book, index) => (
            <div key={index} className={styles.bookCard}>
              <h4>{book.title}</h4>
              <p>by {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
