import { useState } from "react";
import ColorPicker from "../ColorPicker/ColorPicker";
import styles from "./PaletteForm.module.scss";
import PaletteViewer from "../PaletteViewer/PaletteViewer";

const initialState = {
  name: "",
  colors: [],
};

const PaletteForm = ({ addPalette }) => {
  const [palette, setPalette] = useState(initialState);

  const handleNameChange = (e) => {
    setPalette({ ...palette, name: e.target.value });
  };

  const handleColorRemove = (colorToRemove) => {
    setPalette({
      ...palette,
      colors: palette.colors.filter((color) => color !== colorToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPalette(palette);
    setPalette(initialState);
  };

  return (
    <>
      <form className={styles.paletteForm} onSubmit={handleSubmit}>
        <label>
          Palette Name:
          <input
            type='text'
            name='paletteName'
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        <PaletteViewer
          palette={palette}
          handleColorRemove={handleColorRemove}
        />
        <br />
        <label>
          <ColorPicker setPalette={setPalette} />
        </label>
        <br />
        <button type='submit' onClick={() => addPalette(palette)}>
          Save Palette
        </button>
      </form>
    </>
  );
};

export default PaletteForm;
