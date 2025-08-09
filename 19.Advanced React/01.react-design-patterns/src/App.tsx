
import './App.css'
import { LargeAuthorListItem } from './components/authors/large-list-item';
import { SmallAuthorListItem } from './components/authors/small-list-item';
import { LargeBookListItem } from './components/books/large-list-item';
import { SmallBookListItem } from './components/books/small-list-item';
import { Container, Layout, SidebarLayout, SplitScreen } from './components/layout'
import { NumberedList } from './components/layout/lists/numbered';
import { RegularList } from './components/layout/lists/regular'
import { Modal } from './components/layout/modal';
import { authors } from "./data/authors";
import { books } from './data/books';

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
            <Modal triggerContent={"show Modal"}>
              <LargeBookListItem book={books[0]} />
            </Modal>
            <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
            <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
            <SplitScreen children={[<Left />, <Right />, <Middle />] as const} childrenWidths={[1, 3, 2,] as const} />
            <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
            <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} />
          </Container>
        </SidebarLayout>

      </Layout>

    </>
  )
}

export default App
