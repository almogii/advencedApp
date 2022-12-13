import mongoose from "mongoose";
import express from "express";
import CartModel from "./models/cart.js";
import { Router } from "express";
import { dblClick } from "@testing-library/user-event/dist/click.js";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const router = Router();
export function mongoConnect() {
  try {
    mongoose.connect(
      "mongodb+srv://main:pass123123@cluster0.yuzftpm.mongodb.net/test"
    );
  } catch (error) {
    return `Error connecting to Mongo ${error}`;
  }
}

app.use(cors("*"));
app.post("/addCart", (item) => {
  let myData = new CartModel(item.body);
  myData.save();
});

app.listen(3001, function () {
  console.log("App listening at http://localhost:3001/");
  mongoConnect();
});
