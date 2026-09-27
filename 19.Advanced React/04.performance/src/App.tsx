import styled from "styled-components";
import NavController from "./05.PerformantContextAPI/02.better-version-using-context-api/context/nav-controller";
import Main from "./05.PerformantContextAPI/02.better-version-using-context-api/components/main";
import Sidebar from "./05.PerformantContextAPI/02.better-version-using-context-api/components/sidebar";


const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return <NavController>
    <Container>
      <Sidebar />
      <Main />
    </Container>
  </NavController>
}

export default App
