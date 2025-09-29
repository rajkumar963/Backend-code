const express = require("express");
const User = require("../models/users");
const jwt = require('jsonwebtoken');
const userAuth = require("../middleware/UserAuth");


const userRouter = express.Router();


userRouter.get("/info", async (req, res) => {
  try {

    //check valied user or not
    const payload = jwt.verify(req.cookies.token, "Rajkuma@123");
    console.log(payload);
    const users = await User.find();
   
    res.send(users);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

userRouter.get('/user', userAuth, async (req, res) => {
  try {
     res.send(req.result);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

userRouter.delete('/user/:id', userAuth, async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.send("Deleted: " + result);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

userRouter.patch('/user', userAuth, async (req, res) => {
  try {
    const {_id, ...update} = req.body;
    await User.findByIdAndUpdate(_id, update,{"runValidators":true});
    res.send("Updated successfully"); 
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});


module.exports = userRouter;