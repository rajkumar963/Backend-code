const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const validUser=require("../utils/ValidatorUsers");

const authRouter = express.Router();

// Create a user
authRouter.post("/register", async (req, res) => {
  try {
     // Validate user data before saving

      validUser(req.body);

      // Hash the password before saving
      req.body.password = await bcrypt.hash(req.body.password, 10);

    const saved = await User.create(req.body);
    console.log("Saved:", saved);
    res.send("User registered successfully");
  } catch (error) {
    console.error("Create error:", error);
    res.status(400).send("Error: " + error.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const people=await User.findOne({email:req.body.email});
    // if(!(req.body.email==people.email))
    //    throw new Error("Invalid credentials");

    const isMatch=await people.verifyPassword( req.body.password);
    if(!isMatch)
        throw new Error("Invalid credentials");

    //JWT token generation code can be added here
    const token = people.getJWT();
    res.cookie("token", token);

    res.send("Login successful");
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).send("Error: " + error.message);
  }
});
authRouter.post("/logout", async (req, res) => {
  try {
    res.cookie("token", null, { expires: new Date(Date.now() ) });
    res.send("Logout successful");
  } catch (error) {
    console.error("Logout error:", error);
    res.status(400).send("Error: " + error.message);
  }
});


module.exports = authRouter;