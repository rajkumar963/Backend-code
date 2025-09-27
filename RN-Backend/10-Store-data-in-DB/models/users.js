const mongoose=require("mongoose");
const { Schema } = mongoose;


    //schema code 
    const userSchema = new Schema({
        firstName: {
          type: String,
          required: true,
          minlength: 2,
          maxlength: 20
        },
        lastName: {
          type: String,
        },
        age:{
          type: Number, 
          min: 14,
          max: 100,
          required: true    
        },
        gender:{
          type: String,  
          // enum: ["male", "female", "others"]   
          validate(value) {
            if(!["male", "female", "others"].includes(value)){
              throw new Error("Invalid Gender")
            }
          }  
       },
        email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true,
          immutable: true
        },
        password: {
          type: String,        
        },
        photo:{
          type: String,
          default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
      },{timestamps: true});
    
      //model code
      //class create kia hai 
      const User = mongoose.model('user', userSchema);

      module.exports=User;
