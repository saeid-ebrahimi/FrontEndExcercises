import PostTable from "./components/PostTable"
import './App.css'
import { CreatePostModal } from "./components/CreatePostModal";
import NavigationBar from './components/Navbar';
import { useEffect } from "react";
import { changeTheme } from './redux/theme/theme.slice';
import { useAppDispatch, useAppSelector } from "./redux/hooks";


function App() {
  const { theme } = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPreferredScheme = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light';
    if (getPreferredScheme) {
      localStorage.setItem("theme", "dark")
      dispatch(changeTheme("dark"))
    }
  }, [])

  useEffect(() => {
    (document.querySelector("html")?.setAttribute("data-bs-theme", theme))
  }, [theme])
  return (
    <>
      <NavigationBar theme={theme} />
      <div style={{ height: "100vh" }} className={`px-3 pt-3 bg-${theme}`}>
        <CreatePostModal />
        <PostTable theme={theme} />
      </div>
    </>
  )
}

export default App
