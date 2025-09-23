const mongoose=require("mongoose");
const { Schema } = mongoose;


    //schema code 
    const userSchema = new Schema({
        firstName: {
          type: String,
          required: true,
          trim: true,
          maxLength: 25
        },
        lastName: {
          type: String,
          required: true,
          trim: true,
          maxLength: 25
        },
        age:{
          type: Number,
          required: true
        },
        gender:{
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true,
          unique: true
        },
        password: {
          type: String,
          required: true
        },
        photo:{
          type: String
        }
      });
    
      //model code
      //class create kia hai 
      const User = mongoose.model('user', userSchema);

      module.exports=User;
