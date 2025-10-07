import { useState } from "react";

// export default function Form({ moviesearch }) {
export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({ searchterm: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // moviesearch(formData.searchterm.trim());
    getMovie(formData.searchterm.trim());
  }

  return (
    <form onSubmit={handleSubmit} className='search'>
      <label htmlFor='searchterm' className='sr-only'>
        Search
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
      <button type='submit'>Search</button>
    </form>
  );
}
