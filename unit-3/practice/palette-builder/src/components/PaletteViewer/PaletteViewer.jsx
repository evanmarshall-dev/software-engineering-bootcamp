const PaletteViewer = ({ palette, handleColorRemove }) => {
  return (
    <div>
      <h2>{palette.name}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {palette.colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: "50px",
              height: "50px",
              borderRadius: "4px",
            }}
            onClick={() => handleColorRemove(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaletteViewer;
