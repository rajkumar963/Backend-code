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
const commentRouter = require("./routes/comments");
const redisClient = require("./config/redis");


app.use(express.json());
app.use(cookieParser());



// Get all users

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/comments", commentRouter);

const InitializeConnections = async () => {
  try {
    // await redisClient.connect();
    // console.log("Connected to Redis");

    // await main();
    // console.log("Connected to MongoDB");

    await Promise.all([redisClient.connect(), main()]);
    console.log("Connected to Redis and MongoDB");

    app.listen(process.env.PORT, () => {
      console.log("Server running on http://localhost:" + process.env.PORT);
    });

  } catch (error) {
    console.error("Redis connection error:", error);
  }
}


InitializeConnections();