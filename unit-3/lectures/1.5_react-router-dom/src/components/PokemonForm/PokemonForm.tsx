import { useState } from "react";
import { useNavigate } from "react-router";
import type { PokemonFormProps } from "../../types/pokemon";

const initialState = {
  name: "",
  weight: 0,
  height: 0,
};

const PokemonForm = ({ addPokemon }: PokemonFormProps) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addPokemon(formData);
    setFormData(initialState);
    // Navigate to the pokemon list page after submission.
    navigate("/pokemon");
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor='weight'>Weight:</label>
        <input
          type='number'
          id='weight'
          name='weight'
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor='height'>Height:</label>
        <input
          type='number'
          id='height'
          name='height'
          value={formData.height}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default PokemonForm;
