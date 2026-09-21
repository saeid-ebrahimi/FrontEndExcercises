import { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: #555;
`;

const Button = styled.button<{ received: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.received ? "#4CAF50" : "#008CBA")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.received ? "#45a049" : "#007bb5")};
  }
`;

const OTP = () => {
  const [received, setReceived] = useState(false);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox id="otp-checkbox" onChange={() => setReceived(!received)} />
        <label htmlFor="otp-checkbox">I received the OTP</label>
      </CheckboxWrapper>

      {received ? (
        <Input id="otp-code" placeholder="Enter the otp code here" />
      ) : null}
      {!received ? (
        <Input id="email-address" placeholder="Enter your email address here" />
      ) : null}
      {/* <Button received={received}>
        {received ? "Submit OTP" : "Send me OTP"}
      </Button> */}
    </>
  );
};

export default OTP;
