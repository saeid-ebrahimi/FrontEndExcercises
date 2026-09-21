import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;

  &.highlight {
    background-color: yellow;
  }
`;

const TextInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// move from inner component to outer to get rid of redundant rerender
const ToggleHighlight = () => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <Container className={highlighted ? "highlight" : ""}>
      <ToggleButton onClick={() => setHighlighted(!highlighted)}>
        Toggle Highlight
      </ToggleButton>
    </Container>
  );
};

export default function App() {
  const [inputValue, setInputValue] = useState("");

  // Nested component to handle button state and styling
  // const ToggleHighlight = () => {
  //   const [highlighted, setHighlighted] = useState(false);

  //   return (
  //     <Container className={highlighted ? "highlight" : ""}>
  //       <ToggleButton onClick={() => setHighlighted(!highlighted)}>
  //         Toggle Highlight
  //       </ToggleButton>
  //     </Container>
  //   );
  // };

  return (
    <div>
      <TextInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ToggleHighlight />
    </div>
  );
}
