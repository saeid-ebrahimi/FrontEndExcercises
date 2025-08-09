
import './App.css'
import { Container, Layout, SidebarLayout, SplitScreen } from './components/layout'

export function Left() {
  return <>
    <h2 style={{ backgroundColor: "crimson" }}>I am left</h2>
  </>
}
export function Middle() {
  return <h2 style={{ backgroundColor: "lightblue" }}>I am middle</h2>
}
export function Right() {
  return <>
    <h2 style={{ backgroundColor: "burlywood" }}>I am right</h2>
  </>
}

function App() {

  return (
    <>
      <Layout bgColor={"lightblue"}>
        <SidebarLayout sidebar={<div>Sidebar</div>}>
          <Container bgColor={"lightgreen"}>
            <SplitScreen children={[<Left />, <Right />, <Middle />] as const} childrenWidths={[1, 3, 2,] as const} />
          </Container>
        </SidebarLayout>
      </Layout>

    </>
  )
}

export default App
