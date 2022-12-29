const LabelPrice = ({ label, price }) => {
  return (
    <div
      style={{
        border: "1px solid #cecece",
        padding: "8px",
        margin: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#00ced1",
        width: "80%"
      }}
    >
      <h3>{label}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default LabelPrice;
