import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  // const count = React.useState(5555);
  const [count, incCount] = React.useState(0);

  function increment() {
    incCount(count + 1);
  }

  console.log(count);

  return (
    <div className="container">
      <div className="incrementBox">
        <h1>Counter Value</h1>
        {/* <h2>{count[0]}</h2> */}
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
export default App;
