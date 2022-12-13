import "./Product.css";
import React from "react";

const Product = (props) => {
  const MAX_ITEMS = 20;
  const MIN_ITEMS = 0;
  //catch clicked items and undate the clickd products into the array
  function catchClickedItems() {
    //creating a items var that holds the product amount string
    //and when onclick call the function goes and add 1 to amountOfClicks attribute
    let items = JSON.parse(localStorage.getItem("productAmount"));
    if (items == null) return;
    console.log("itemsArray", items);
    items[props.index].amountOfClicks = Math.min(
      MAX_ITEMS,
      Math.max(MIN_ITEMS, items[props.index].amountOfClicks + 1)
    );
    //saves the new local storege collection with the update data in it and parse it back to json file
    localStorage.setItem("productAmount", JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem("productAmount")));
  }
  return (
    <div className="product">
      <ul className="product-items">
        <div className="product-info">
          <p className="product-title">{props.product.title}</p>
          <p className="product-price">{props.product.price} $</p>
          <button
            onClick={catchClickedItems}
            className="product-add-btn button"
          >
            add item to cart
          </button>
        </div>
        <img
          alt="product-picture"
          className="product-img"
          src={props.product.images[0]}
        ></img>
      </ul>
    </div>
  );
};
export default Product;
