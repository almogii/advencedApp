import mongoose from "mongoose";
import express from "express";
import CartModel from "./models/cart.js";
import { Router } from "express";
import { dblClick } from "@testing-library/user-event/dist/click.js";
import axios from "axios";
import cors from "cors";

const app = express();
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
app.post("/addCart", (req, res) => {
  console.log("something");
  let myData = new CartModel(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
//app.use(express.json());
/*var data = "";

var config = {
  method: "post",
  url: "http://localhost:3001/addCart",
  headers: {},
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });*/
/*
 */
/*
app.get("/addCart", (req, res) => {
  console.log("something");
  let myData = new CartModel(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});*/
//app.request()

app.listen(3001, function () {
  console.log("App listening at http://localhost:3001/");
  mongoConnect();
});
