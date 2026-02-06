const express = require('express');

const app = express();
app.use(express.json());

const notes=[];

//server per data send karne ke liye
app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"Note created successfully",
        // data:req.body
    })
})

//server se data fetch karne ke liye
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"Notes fetched successfully",
        data:notes
    })
})

//delete karne ke liye
app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id;
    delete notes[id];
    res.status(200).json({
        message:"Note deleted successfully"
    })
})

//update karne ke liye
app.patch('/notes/:id',(req,res)=>{
    const id=req.params.id;
    const description=req.body.description;
    notes[id].description=description;
    res.status(200).json({
        message:"Note updated successfully",
    })
})

module.exports = app;