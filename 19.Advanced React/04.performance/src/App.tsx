import { memo, useCallback, useState } from "react";
import ExpensiveComponent from "./07.Clousures/01.use-closure-in-memo/components/expensive-component";

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
