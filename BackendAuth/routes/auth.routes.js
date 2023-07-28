const express = require("express");
const { AuthModel } = require("../model/auth.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 3;

//Registration
authRouter.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      // Store hash in your password DB.
      const auth = new AuthModel({ email, password: hash });
      await auth.save();
      res
        .status(200)
        .send({ msg: "User data has been successfully reistered" });
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const auth = await AuthModel.findOne({ email:email });
    // console.log(auth);
    
    if(auth){

        bcrypt.compare(password, auth.password, async (err, result) => {
          // result == true
          if (result) {
            res.status(200).send({msg: "Login Successfull",token: jwt.sign({ name: "ankit" }, "realme"),});
          } else {
            res.status(400).send({ msg: "Wrong credentials" });
          }
        });
    }
  } catch (error) {
    res.status(400).send({ msg: "Error occured" });
  }
});

authRouter.get("/details", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    if (token) {
      const decoded = jwt.verify(token, "realme");
      res.status(200).send({ msg: "Login successfull" });
    } else {
      res.status(200).send({ msg: "Wrong credential" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = {
  authRouter,
};
