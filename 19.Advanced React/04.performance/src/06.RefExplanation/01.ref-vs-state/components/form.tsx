import { type ChangeEvent, useRef } from "react";

const Form = () => {
  // const [value, setValue] = useState("");
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
    </>
  );
};
export default Form;
