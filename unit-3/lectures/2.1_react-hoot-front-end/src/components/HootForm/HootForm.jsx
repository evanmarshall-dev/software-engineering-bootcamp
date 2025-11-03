// ----------------------------------
// NOTES:
// - This component is similar to other forms you’ve seen in React, but let’s take a closer look at the <select> tag:
//   - The <select> element creates dropdown menus in React. Its value is controlled by the formData.category state, meaning it updates automatically when the state changes.
//   - Each <option> tag has a predefined value attribute (for example, 'News', 'Games'). The initial value of the dropdown is set by the default category value in the formData state.
//   - If your back-end uses an enum constraint in the database schema for this field, ensure the value attributes on the <option> tags match the values defined in your schema. This consistency prevents errors when submitting the form.
// ----------------------------------

import { useState, useEffect } from "react";
import { useParams } from "react-router";

// Import the hootService's exports
import * as hootService from "../../services/hootService";

import styles from "./HootForm.module.css";

const HootForm = (props) => {
  // Destructure hootId from the useParams hook, and console log it
  const { hootId } = useParams();
  console.log(hootId);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "News",
  });

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      setFormData(hootData);
    };
    if (hootId) fetchHoot();

    // Add a cleanup function
    return () => setFormData({ title: "", text: "", category: "News" });
  }, [hootId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // - Take a moment to verify that you can successfully change the formData state. When you submit the form, you should only see a console.log of state, as we have not yet built the logic to create a new hoot.
    // ? console.log("formData", formData);
    // ? props.handleAddHoot(formData);
    if (hootId) {
      props.handleUpdateHoot(hootId, formData);
    } else {
      props.handleAddHoot(formData);
    }
  };

  return (
    <main className={styles.container}>
      {/* Add a heading */}
      <h1>{hootId ? "Edit Hoot" : "New Hoot"}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title-input'>Title</label>
        <input
          required
          type='text'
          name='title'
          id='title-input'
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor='text-input'>Text</label>
        <textarea
          required
          type='text'
          name='text'
          id='text-input'
          value={formData.text}
          onChange={handleChange}
        />
        <label htmlFor='category-input'>Category</label>
        <select
          required
          name='category'
          id='category-input'
          value={formData.category}
          onChange={handleChange}>
          <option value='News'>News</option>
          <option value='Games'>Games</option>
          <option value='Music'>Music</option>
          <option value='Movies'>Movies</option>
          <option value='Sports'>Sports</option>
          <option value='Television'>Television</option>
        </select>
        <button type='submit'>SUBMIT</button>
      </form>
    </main>
  );
};

export default HootForm;
