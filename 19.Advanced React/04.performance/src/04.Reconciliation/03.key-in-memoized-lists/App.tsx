import React, { useState } from "react";
import Input from "./components/input";

const data = [
  { id: "teacher", placeholder: "Teacher ID" },
  { id: "student", placeholder: "Student ID" },
];

const InputMemo = React.memo(Input);

export default function App() {
  const [dataset, setDataset] = useState(false);

  //Reorder the data for triggering a re-render on the App component
  const inputs = dataset ? [...data].reverse() : data;

  return (
    <>
      <label>
        <input type="checkbox" onChange={() => setDataset(prev => !prev)} />
        Check to re-order
      </label>
      <br />
      {inputs.map((val) => (
        <InputMemo placeholder={val.placeholder} key={val.id} />
      ))}
    </>
  );
}
