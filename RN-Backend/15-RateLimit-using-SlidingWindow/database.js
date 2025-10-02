const mongoose = require("mongoose");
require("dotenv").config();   // load env before using process.env
const User = require("./models/users");

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECT_KEY);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
}

module.exports = main;
