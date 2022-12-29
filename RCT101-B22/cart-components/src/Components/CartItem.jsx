import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

const CartItem = ({ id, label, price, quantity, handleDataChange }) => {
  return (
    <div
      style={{
        border: "1px solid #cecece",
        padding: "8px",
        margin: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f0f8ff"
      }}
    >
      <LabelPrice label={label} price={price} />
      <Quantity
        id={id}
        quantity={quantity}
        handleDataChange={handleDataChange}
      />
    </div>
  );
};

export default CartItem;
