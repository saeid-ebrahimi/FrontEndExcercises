

import styled from "styled-components";
import type { TSidebarLayoutProps } from "./side-bar-layout.types";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.aside<{ width: string }>`
  flex: 0 0 ${(p) => p.width};
  background: #f5f5f5;
`;

const Content = styled.main`
  flex: 1;
  padding: 1rem;
`;


export function SidebarLayout({
  sidebar,
  children,
  sidebarWidth = "250px",
  position = "left",
}: TSidebarLayoutProps) {
  return (
    <Wrapper>
      {position === "left" && <Sidebar width={sidebarWidth}>{sidebar}</Sidebar>}
      <Content>{children}</Content>
      {position === "right" && <Sidebar width={sidebarWidth}>{sidebar}</Sidebar>}
    </Wrapper>
  );
}
