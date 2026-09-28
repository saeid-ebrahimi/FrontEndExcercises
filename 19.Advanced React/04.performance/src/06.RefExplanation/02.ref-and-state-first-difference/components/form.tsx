import { type ChangeEvent, useRef, useState } from "react";

const Form = () => {
  // refs change actual DOM and don't re-render the virtual DOM tree, like states.
  //  to re-render virtual DOM we need states
  const [forceRerender, setForceRerender] = useState(false);
  const ref = useRef("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
  };
  return (
    <>
      <input type="text" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
      <h3>{ref.current}</h3>
      <button onClick={() => setForceRerender(!forceRerender)} >Sync</button>
    </>
  );
};

export const FormV1 = () => {
  // refs change actual DOM and don't re-render the virtual DOM tree, like states.
  //  to re-render virtual DOM we need states
  const [forceRerender, setForceRerender] = useState(false);
  const ref = useRef("");
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    ref.current = e.target.value;
  };

  const submit = () => {
    //send some data to backend server
    console.log(ref.current);
  };
  return (
    <>
      <input type="text" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
      <h3>{ref.current}</h3>
      <br />
      <button onClick={() => setForceRerender(!forceRerender)} >Sync</button>
    </>
  );
};
export default Form;
