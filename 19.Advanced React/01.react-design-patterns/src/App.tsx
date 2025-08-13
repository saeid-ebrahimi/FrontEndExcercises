
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { AuthorInfo } from './components/authors/author-info/author-info';
import { LargeAuthorListItem, type TAuthor } from './components/authors/large-list-item';
import { SmallAuthorListItem } from './components/authors/small-list-item';
import { LargeBookListItem } from './components/books/large-list-item';
import { SmallBookListItem } from './components/books/small-list-item';
import { Container, DataSourceWithRender, GetDataLoader, Layout, SidebarLayout, SplitScreen } from './components/layout'
import { NumberedList } from './components/layout/lists/numbered';
import { RegularList } from './components/layout/lists/regular'
import { UncontrolledModal } from './components/layout/uncontrolled-modal';
import { authors } from "./data/authors";
import { books } from './data/books';
import { DataSource } from './components/layout/container/data-source';
import { getData } from './apis/cmsApis';
import { UncontrolledForm } from './components/uncontrolled-form/uncontrolled-form';
import { ControlledModal } from './components/layout/controlled-modal/controlled-modal';
import { useState } from 'react';

const getDataFromLocalStorage = (key: string) => localStorage.getItem(key)

const queryClient = new QueryClient()
function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false)
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout bgColor={"lightblue"}>
          <SidebarLayout sidebar={<div>Sidebar</div>}>
            <Container bgColor={"lightgreen"}>
              <UncontrolledModal triggerContent={"show Modal"}>
                <LargeBookListItem book={books[0]} />
              </UncontrolledModal>
              <ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)} >
                <h1>Here is the heading of the controlled modal</h1>
              </ControlledModal>
              <button onClick={() => { setShouldDisplay(prev => !prev) }}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button>

              <SplitScreen children={[
                <>
                  {/* <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
                <NumberedList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} /> */}
                </>,
                <>
                  {/* <GetDataLoader<TAuthor> getUrl={`users/2`}>
                    <AuthorInfo />
                  </GetDataLoader>
                  <DataSource<TAuthor> resourceName={"data"} getData={async () => getData("/users/1")} >
                    <AuthorInfo />
                  </DataSource > */}
                  {/* <DataSource<TAuthor> resourceName={"data"} getData={async () => {
                    const data = getDataFromLocalStorage("author");
                    console.log(data);

                    if (typeof data === "string")
                      return JSON.parse(data) as TAuthor;
                  }} >
                    <AuthorInfo />
                  </DataSource >
                  <DataSourceWithRender<TAuthor>
                    getData={async () => getData("users/3")}
                    render={(resource) => <AuthorInfo data={resource} />} />
                  <DataSourceWithRender<TAuthor>
                    getData={async () => {
                      const data = getDataFromLocalStorage("author");
                      console.log(data);

                      if (typeof data === "string")
                        return JSON.parse(data) as TAuthor;
                    }}
                    render={(resource) => <AuthorInfo data={resource} />} /> */}
                  {/* <UncontrolledForm /> */}
                </>,
                <>
                  {/* <RegularList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
                <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} /> */}
                </>
                ,] as const} childrenWidths={[1, 3, 2,] as const} />

            </Container>
          </SidebarLayout>

        </Layout >
      </QueryClientProvider >


    </>
  )
}

export default App
