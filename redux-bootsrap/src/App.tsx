import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter with redux</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div>0</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
