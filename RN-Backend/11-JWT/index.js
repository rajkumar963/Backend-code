const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/users");
const validUser=require("./utils/ValidatorUsers");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(cookieParser());

// Get all users


// Create a user
app.post("/register", async (req, res) => {
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

app.post("/login", async (req, res) => {
  try {
    const people=await User.findOne({email:req.body.email});
    // if(!(req.body.email==people.email))
    //    throw new Error("Invalid credentials");

    const isMatch=await bcrypt.compare(req.body.password,people.password);
    if(!isMatch)
        throw new Error("Invalid credentials");

    //JWT token generation code can be added here
    const token = jwt.sign({_id:people._id, email:people.email}, "Rajkuma@123",{ expiresIn: '1min' });
    res.cookie("token", token);

    res.send("Login successful");
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).send("Error: " + error.message);
  }
});

app.get("/info", async (req, res) => {
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

app.get('/user', async (req, res) => {
  try {
    const payload = jwt.verify(req.cookies.token, "Rajkuma@123");
    console.log(payload);
    const result = await User.findById(payload._id);
    res.send("details:"+result);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

app.delete('/user/:id', async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.send("Deleted: " + result);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

app.patch('/user', async (req, res) => {
  try {
    const {_id, ...update} = req.body;
    await User.findByIdAndUpdate(_id, update,{"runValidators":true});
    res.send("Updated successfully"); 
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

// Start the app only after DB is ready
main()
  .then(() => {
    console.log("Database connection successful");
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.error("Database connection error:", err));
