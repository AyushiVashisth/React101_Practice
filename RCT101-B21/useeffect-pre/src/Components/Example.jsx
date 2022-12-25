import React from "react";

function Example() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("called useEffect at", Date.now());
    return () => {
      console.log("called clearup at", Date.now());
    };
  }, [count]);
  return (
    <>
      <div>
        <h1>Example: {count}</h1>
        <button onClick={() => setCount(count + 1)}>ADD</button>
      </div>
    </>
  );
}

export { Example };
