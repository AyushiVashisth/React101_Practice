import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [player, setPlayer] = React.useState(false);

  const AddOne = () => {
    setCount(count + 1);
    setPlayer(!player);
  };

  const AddTwo = () => {
    setCount(count + 2);
    setPlayer(!player);
  };

  const ResetGame = () => {
    setCount(0);
    setPlayer(false);
  };

  return (
    <div className="App">
      {/* Display Player Turn here */}
      <span data-testid="turn-container">
        Its Your Turn:
        {count <= 9
          ? player
            ? "Player 2"
            : "Player 1"
          : player
          ? "Player 1"
          : "Player 2"}
      </span>

      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button
          data-testid="add-one-btn"
          disabled={count >= 10}
          onClick={AddOne}
        >
          +1
        </button>
        <button
          data-testid="add-two-btn"
          onClick={AddTwo}
          disabled={count >= 9}
        >
          +2
        </button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{count}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">
        Winner:
        {count === 10
          ? player
            ? "Player 1"
            : "Player 2"
          : "Still To Be Decided "}
      </span>
      <br />

      {/* Reset the Game with this button */}
      <button 
        data-testid="reset-btn" 
        onClick={ResetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
