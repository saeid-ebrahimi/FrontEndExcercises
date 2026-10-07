
import ExpensiveComponent from "./components/expensive-component";
import { memo, useCallback, useState } from "react";


const MemoizedEC = memo(ExpensiveComponent, (prevProp, currentProp) => {
  return prevProp.btnLabel === currentProp.btnLabel
});

export default function App() {
  const [value, setValue] = useState<string>();

  console.log(value);

  const clickHandler = useCallback(() => {
    // submit stuff to the backend
    console.log(value);
  }, [value])

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedEC btnLabel="click me!" onClick={clickHandler} />
    </>
  );
}
