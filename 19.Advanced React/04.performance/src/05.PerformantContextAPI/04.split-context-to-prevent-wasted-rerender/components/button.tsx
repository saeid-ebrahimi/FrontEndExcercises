import styled from "styled-components";
import { useNavData, useNavApi } from "../hooks/useNav";

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
  const { collapsed } = useNavData();
  const { open, close } = useNavApi();

  return <ToggleButton onClick={collapsed ? open : close}>{collapsed ? "▶️" : "◀️"}</ToggleButton>;
};

export default Button;

export const CloseButton = () => {

  const { close } = useNavApi();

  console.log("rendered");

  return <ToggleButton onClick={close}>Close Sidebar</ToggleButton>;
}
