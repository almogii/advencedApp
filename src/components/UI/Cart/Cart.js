import React, { useState } from "react";
import Product from "../../Product/Product";
import Button from "react-bootstrap/esm/Button";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Tab } from "react-bootstrap";

const Cart = () => {
  const MAX_ITEMS = 20;
  const MIN_ITEMS = 0;
  let allItems = JSON.parse(localStorage.getItem("productAmount")); //save the data into arr
  let total_price = 0;
  let itemId;
  let btn;

  const navigate = useNavigate();
  let [itemsInCart, setItemsInCart] = useState(1);

  //when clicking on to cart check if the amount of user clicks on sirtain product is bigger then 0 if yes we print the relevent product to console
  if (localStorage.getItem("productAmount")) {
    itemsInCart = allItems.filter((item) => item.amountOfClicks > 0);
  }
  console.log("cart items", itemsInCart);

  const handleChangeOfAmount = async (item_id, NewamountOfClicks) => {
    console.log("handle add or sub", item_id, NewamountOfClicks);

    if (itemsInCart.length !== 0) {
      itemId = item_id;
      allItems[item_id].amountOfClicks = Math.min(
        MAX_ITEMS,
        Math.max(MIN_ITEMS, NewamountOfClicks)
      );
      itemsInCart = allItems.filter((item) => item.amountOfClicks > 0);
      setItemsInCart(itemsInCart);
      btn = allItems[item_id].amountOfClicks;
    }
    console.log("items afther adding", itemsInCart);
    localStorage.setItem("productAmount", JSON.stringify(allItems));
    console.log(JSON.parse(localStorage.getItem("productAmount")));
  };

  const handleSubmit = (e) => {
    localStorage.setItem("isShopping", false);
    localStorage.removeItem("productAmount");
  };

  return (
    <div>
      <h1>Items at your cart</h1>
      <div>
        {itemsInCart.length > 0 &&
          itemsInCart.map((p, index) => {
            total_price += p.price * p.amountOfClicks;
            return (
              <div>
                <p>{`product name : ${p.title}`}</p>
                <img className="product-img" src={p.images[0]}></img>
                <Button
                  className="button"
                  variant="light"
                  onClick={() =>
                    handleChangeOfAmount(p.id - 1, p.amountOfClicks - 1)
                  }
                  disabled={p.amountOfClicks === 0}
                >
                  {" "}
                  -<i className="fas fa-minus-circle"></i>
                </Button>{" "}
                <Button
                  className="button"
                  variant="light"
                  onClick={() =>
                    handleChangeOfAmount(p.id - 1, p.amountOfClicks + 1)
                  }
                  disabled={p.amountOfClicks === 20}
                >
                  +<i className="fas fa-plus-circle"></i>
                </Button>
                <p>{`Total price: ${p.amountOfClicks} X ${p.price}$ = ${
                  p.amountOfClicks * p.price
                }$`}</p>
              </div>
            );
          })}
      </div>

      <p>total cart price is:{total_price}$</p>
      <p>
        <button className="button" onClick={() => navigate("/")}>
          continue shopping
        </button>{" "}
        <button className="button" onSubmit={handleSubmit}>
          submit
        </button>
      </p>
    </div>
  );
};

export default Cart;
