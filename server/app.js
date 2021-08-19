const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

const middleware = (re, res, next) => {
  console.log("middleware working");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("Hello Sagar");
});

app.get("/about", (req, res) => {
  res.send("This is about");
});
app.get("/contact", (req, res) => {
  res.send("This is contact");
});
app.get("/signin", (req, res) => {
  res.send("This is signin");
});
app.get("/signup", (req, res) => {
  res.send("This is signup");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
