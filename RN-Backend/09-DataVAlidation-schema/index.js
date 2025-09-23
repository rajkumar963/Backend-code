const express = require("express");
const app = express();
const main = require("./database");
const User = require("./models/users");

app.use(express.json());


//CRUD Operations
app.get("/info", async(req,res)=>{
    const ans=await User.find({});
    res.send(ans);
})


app.post('/info',async(req,res)=>{
    // const user=new User(req.body);
    // await user.save();
  try{
    await User.create(req.body);
    res.send("Item added successfully");
  }catch(error){
    res.status(400).send(error.message);
  }
})

app.delete('/info',async(req,res)=>{
    await User.deleteOne({name:"Raj Kumar"})
    res.send("Item deleted successfully");
})


app.put('/info',async(req,res)=>{
    await User.updateOne({name:"Raju Kumar"},{$set:{name:"Raj Kumar Saw"}});
    res.send("Item updated successfully");
})

 main()
 .then(async()=>{
    console.log("Database connected");
    app.listen(4000, () => {
        console.log("Server is running on port 4000");
    })

    // const user = await User.find({ name: 'Raj Kumar' });
    //  console.log(user);

  })
 .catch((error)=>console.log(error));

