import { type ForwardedRef, forwardRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const shakeAnimation = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const AnimatedInput = styled.input<{ shake: boolean }>`
  ${(props) =>
    props.shake &&
    css`
      animation: ${shakeAnimation} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97)
        both;
    `}
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
`;
type Props = {
  changeHandler: (val: string) => void;
};

const Input = (
  { changeHandler }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isShaking, setIsShaking] = useState(false);
  return (
    <AnimatedInput
      shake={isShaking}
      type="text"
      name="username"
      ref={ref}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
};

export default forwardRef(Input);
