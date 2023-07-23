import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="https://freepngimg.com/thumb/arrow/1-2-arrow-png-image.png"
              alt="arrow"
              className="arrow-icon"
            />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img
              src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png"
              alt="cart"
            />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <h3 className="total-items">
            Total quantity :{" "}
            <span className="total-items-count">{totalItem} </span>{" "}
          </h3>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="https://freepngimg.com/thumb/arrow/1-2-arrow-png-image.png"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png"
            alt="cart"
          />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <h3 className="total-items">
          Total quantity :{" "}
          <span className="total-items-count">{totalItem} </span>
        </h3>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}$</span>
          </h3>

          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
