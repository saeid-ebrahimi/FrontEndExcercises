import {Fragment} from "react";
import path from "path"
import fs from "fs/promises"

export default function ProductDetailPage(props){
    const {loadedProduct:product} = props
    // for fallback pages, when fallback is true
    // if (!product){
    //     return <p>Loading...</p>
    // }
    return <Fragment>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
    </Fragment>
}
async function getData(){
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data
}
export async function getStaticProps(context){
    const {params} = context;
    const productId = params.pid;
    const data = await getData()
    // console.log(data)
    const desireProduct = data.products.find(product => product.id === productId);
    if (!desireProduct){
        return { notFound: true}
    }
    return{
        props: {
            loadedProduct: desireProduct
        }
    }
}

export async function getStaticPaths(){
    const data = await getData();
    const ids = data.products.map( product => product.id);
    const pathsWithParams = ids.map( id => ({ params: { pid: id }}));

    return {
        paths: pathsWithParams,
        // fallback: true,
        fallback: "blocking"
    }
}
