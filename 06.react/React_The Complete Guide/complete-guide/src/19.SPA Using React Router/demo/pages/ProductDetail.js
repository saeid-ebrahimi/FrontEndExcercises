import React from "react";
import {useParams, Link} from "react-router-dom";

function ProductsDetailPage(){
    const params = useParams();

    return <>
        <h1>Product Details!</h1>
        <p>{params.productId}</p>
        <p><Link to={".."} relative={"path"}>Back</Link></p>
    </>

}
export default ProductsDetailPage;