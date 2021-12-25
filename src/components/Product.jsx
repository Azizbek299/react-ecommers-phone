import React, {useContext} from "react";
import { BsCart } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

export default function Product(props) {
  const {showDetail, addToCart} = useContext(ProductContext)

 
  return (
    <div className="product__box">
      <div className="product__box-img kerakli">
        <Link to={`/detail/${props.product.id}`}>       // Бир пайтни узида Link оркали хам id ни жунатяпти хамда пастда Onclick оркали id ни SetDetail киляпти
          <img onClick={() => showDetail(props.product.id)} className="kerakli__img" src={props.product.img} alt="product" />
        </Link>
        {props.product.inCart ? (
          <button className="in__cart">In Cart</button>
        ) : (
          <button className="cart__img" onClick={() => addToCart(props.product.id)}>
            <BsCart />
          </button>
        )}
      </div>
      <div className="product__content">
        <div className="product__content-title"> {props.product.title} </div>
        <div className="product__content-price">$ {props.product.price} </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
