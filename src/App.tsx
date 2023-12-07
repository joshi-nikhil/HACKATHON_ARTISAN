import React from "react";

import { increment, decrement } from "./redux/slices/counter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const handleIncrementClick = () => dispatch(increment());
  const handleDecrementClick = () => dispatch(decrement());
  return (
    <div className="App">
      {count}
      <div>
        <button style={{ padding: "5px" }} onClick={handleIncrementClick}>
          Increment
        </button>
        <button style={{ padding: "5px" }} onClick={handleDecrementClick}>
          Decrement
        </button>
      </div>
    </div>
  );
}



export default App;
