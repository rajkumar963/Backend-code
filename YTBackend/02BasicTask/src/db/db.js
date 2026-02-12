const mongoose=require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb+srv://scientistindia369:qKf8WXHfoWTT2B42@yogaapp.bvb6qkq.mongodb.net/helly')
    console.log("connected to database successfully");
}

module.exports=connectDB;