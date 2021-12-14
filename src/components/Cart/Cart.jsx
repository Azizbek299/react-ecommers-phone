import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../ProductContext";
import EmptyCart from "./EmptyCart";

export default function Cart(props) {
  const {
    cart,
    incrementProductInCart,
    decrementProductInCart,
    removeProductInCart,
    clearAllProductsInCart,
    subtotal,
    tax,
    alltotal,
  } = useContext(ProductContext);

  return (
    <div>
      {cart.length > 0 ? <CartItem
        cart={cart}
        incrementProductInCart={incrementProductInCart}
        decrementProductInCart={decrementProductInCart}
        removeProductInCart={removeProductInCart}
        clearAllProductsInCart={clearAllProductsInCart}
        subtotal={subtotal}
        tax={tax}
        alltotal={alltotal}
      />
    :<EmptyCart/>
    }
      
    </div>
  );
}
