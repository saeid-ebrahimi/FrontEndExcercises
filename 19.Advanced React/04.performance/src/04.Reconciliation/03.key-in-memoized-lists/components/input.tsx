import { useEffect } from "react";

type InputProps = {
  onChange?: () => void;
  placeholder: string;
  label?: string;
  id?: string;
};

const Input = ({ onChange, label, placeholder, id }: InputProps) => {
  useEffect(() => {
    console.log(`Input re-renders`);
  });

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
