import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/Home";
// https://example.com/
const router = createBrowserRouter([
  {path: "/", element: <HomePage>},
]);
function App() {
  return <RouterProvider router={router}> ;
}

export default App;