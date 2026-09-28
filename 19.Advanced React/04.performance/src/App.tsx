import Main from "./05.PerformantContextAPI/04.split-context-to-prevent-wasted-rerender/components/main";
import Sidebar from "./05.PerformantContextAPI/04.split-context-to-prevent-wasted-rerender/components/sidebar";
import Page from "./05.PerformantContextAPI/04.split-context-to-prevent-wasted-rerender/Pages/page";

function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}

export default App
