const mongoose=require("mongoose");
//const { Schema } = mongoose;

const User = require("./models/users");

async function main() {
    await mongoose.connect('mongodb+srv://developerraj:Developer%4012345@coding.x3ajkzm.mongodb.net/Instagram');

    //schema code 
    // const userSchema = new Schema({
    //     name: String,
    //     age: Number,
    //     city: String,
    //     gender: String 
    //   });
    
      //model code
      //class create kia hai 
      //const User = mongoose.model('user', userSchema);

      //insert data or document create or object create
    //   const user1 = new User({ name: 'Raj Kumar', age: 22, city: 'Noida', gender: 'male' });
    //   await user1.save();

    //   await User.create({ name: 'Pammi Kumari', age: 22, city: 'Ranchi', gender: 'Female' });

    //   await User.insertMany([
    //     { name: 'Raju Kumar', age: 23, city: 'Bagodar', gender: 'male' },
    //     { name: 'Stuti Kumari', age: 20, city: 'Gurugao', gender: 'Female' }
    //   ]);


      //find data or document read or object read
    //   const allUsers = await User.find({});
    //   console.log(allUsers);


      //find perticular document or object read
    //   const user = await User.find({ name: 'Raj Kumar' });
    //   console.log(user);

}
 
module.exports=main;