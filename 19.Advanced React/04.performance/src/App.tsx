import { useState } from "react";
import { AdditionalComplexThings, BlaBla } from "./01.re-rendering/03.using-children-pros/components/dummy-components"
import { SlowComponent } from "./01.re-rendering/03.using-children-pros/components/slow-component"

import styled from "styled-components";
import { DynamicScroll } from "./01.re-rendering/03.using-children-pros/components/dynamic-scroll";


const ScrollableContainer = styled.div`
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


function App() {

  // put the logic in separate component
  // const [position, setPosition] = useState(170);

  // const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  //   const newPosition = calculatePosition(e.currentTarget.scrollTop);
  //   setPosition(Math.max(113, newPosition))
  // }

  // const blockColor = calculateColor(position)
  return <>
    {/* <ScrollableContainer onScroll={handleScroll}> */}
    {/* <DynamicBlock top={position === 113 ? 113 : position} color={blockColor}>🛒</DynamicBlock> */}
    {/* <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </ScrollableContainer> */}

    <DynamicScroll>
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </DynamicScroll>
  </>
}

export default App
