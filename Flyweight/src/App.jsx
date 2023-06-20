import React from "react";
import Block from "./Components/Block.jsx";

// uses flyweight pattern to reuse block instances

/*
Tradeoffs (+ Cons) (- Pros) of flyweight:
(+) Reduced memory usage: By reusing objects instead of creating new ones, the Flyweight pattern can reduce memory usage and improve performance.
(-) Increased complexity: The Flyweight pattern introduces complexity into your code by requiring you to extract shared behavior into a separate object. This can make the code more difficult to understand.
(-) Unnecessary: RAM is cheap and plentiful. Nowadays, it’s often cheaper to use more memory than to spend developer time on optimizing code.
*/

const blockInstances = new Map();

const getBlockInstance = (color, i) => {
  const key = `${color}-${i}`; // key is a combination of color and index till i find a better way
  if (!blockInstances[key]) {
    blockInstances[key] = <Block key={key} color={color} />;
  }
  return blockInstances[key];
};

function App() {
  const [numBlocks, setNumBlocks] = React.useState(0);
  const inputRef = React.useRef(null);

  const evenGrid = (i) =>
    (i + (Math.trunc(i / numBlocks) % 2)) % 2 ? "black" : "white";
  const oddGrid = (i) => (i % 2 ? "black" : "white");

  const board = Array.from({ length: numBlocks * numBlocks }, (_, i) => i).map(
    (i) => getBlockInstance(!(numBlocks % 2) ? evenGrid(i) : oddGrid(i), i)
  );

  return (
    <>
      <h1>Chess Board</h1>
      <h2>Enter the number of blocks</h2>
      <label htmlFor="blocks">Blocks: </label>
      <input
        type="number"
        min="0"
        ref={inputRef}
        style={{ marginRight: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={() => {
          setNumBlocks(0);
          inputRef.current.value = 0;
        }}
        style={{ marginRight: "10px" }}
      >
        Reset
      </button>
      <button onClick={() => setNumBlocks(inputRef.current.value)}>
        Submit
      </button>
      {numBlocks > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: `${50 * numBlocks}px`,
            border: "1px solid black",
            margin: "auto",
          }}
        >
          {board}
        </div>
      )}
    </>
  );
}

export default App;
