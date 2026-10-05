import { type ChangeEvent, useRef, useState } from "react";

// second difference between ref and state is that ref changes sync but the state change is async (it schedule change state)

const Form = () => {
  const [value, setValue] = useState("")
  const ref = useRef("");

  // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log("before- ", value);
  //   setValue(e.target.value);
  //   console.log("after- ", value);
  // };

  const changeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("before- ", ref.current);
    setValue(e.target.value)
    ref.current = e.target.value;
    console.log("before- ", ref.current);


  }
  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
    console.log(value);

  };
  return (
    <>
      <input type="text" onChange={changeHandler2} />
      <button onClick={submit}>submit</button>
    </>
  );
};

export default Form;
