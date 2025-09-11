
const express=require('express');
const app=express();


const BookStore=[
    {id:1, name:'Harry Potter',author:'JK Rowling',price:500},
    {id:2, name:'Lord of the Rings',author:'Tolkien',price:600},
    {id:3, name:'happy prince',author:'Rajkumar',price:600},
    {id:4, name:'Doglapan',author:'ashaneer Kumar',price:600},
    {id:5, name:'Rich Dad',author:'Raj Kumar',price:600},
]

app.use(express.json());

app.get('/books',(req,res)=>{
    res.send(BookStore);
});


app.get('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const book=BookStore.find((info)=>info.id==id);
    res.send(book);
})

app.post('/books',(req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Book added successfully");
});

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
app.get('/users',(req,res)=>{
    res.send({"name":"Raj Kumar","age":20,"city":"Ranchi","status":300});
});

// app.get('/users',(req,res)=>{
//     res.send("This is home user page",{name:'Raj Kumar',age:20,city:'Ranchi',status:300});
// });

app.use(express.json());//why this is required. if we don't write this then we can't use req.body
app.post('/raj',(req,res)=>{
    console.log(req.body);
    res.send("This is post method");
});

app.use('/',(req,res)=>{
    res.send("This is home page");
});



app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});