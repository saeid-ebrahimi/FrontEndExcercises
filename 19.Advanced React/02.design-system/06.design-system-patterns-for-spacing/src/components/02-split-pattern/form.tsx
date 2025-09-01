import type { ReactNode } from "react";
import { Layers } from "../01-layers-pattern/start";

const Form = () => {
  return (
    <Layers gutter="xl">
      <InputGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </InputGroup>
      <InputGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </InputGroup>
      <InputGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </InputGroup>
      <InputGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </InputGroup>
      <InputGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </InputGroup>
      <InputGroup htmlFor="country" label="Country">
        <input type="text" id="country" />
      </InputGroup>
      <InputGroup htmlFor="phone" label="Phone Number">
        <input type="text" id="phone" />
      </InputGroup>
    </Layers>
  );
};
interface InputGroupProps {
  htmlFor: string;
  label: string;
  children: ReactNode;
}
export const InputGroup = (props: InputGroupProps) => {
  return (
    <Layers gutter="md">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Layers>
  );
};

export default Form;
