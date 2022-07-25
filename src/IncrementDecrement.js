import { React, useState } from "react";

function IncrementDecrement() {
  const [data, setData] = useState(0);
  function increment() {
    setData(data + 1);
  }
  function decrement() {
    setData(data - 1);
  }
  function reset() {
    setData(0);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <p>{data}</p>
    </div>
  );
}
export default IncrementDecrement;
