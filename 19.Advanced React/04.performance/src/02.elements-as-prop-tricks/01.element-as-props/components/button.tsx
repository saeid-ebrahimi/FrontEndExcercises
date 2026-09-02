import type { ReactElement } from "react";

const Button = ({
  icon
}:
  {
    icon: ReactElement;
  }) => {
  return (
    <button className="button">Submit {icon}</button>
  );
};

export default Button;
