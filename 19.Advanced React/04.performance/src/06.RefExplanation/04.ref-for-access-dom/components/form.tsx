// Accessing and Manipulating DOM Elements:
// - Directly interacting with HTML DOM nodes for operations React doesn't manage declaratively.

// - Focus management: Automatically focusing an < input > on mount or button click.

// - Measuring elements: Getting element dimensions with getBoundingClientRect().

// - Media playback: Calling.play() or.pause() on < video > or < audio > elements.

// - Scrolling: Triggering.scrollIntoView() or reading scrollTop.

import { type ChangeEvent, useRef, useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const submit = () => {
    if (username.length < 1) {
      //focus on the username input
      ref.current?.focus();
    } else {
      console.log({ username, password });

      //submit data to server
    }
  };

  return (
    <>
      <input type="text" name="username" ref={ref} onChange={changeHandler} />
      <input type="password" name="password" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    </>
  );
};
export default Form;
