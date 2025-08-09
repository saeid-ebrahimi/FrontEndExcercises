
import './App.css'
import { LargeAuthorListItem, type TAuthor } from './components/authors/large-list-items/index.js';
import { SmallAuthorListItem } from './components/authors/small-list-items';
import { Container, Layout, SidebarLayout, SplitScreen } from './components/layout'
import { RegularList } from './components/layout/lists/regular'
import { authors } from "./data/authors.js";

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
            <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
            <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
            <SplitScreen children={[<Left />, <Right />, <Middle />] as const} childrenWidths={[1, 3, 2,] as const} />
          </Container>
        </SidebarLayout>
      </Layout>

    </>
  )
}

export default App
