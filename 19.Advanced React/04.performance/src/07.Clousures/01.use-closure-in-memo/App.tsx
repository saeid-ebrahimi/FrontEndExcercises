
import ExpensiveComponent from "./components/expensive-component";
import { memo, useCallback, useState } from "react";

// memo, useMemo and useCallback are closures and they are stale until the dependency don't change,
//  in this case MemoizedEC onClick stale value state with initial value which is undefined.
// if we add prevProp.onClick === currentProp.onClick to the MemoizedEC it will break memoization 
// because on an every render clickHandler reference change. 

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
