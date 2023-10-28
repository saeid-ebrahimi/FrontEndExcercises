import React from "react";
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_PRODUCTS = [
    {id:'p1', price: 6, title: "Alchemist Book", description: "An bestseller novel from Paulo"},
    {id:'p2', price: 7, title: "Rose Diary Book", description: "An Bestseller Novel from Rosenberg"},
    {id:'p3', price: 5, title: "48 Laws of Power", description: "An Bestseller Book in Personal Growth"}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {Dummy_PRODUCTS.map(product => (
              <ProductItem
                  key={product.id}
                  id = {product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
              />
          ))}

      </ul>
    </section>
  );
};

export default Products;
