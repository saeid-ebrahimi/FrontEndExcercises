import Main from "./05.PerformantContextAPI/03.prevent-wasted-rerender-in-context-api/components/main";
import Sidebar from "./05.PerformantContextAPI/03.prevent-wasted-rerender-in-context-api/components/sidebar";
import Page from "./05.PerformantContextAPI/03.prevent-wasted-rerender-in-context-api/Pages/page";



function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}

export default App
