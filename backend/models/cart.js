import mongoose from "mongoose";

const newCart = new mongoose.Schema({
  cart: {
    user_name: { type: String, required: true },
    items_array: { type: Array, required: true },
    total_price: { type: Number, required: true },
  },
});
const CartModel = mongoose.model("CartModel", newCart);

export default CartModel;
