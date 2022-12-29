import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const initData = [
  { id: 1, label: "noodles", price: 90, quantity: 1 },
  { id: 2, label: "biryani", price: 180, quantity: 3 },
  { id: 3, label: "chips", price: 70, quantity: 5 }
];

const CartContainer = () => {
  const [data, setData] = useState(initData);

  const handleDataChange = (id, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setData(updatedData);
  };

  const totalAmount = (data) => {
    return data.reduce((acc, el) => acc + el.quantity * el.price, 0);
  };
  console.log(data);
  return (
    <div style={{ background: "pink" }}>
      {data.map((item) => (
        <CartItem key={item.id} {...item} handleDataChange={handleDataChange} />
      ))}
      <Total totalAmount={totalAmount(data)} />
    </div>
  );
};

export default CartContainer;
