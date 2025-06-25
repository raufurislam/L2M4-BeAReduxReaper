import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hook";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  // const dispatch = useDispatch();
  // const { count } = useSelector((state: RootSate) => state.counter);
  // console.log(counter);

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
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;
