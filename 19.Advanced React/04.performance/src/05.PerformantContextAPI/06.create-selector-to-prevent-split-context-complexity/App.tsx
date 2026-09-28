import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Page from "./Pages/page";



export default function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
