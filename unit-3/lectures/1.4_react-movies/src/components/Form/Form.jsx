import { useState } from "react";
// import styled from "styled-components";
import styles from "./Form.module.scss";

export default function Form({ getMovie }) {
  // const StyledButton = styled.button`
  //   background-color: #86ba8a;
  //   border-radius: 8px;
  //   color: #3d3d3d;
  //   padding: 15px 50px;
  //   font-size: 24pt;
  //   width: 300px;
  // `;

  const [formData, setFormData] = useState({ searchterm: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovie(formData.searchterm.trim());
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <label htmlFor='searchterm' className={styles.srOnly}>
        Search:
      </label>
      <input
        id='searchterm'
        name='searchterm'
        type='text'
        placeholder='Search by title…'
        value={formData.searchterm}
        onChange={handleChange}
        aria-label='Movie title'
      />
      {/* <StyledButton type='submit'>Search</StyledButton> */}
      <button type='submit'>Search</button>
    </form>
  );
}
