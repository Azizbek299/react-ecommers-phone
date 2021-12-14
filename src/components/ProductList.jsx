import React, { useContext } from "react";
import Modal from "./Modal";
import Product from "./Product";


import { ProductContext } from "./ProductContext";

export default function ProductList(props) {
  const { products} = useContext(ProductContext);
 


  return (
    
    <div className="productList__container">

      <Modal/>

      
      <span className="productList__title">Our</span>
      <span className="productList__title">Products</span>

      <div className="product__container">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}
