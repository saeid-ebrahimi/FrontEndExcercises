import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import NavController from "./context/nav-controller";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default function App() {
  return (
    <NavController>
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </NavController>
  );
}
