import React, { createContext, useState } from "react";
import { storeProducts, detailProduct } from "../data";

export const ProductContext = createContext();

export function ContextDataFunc(props) {
  const [products, setProducts] = useState(storeProducts);
  const [productDetails, setProductDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [subtotal, setSubtotal] = useState();
  const [tax, setTax] = useState(0);
  const [alltotal, setAlltotal] = useState(0);

  function getProductId(id) {
    const product = products.find((item) => item.id === id);
    return product;
  }

  function showDetail(id) {       //  for Detail component
    
    const product = getProductId(id);
    setProductDetails(product);
  }

  function updateProduct(index, changedProduct) {    //  When product was added to the cart and what changed in this
   
    const allProducts = [...products];
    allProducts[index] = changedProduct;
    setProducts(allProducts);
  }

  function openModal(id) {        // when we click the cart button  it opens
    
    const product = getProductId(id);
    setModal(true);
    setModalProduct(product);
  }

  function closeModal() {
    setModal(false);
  }

  function getTotal() {
    let subTotal = 0;
    cart.forEach((item) => {
      subTotal = subTotal + item.total;
      return subTotal;
    });

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    return setSubtotal(subTotal), setTax(tax), setAlltotal(total);
  }

  function addToCart(id) {
    let temporaryProduct = [...products];
    const index = temporaryProduct.indexOf(getProductId(id));
    const product = temporaryProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    openModal(id);
    setCart([...cart, product]);
    updateProduct(index, product);
    getTotal();
  }

  function incrementProductInCart(id) {
    const temporaryCartProduct = [...cart];
    const selectedProductInCart = temporaryCartProduct.find((item) => {
      return item.id === id;
    });
    const index = temporaryCartProduct.indexOf(selectedProductInCart);
    const product = temporaryCartProduct[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart(temporaryCartProduct);

    getTotal();
  }

  function decrementProductInCart(id) {
    const temporaryCartProduct = [...cart];
    const selectedProductInCart = temporaryCartProduct.find((item) => {
      return item.id === id;
    });
    const index = temporaryCartProduct.indexOf(selectedProductInCart);
    const product = temporaryCartProduct[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeProductInCart(id);
    } else {
      product.total = product.count * product.price;
      setCart(temporaryCartProduct);
    }
    getTotal();
  }

  const removeProductInCart = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];

    const index = tempProducts.indexOf(getProductId(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => {    // Кроме удаленный id , бери все остальные ( удаленный не бери )      
      return item.id !== id;
    });

    setCart(tempCart);
    setProducts(tempProducts);
    getTotal();
  };

  function clearCart() {       // Удаляет все внутри корзины   
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      singleItem.inCart = false;
      singleItem.count = 0;
      singleItem.total = 0;
      products = [...products, singleItem];
    });

    setProducts(products);
  }

  function clearAllProductsInCart() {
    setCart([]);
    clearCart();
  }

  return (
    <ProductContext.Provider
      value={{
        products: products,
        productDetailss: productDetails,
        showDetail: showDetail,
        addToCart: addToCart,
        modal: modal,
        modalProduct: modalProduct,
        closeModal: closeModal,
        cart: cart,

        incrementProductInCart: incrementProductInCart,
        decrementProductInCart: decrementProductInCart,

        removeProductInCart: removeProductInCart,
        clearAllProductsInCart: clearAllProductsInCart,

        subtotal: subtotal,
        tax: tax,
        alltotal: alltotal,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
