const mongoose=require("mongoose");
const { Schema } = mongoose;


    //schema code 
    const userSchema = new Schema({
        name: String,
        age: Number,
        city: String,
        gender: String 
      });
    
      //model code
      //class create kia hai 
      const User = mongoose.model('user', userSchema);

      module.exports=User;
