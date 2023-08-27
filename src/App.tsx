import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const count = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <div className="flex gap-3 mt-2">
          <button
            onClick={() => dispatch(decrement())}
            className="border-red-400 px-3 py-2 border-2 rounded"
          >
            decrement
          </button>
          <div>{count}</div>
          <button
            onClick={() => dispatch(increment())}
            className="border-green-400 px-3 py-2 border-2 rounded"
          >
            increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
