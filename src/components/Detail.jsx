import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

export default function Detail() {
  const { productDetailss, addToCart } = useContext(ProductContext);

  return (
    <div className="detail__container">
      <div className="detail__box-title"> {productDetailss.title} </div>
      <div className="detail__box">
        <div className="detail__box-img">
          <img src={`/${productDetailss.img}`} alt="product" />
        </div>
        <div className="detail__box-content">
          <div className="detail__box-content-title">
            Model:&nbsp;{productDetailss.title}
          </div>
          <div className="detail__box-content-company">
            MADE BY: &nbsp;{productDetailss.company}
          </div>
          <div className="detail__box-content-price">
            Price:&nbsp;{productDetailss.price}
          </div>
          <div className="detail__box-content-info">
            <span>Some Info About Product:</span> <br />
            {productDetailss.info}
          </div>

          <div className="detail__box-content-btns">
            <Link to="/products">
              <button className="detail__inCart">Back To Products</button>
            </Link>
            {productDetailss.inCart ? (
              <button className="detail__inCart">In Cart</button>
            ) : (
              <button
                onClick={() => addToCart(productDetailss.id)}
                className="detail__inCart"
                style={{ border: "2px solid #f7b731", color: "#f7b731" }}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
