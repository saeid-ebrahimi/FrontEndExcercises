import styled from "styled-components";
import { useNav } from "../hooks/useNav";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { collapsed, toggle } = useNav();

  return <ToggleButton onClick={toggle}>{collapsed ? "▶️" : "◀️"}</ToggleButton>;
};

export default Button;
