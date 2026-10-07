import React, { useState } from "react";
import ExpensiveComponent from "./components/expensive-component";

const MemoizedEC = React.memo(ExpensiveComponent);

export default function App() {
  const [value, setValue] = useState<string>();

  const clickHandler = () => {
    // submit stuff to the backend
    console.log(value);
  };

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
