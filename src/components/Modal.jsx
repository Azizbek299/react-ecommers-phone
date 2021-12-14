import React, {useContext} from "react";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";


export default function Modal(props) {
  const { modalProduct, modal, closeModal } = useContext(ProductContext);

 

  return (
    <>

      {modal ? (
        <div className="modal__main__container">
          <div className="modal__container">
            <div className="modal__box">
              <div className="modal__box-title">Item Added To Cart</div>
              <div className="modal__box-img">
                <img src={modalProduct.img} alt="product" />
              </div>
              <div className="modal__box-product-name">
                {modalProduct.title}
              </div>
              <div className="modal__box-price">
                Price:&nbsp; $ {modalProduct.price}
              </div>
              <div className="modal__box-continue-btn">
                <button onClick={closeModal}>Continue Shopping</button>
              </div>

              <div className="modal__box-go-to-cart-btn">
                <Link to="/cart">
                  <button onClick={closeModal}>Go To Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}


