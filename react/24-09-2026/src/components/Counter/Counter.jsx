import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="count">{count}</div>
      <div className="btn-container">
        <button className="actin-btn increment-btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="actin-btn decrement-btn" onClick={handleDecrement}>
          Decrement
        </button>
        <button className="actin-btn reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
