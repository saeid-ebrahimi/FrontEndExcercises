import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsDetailPage from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            { index: true, element: <HomePage/> }, // path: ""
            { path:"products", element: <ProductsPage/> },
            { path: `products/:productId`, element: <ProductsDetailPage/>}
        ],
        errorElement: <ErrorPage/>
    },
]);

function App(){
  return <RouterProvider router={router}/> ;
}
export default App;