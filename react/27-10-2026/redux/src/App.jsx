import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "./store/reducers/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="count">{count}</div>
      <div className="btn-container">
        <button
          className="actin-btn increment-btn"
          onClick={() => dispatch(incrementCount())}
        >
          Increment
        </button>
        <button
          className="actin-btn decrement-btn"
          onClick={() => dispatch(decrementCount())}
        >
          Decrement
        </button>
        <button
          className="actin-btn reset-btn"
          onClick={() => dispatch(resetCount())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
