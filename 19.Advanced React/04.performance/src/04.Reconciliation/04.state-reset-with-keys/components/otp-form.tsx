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

// Note: use key for state reset: use this method for resetting state in tiny components not heavy ones
const OTP = () => {
  const [received, setReceived] = useState(false);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox id="otp-checkbox" onChange={() => setReceived(!received)} />
        <label htmlFor="otp-checkbox">I received the OTP</label>
      </CheckboxWrapper>

      {received ? (
        <Input
          id="otp-code"
          placeholder="Enter the otp code here"
          key="otp-input"
        />
      ) : (
        <Input
          id="email-address"
          placeholder="Enter your email address here"
          key="email-input"
        />
      )}
    </>
  );
};

/**
 * without keys:
 *
 * before and after re-render:
 * [
 *  {type: "CheckboxWrapper"}
 *  {type: Input},
 * ]
 *
 * with keys:
 *
 * before re-render:
 * [
 *  {type: "CheckboxWrapper"}
 *  {type: Input, key:"email-input"},
 * ]
 *
 * after rerender:
 * [
 *  {type: "CheckboxWrapper"}
 *  {type: Input, key:"otp-input"},
 * ]
 */

export default OTP;
