import mongoose from "mongoose";

const product =new mongoose.Schema(
    {
         title:{ type: String, required: true },
         price:{ type: Number, required: true },
        amount:{ type: Number, required: true }

    });
const Product = mongoose.model('Product', product);

export default Product