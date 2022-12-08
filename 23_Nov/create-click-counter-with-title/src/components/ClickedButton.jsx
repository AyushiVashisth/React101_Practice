import React from "react";
import { useEffect, useState } from "react";

export default function ClickedButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 style={{ color: "teal" }}> Clicked : {count} </h1>
      <button onClick={handleClick}>Adding</button>
    </div>
  );
}
