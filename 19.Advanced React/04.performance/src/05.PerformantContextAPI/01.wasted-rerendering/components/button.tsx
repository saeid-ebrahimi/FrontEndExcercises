import styled from "styled-components";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: () => void; }) => {
  return <ToggleButton onClick={setCollapsed}>{collapsed ? "▶️" : "◀️"}</ToggleButton>;
};

export default Button;
