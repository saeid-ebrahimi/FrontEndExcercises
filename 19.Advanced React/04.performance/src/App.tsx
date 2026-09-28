import Main from "./05.PerformantContextAPI/06.create-selector-to-prevent-split-context-complexity/components/main";
import Sidebar from "./05.PerformantContextAPI/06.create-selector-to-prevent-split-context-complexity/components/sidebar";
import Page from "./05.PerformantContextAPI/06.create-selector-to-prevent-split-context-complexity/Pages/page";

function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}

export default App
