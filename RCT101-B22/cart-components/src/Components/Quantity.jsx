import Button from "./Button";

const Quantity = ({ id, quantity, handleDataChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "15%",
        padding: "24px",
        background: "#e9967a"
      }}
    >
      <Button btnText="-" onClick={() => handleDataChange(id, -1)} />
      <div style={{ padding: "2px" }}>{quantity}</div>
      <Button btnText="+" onClick={() => handleDataChange(id, 1)}>
        +
      </Button>
    </div>
  );
};

export default Quantity;
