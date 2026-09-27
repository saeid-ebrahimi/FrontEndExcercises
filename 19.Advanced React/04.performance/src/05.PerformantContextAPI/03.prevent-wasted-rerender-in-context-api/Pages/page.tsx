import styled from "styled-components";
import NavController from "../context/nav-controller";
import { useEffect, useState, type ReactNode } from "react";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

// re-rendering the page cause rerender the NavController so all the components used it's context values will rerender,
// to prevent this problem we used memoization in NavController.
const Page = ({ children }: { children: ReactNode }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 998)
        return () => clearInterval(timer)
    }, []);

    console.log(counter);

    return <NavController>
        <Container>{children}</Container>
    </NavController>
}

export default Page;