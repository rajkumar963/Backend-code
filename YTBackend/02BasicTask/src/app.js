const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());


//server per data send karne ke liye
app.post('/notes',async(req,res)=>{
    const data=req.body;
   await noteModel.create({
        title:data.title,
        description:data.description
    });
    res.status(201).json({
        message:"Note created successfully",
       
    })
})

//server se data fetch karne ke liye
app.get('/notes',async(req,res)=>{
    const notes=await noteModel.find();//find()->[{},{}] or [], findOne()->{} or null
    res.status(200).json({
        message:"Notes fetched successfully",
        data:notes
    })
})

//delete karne ke liye
app.delete('/notes/:id',async(req,res)=>{
    const id=req.params.id;
    await noteModel.findOneAndDelete({_id:id});
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

//update karne ke liye
app.patch('/notes/:id',async(req,res)=>{
    const id=req.params.id;
    const description=req.body.description;
    await noteModel.findOneAndUpdate({_id:id},{description:description});
    res.status(200).json({
        message:"Note updated successfully",
    })
})

module.exports = app;