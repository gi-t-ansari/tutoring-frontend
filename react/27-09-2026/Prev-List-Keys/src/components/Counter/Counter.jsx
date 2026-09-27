import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  // const [phoneNumber, setphoneNumber] = useState(false);

  // setCount(2);

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  // return isLogin ? (
  //   <div className="counter-container">
  //     <div className="count">{count}</div>
  //     <div className="btn-container">
  //       <button className="actin-btn increment-btn" onClick={handleIncrement}>
  //         Increment
  //       </button>
  //       <button className="actin-btn decrement-btn" onClick={handleDecrement}>
  //         Decrement
  //       </button>
  //       <button className="actin-btn reset-btn" onClick={handleReset}>
  //         Reset
  //       </button>
  //     </div>
  //   </div>
  // ) : (
  //   <div>Yet to log in</div>
  // );

  return (
    isLogin && (
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
    )
  );

  // if (isLogin) {
  //   return (
  //     <div className="counter-container">
  //       <div className="count">{count}</div>
  //       <div className="btn-container">
  //         <button className="actin-btn increment-btn" onClick={handleIncrement}>
  //           Increment
  //         </button>
  //         <button className="actin-btn decrement-btn" onClick={handleDecrement}>
  //           Decrement
  //         </button>
  //         <button className="actin-btn reset-btn" onClick={handleReset}>
  //           Reset
  //         </button>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return <div>Yet to log in</div>;
  // }
};

export default Counter;

// if (true) {
//   console.log("true.");
// } else {
//   console.log("false");
// }

// true ? console.log("true") : console.log("false");
