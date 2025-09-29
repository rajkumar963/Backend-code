const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/users");
const validUser=require("./utils/ValidatorUsers");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const userAuth = require("./middleware/UserAuth");
require("dotenv").config();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");


app.use(express.json());
app.use(cookieParser());


// Get all users

app.use("/", authRouter);

app.use("/", userRouter);

// Start the app only after DB is ready
main()
  .then(() => {
    console.log("Database connection successful");
    app.listen(process.env.PORT, () => {
      console.log("Server running on http://localhost:" + process.env.PORT);
    });
  })
  .catch((err) => console.error("Database connection error:", err));
