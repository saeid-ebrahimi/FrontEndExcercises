import styled from "styled-components";

const BlaBlaStyle = styled.div`
  background: #d0f0ff;
  border: 1px solid rgba(0, 123, 255, 0.3);
  padding: 1.5rem;
  margin: 1.5rem 0;
  min-height: 15rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

export const ScrollableContainer = styled.div`
  width: 25rem;
  height: 12rem;
  overflow: auto;
  border: 1px solid rgba(128, 128, 128, 0.5);
  position: relative;
  z-index: 1;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Component that renders a div with specific class name and text content
export const BlaBla = () => <BlaBlaStyle>Some random stuff</BlaBlaStyle>;

// Another component that renders a div with different text content
export const AdditionalComplexThings = () => (
  <AdditionalStyle>Additional complex stuff</AdditionalStyle>
);
