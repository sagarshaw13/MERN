const express = require("express");
const app = express();

app.get("/", (req, res) => {
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

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
