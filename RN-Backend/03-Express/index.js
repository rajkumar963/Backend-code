const express=require('express');

const app=express();


app.use('/about/:id',(req,res)=>{
    console.log(req.params);
    res.send([{name:'Raj Kumar',age:20,city:'Ranchi',status:300},{name:'Pammi Kumari',age:30,city:'New York',status:200}]);
});
app.use('/contact',(req,res)=>{
    res.send([{name:'Prince Kumar',age:23,city:'Ranchi',status:300},{name:'kajal Kumari',age:30,city:'New York',status:200}]);
});
app.use('/details',(req,res)=>{
    res.send("This is details page");
});

app.use('/',(req,res)=>{
    res.send("This is home page");
});
app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});