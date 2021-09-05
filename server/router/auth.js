const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();

require("../db/conn");

router.get("/", (req, res) => {
  res.send("Hello World from server router js");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    res.status(422).json({ error: "Fill the fields properly" });
  }

  User.findOne({ email })
    .then((userExist) => {
      if (userExist) {
        res.status(409).json({ error: "User Alredy exists with this email" });
      }

      const user = new User({ name, email, phone, work, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ mesaage: "User Registered Successfully" });
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch();
});

module.exports = router;
