import React from "react";
import {Link} from "react-router-dom"
// use Link to avoid default browser behaviour
function ProductsPage() {
    return <>
              <h1>My Products Page</h1>
              {/*<p>Go to <a href={"/"}>The Home</a>.</p>*/}
              <p>Go to <Link to={"/"}>The Home Page</Link>.</p>
           </>
}
export default ProductsPage;