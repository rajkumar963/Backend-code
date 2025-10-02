const jwt = require("jsonwebtoken");
const User = require("../models/users");
const redisClient = require("../config/redis");
require("dotenv").config();

   

const userAuth =async (req,res,next)=>{
    try {
        const {token}=req.cookies
        if(!token){
          throw new Error("No token found");
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // console.log(payload);

        const {_id}=payload;
        if(!_id){
           throw new Error("Id is not missing");
        }

        const result = await User.findById(_id);
        if(!result){
           throw new Error("No user found");
        }
        req.result=result;
        //check token is blocked or not

       const IsBlocked=await redisClient.exists(`token:${token}`)
       if(IsBlocked){
           throw new Error("Invalid token - User logged out");
       }

        next();

    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
}

module.exports=userAuth;