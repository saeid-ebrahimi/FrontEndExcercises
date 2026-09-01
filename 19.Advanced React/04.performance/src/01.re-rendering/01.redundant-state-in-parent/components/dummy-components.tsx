import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(135deg, #ffcc70, #ff6f61);
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1.5rem 0;
  min-height: 12rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
`;

const AdditionalStyle = styled.div`
  background: #333;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`;

// Component that renders a div with specific class name and text content
export const BlaBla = () => <StyledDiv>Some random stuff</StyledDiv>;

// Another component that renders a div with different text content
export const AdditionalComplexThings = () => (
  <AdditionalStyle>Additional complex stuff</AdditionalStyle>
);
