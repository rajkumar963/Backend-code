const express=require('express');
const app=express();

app.use(express.json());

//Route Handlers

//app.use(route,[routeHandler2,routeHandler3,routeHandler4],routeHandler5)
app.get('/user',[(req,res,next)=>{
    console.log(" first sher");
    //res.send("This is bubber sher");
    next();
    console.log("sixth")
},
(req,res,next)=>{
    console.log(" second sher");
    //res.send("This is second sher");
    next();
    console.log("fifth")
},])
app.use((req,res)=>{
    console.log(" third sher");
    res.send("This is third sher");
    console.log("fourth")
}
);

//Maintain log through middleware
app.use('/users',(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next
})

app.get('/users',(req,res)=>{
    res.send("This is get method");
})
app.post('/users',(req,res)=>{
    res.send("This is post method");
})
app.delete('/users',(req,res)=>{
     res.send("This is delete method");
})
app.put('/users',(req,res)=>{
     res.send("This is put method for update page");
});


app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});