const express=require('express');
const app=express();//server instance created

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

app.get('/about',(req,res)=>{
    res.send('About Page');
})

//server starting
app.listen(3001,()=>{
    console.log('Server is running on port 3000');
});