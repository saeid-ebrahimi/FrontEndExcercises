import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Container>
      <Sidebar collapsed={collapsed} setCollapsed={() => { setCollapsed(prev => !prev) }} />
      <Main collapsed={collapsed} />
    </Container>
  );
}
