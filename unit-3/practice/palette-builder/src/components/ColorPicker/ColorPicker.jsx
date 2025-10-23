import { useState } from "react";

const ColorPicker = ({ setPalette }) => {
  const [currentColor, setCurrentColor] = useState("");

  const handleCurrentColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleAddToPalette = (e) => {
    e.preventDefault();
    setPalette((prev) => ({
      ...prev,
      colors: [...prev.colors, currentColor],
    }));
  };

  return (
    <div>
      <input
        type='color'
        value={currentColor}
        onChange={handleCurrentColorChange}
      />
      <button onClick={handleAddToPalette}>Add to Palette</button>
    </div>
  );
};

export default ColorPicker;
