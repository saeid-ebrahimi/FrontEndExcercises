import { cloneElement, type ReactElement } from "react";
import type { IconProps } from "./icons";


const Button = ({
  type,
  size,
  icon,
}:
  {
    icon: ReactElement<IconProps>;
    type?: string;
    size?: string;
  }) => {

  const buttonStyles = {
    backgroundColor: type === "primary" ? "black" : "white",
    color: type === "primary" ? "white" : "black",
    padding: size === "lg" ? "12px 20px" : "8px 16px",
    fontSize: size === "lg" ? "20px" : "16px",
  };
  const iconProps: IconProps = { size: size === "lg" ? "20px" : "16px", color: type === "primary" ? "white" : "black", };

  const clonedIcon = cloneElement(icon, { ...iconProps, ...icon.props });
  return (
    <button type="button" style={buttonStyles}>Submit {clonedIcon}</button>
  );
};

export default Button;
