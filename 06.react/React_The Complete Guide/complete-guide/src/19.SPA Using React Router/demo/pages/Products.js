import React from "react";
import {Link, useNavigate} from "react-router-dom"
// use Link to avoid default browser behaviour
const PRODUCTS = [
    {id:"p1", title: "Product 1"},
    {id:"p2", title: "Product 2"},
    {id:"p3", title: "Product 3"},
];
function ProductsPage() {
    const navigate = useNavigate()
    function navigationHandler(){
        navigate("/")
    }
    return <>
              <h1>My Products Page</h1>
              <ul>
                  {PRODUCTS.map(product => <li  key={product.id}><Link to={`${product.id}`}  relative='path'>{product.title}</Link></li>)}
              </ul>
              {/*<p>Go to <a href={"/"}>The Home</a>.</p>*/}
              <p>Go to <Link to={"/"}>The Home Page</Link>.</p>
              <p>
                <button onClick={navigationHandler}>Navigate</button>
              </p>
           </>
}
export default ProductsPage;