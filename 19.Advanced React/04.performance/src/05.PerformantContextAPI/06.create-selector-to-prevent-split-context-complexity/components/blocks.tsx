import styled from "styled-components";
import { useNav } from "../hooks/useNav";

const BottomBlock = styled.div<{ collapsed?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.collapsed ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Blocks = () => {
  const { collapsed } = useNav();
  console.log("re-render blocks");

  return (
    <>
      <BottomBlock collapsed={collapsed}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </BottomBlock>
    </>
  );
};

export default Blocks;
