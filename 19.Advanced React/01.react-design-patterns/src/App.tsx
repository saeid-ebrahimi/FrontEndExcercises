
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
// import { AuthorInfo } from './components/authors/author-info/author-info';
// import { LargeAuthorListItem, type TAuthor } from './components/authors/large-list-item';
// import { SmallAuthorListItem } from './components/authors/small-list-item';
// import { LargeBookListItem } from './components/books/large-list-item';
// import { SmallBookListItem } from './components/books/small-list-item';
import { Container, DataSourceWithRender, GetDataLoader, Layout, SidebarLayout, SplitScreen } from './components/layout'
// import { NumberedList } from './components/layout/lists/numbered';
// import { RegularList } from './components/layout/lists/regular'
// import { UncontrolledModal } from './components/layout/uncontrolled-modal';
// import { authors } from "./data/authors";
// import { books } from './data/books';
// import { DataSource } from './components/layout/container/data-source';
// import { getData } from './apis/cmsApis';
// import { UncontrolledForm } from './components/uncontrolled-form/uncontrolled-form';
// import { ControlledModal } from './components/layout/controlled-modal/controlled-modal';
// import { UncontrolledFlow } from './components/uncontrolled-flow/uncontrolled-flow';
// import { ControlledFlow } from './components/controlled-flow';
// import type { TData } from './components/uncontrolled-flow';
// import { withLogger } from './hocs/with-logger/with-logger';
import { AuthorInfo } from './components/authors/author-info/author-info';
import { withUser } from './hocs/with-user-info/with-user-info';
import { AuthorInfoForm } from './components/authors/author-form/author-form';
import type { TAuthor } from './components/authors/large-list-item';
import { UserInfo } from './components/users/users-info';
import { Recursive } from './components/recursive';
import { Card } from './components/compound/card';


// const getDataFromLocalStorage = (key: string) => localStorage.getItem(key)

// function FirstStep({ goNext }: { goNext?: (data: Partial<TData>) => void }) {
//   return <>
//     <h2>First step: Enter your name</h2>

//     {goNext && <button onClick={() => goNext({ name: "MyName" })}>Next</button>}
//   </>
// }
// function SecondStep({ goNext }: { goNext?: (data: Partial<TData>) => void }) {
//   return <>
//     <h2>Second step: Enter your age</h2>
//     {goNext && <button onClick={() => goNext({ age: 23 })}>Next</button >}
//   </>
// }
// function ThirdStep({ goNext }: { goNext?: (data: Partial<TData>) => void }) {
//   return <>
//     <h2>Third step: Enter your country</h2>
//     {goNext && <button onClick={() => goNext({ country: "UAE" })}>Next</button>}
//   </>
// }

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue 1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2"
    },
  },
  key3: "value3"
}

const queryClient = new QueryClient()
function App() {
  // const [shouldDisplay, setShouldDisplay] = useState(false);
  // const [currentFlowIndex, setCurrentFlowIndex] = useState(0);
  // const [data, setData] = useState<TData>({
  //   name: "",
  //   age: 0,
  //   country: ""
  // });

  // const onNext = (dataFromStep: Partial<TData>) => {
  //   const updatedData = {
  //     ...data,
  //     ...dataFromStep
  //   }
  //   console.log(updatedData);
  //   setData(updatedData)
  //   setCurrentFlowIndex(prev => prev + 1)
  // }
  // const AuthorInfoWithLog = withLogger(AuthorInfo);
  // const AuthorInfoWithUserData = withUser(AuthorInfo, `users/3`)
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout bgColor={"lightblue"}>
          <SidebarLayout sidebar={<div>Sidebar</div>}>
            <Container bgColor={"lightgreen"}>
              <Card>
                <Card.Header><h1 style={{ margin: "0" }}>An Intro to Games</h1></Card.Header>
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ad eum reiciendis tenetur impedit culpa. Omnis quo voluptates,
                  quod, perspiciatis eos hic iste maxime et qui ut praesentium illo,
                  dignissimos doloremque!
                </Card.Body>
                <Card.Footer>
                  <button>view more</button>
                  <button>find related...</button>
                </Card.Footer>
              </Card>
              {/* <UserInfo userId={3} />
              <Recursive data={myNestedObject} /> */}
              {/* <AuthorInfoForm name={''} age={0} country={''} books={[]} /> */}
              {/* <AuthorInfoWithLog test={"test"} /> */}
              {/* <UncontrolledModal triggerContent={"show Modal"}>
                <LargeBookListItem book={books[0]} />
              </UncontrolledModal>
              <ControlledModal shouldDisplay={shouldDisplay} onClose={() => setShouldDisplay(false)} >
                <h1>Here is the heading of the controlled modal</h1>
              </ControlledModal>
              <button onClick={() => { setShouldDisplay(prev => !prev) }}>{shouldDisplay ? "Hide Modal" : "Display Modal"}</button> */}
              {/* <UncontrolledFlow onDone={(data) => {
                console.log(data);
                alert("Yesss, you made it to the final step")
              }} >
                <FirstStep />
                <SecondStep />
                <ThirdStep />
              </UncontrolledFlow> */}
              {/* <ControlledFlow onNext={onNext} onDone={(data) => {
                console.log(data);
                alert("Yesss, you made it to the final step");
              }} currentIndex={currentFlowIndex}>
                <FirstStep />
                <SecondStep />
                <ThirdStep />
              </ControlledFlow> */}

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
