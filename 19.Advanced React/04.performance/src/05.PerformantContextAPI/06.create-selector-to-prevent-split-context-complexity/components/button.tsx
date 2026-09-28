import styled from "styled-components";
import { useNav } from "../hooks/useNav";
import withNavClose from "../hocs/witNavClose";

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

export const CloseButton = withNavClose(({ closeNav }: { closeNav: () => void; }) => {
  console.log("Close Nav Rerendered");
  return <ToggleButton onClick={closeNav}>Close Nav</ToggleButton>

})
