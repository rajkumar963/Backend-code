const jwt = require("jsonwebtoken");
const User = require("../models/users");
   

const userAuth =async (req,res,next)=>{
    try {
        const {token}=req.cookies
        if(!token){
          throw new Error("No token found");
        }
        const payload = jwt.verify(token, "Rajkuma@123");
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
        next();
    } catch (error) {
        res.status(400).send("Error: " + error.message);
    }
}

module.exports=userAuth;