import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";

export default function CartItem(props) {
  return (
    <div className="cartItem__container">
      <span className="productList__title">Your &nbsp; Cart</span>
      <div className="cartItem__content">
        <div className="cartItem__content-products">PRODUCTS</div>
        <div className="cartItem__content-nameOfProduct">NAME OF PRODUCTS</div>
        <div className="cartItem__content-price">PRICE</div>
        <div className="cartItem__content-quantity">QUANTITY</div>
        <div className="cartItem__content-remove">REMOVE</div>
        <div className="cartItem__content-total">TOTAL</div>
      </div>
      {props.cart.map((product) => {
        return (
          <div className="cartItem__container-box" key={product.id}>
            <div className="cartItem__container-box-img">
              <img src={product.img} alt="product" />
            </div>
            <div className="cartItem__container-box-productName">
              {product.title}
            </div>
            <div className="cartItem__container-box-price">
              $ {product.price}
            </div>

            <div className="cartItem__container-box-quantity">
              <button
                className="cartItem__container-box-quantity-minus"
                onClick={() => {
                  props.decrementProductInCart(product.id);
                }}
              >
                -
              </button>
              <span className="cartItem__container-box-quantity-number">
                {product.count}
              </span>
              <button
                className="cartItem__container-box-quantity-plus"
                onClick={() => {
                  props.incrementProductInCart(product.id);
                }}
              >
                +
              </button>
            </div>
            <div className="cartItem__container-box-remove">
              <button
                onClick={() => {
                  props.removeProductInCart(product.id);
                }}
              >
                <RiShoppingBasketLine />
              </button>
            </div>
            <div className="cartItem__container-box-total">
              Item total:&nbsp; &nbsp; $ {product.total}{" "}
            </div>
          </div>
        );
      })}

      <div className="cartItem__container-purchase-box">
        <div className="cartItem__container-purchase-box-clearCart">
          <button onClick={props.clearAllProductsInCart}>CLEAR CART</button>
        </div>
        <div className="cartItem__container-purchase-box-a">
          <div className="cartItem__container-purchase-box-su">
            <div>SUBTOTAL : </div>
            <div>TAX : </div>
            <div>TOTAL : </div>
          </div>
          <div className="cartItem__container-purchase-box-cu">
            <div>$ {props.subtotal} </div>
            <div>$ {props.tax} </div>
            <div>$ {props.alltotal} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
