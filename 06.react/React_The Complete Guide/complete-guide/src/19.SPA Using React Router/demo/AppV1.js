import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import {createRoutesFromElements, Route} from "react-router-dom";

const routerDefinitions = createRoutesFromElements(
    <Route>
        <Route path={'/'} element={<Hom}></Route>
    </Route>
)
const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path:"/products", element: <ProductsPage/>}
]);

function App(){
  return <RouterProvider router={router}/> ;
}

export default App;