import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(10);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearTimeout(id);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);
  return (
    <>
      <h1>Count {count}</h1>
    </>
  );
}
