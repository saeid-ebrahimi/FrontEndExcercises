import UserTable from "./components/UserTable"
import './App.css'
import { CreatePostModal } from "./components/CreatePostModal";
import NavigationBar from './components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from './redux/theme/theme.slice';

function App() {
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    const getPreferredScheme = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light';
    if (getPreferredScheme) {
      localStorage.setItem("theme", "dark")
      dispatch(changeTheme("dark"))
    }
  }, [])
  return (
    <>
      <NavigationBar theme={theme} />
      <div style={{ height: "100vh" }} className={`px-3 pt-3 bg-${theme}`}>
        <CreatePostModal />
        <UserTable theme={theme} />
      </div>
    </>
  )
}

export default App
