const express=require('express');
const app=express();

const BookStore=[
    {id:1, name:'Harry Potter',author:'JK Rowling',price:500},
    {id:2, name:'Lord of the Rings',author:'Tolkien',price:600},
    {id:3, name:'happy prince',author:'Rajkumar',price:600},
    {id:4, name:'Doglapan',author:'neer Kumar',price:600},
    {id:6, name:'Don',author:'neer Kumar',price:600},
    {id:7, name:'humaran',author:'neer Kumar',price:600},
    {id:5, name:'Rich Dad',author:'Raj Kumar',price:600},
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/books',(req,res)=>{
    console.log(req.query);
    const Book=BookStore.filter((info)=>info.author==req.query.author);
    res.send(Book);
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

app.patch('/books',(req,res)=>{
    const book=BookStore.find((info)=>info.id==req.body.id);
    if(req.body.name){
        book.name=req.body.name;
    }
    if(req.body.author){
        book.author=req.body.author;
    }
    res.send("Book updated through patch successfully");
})

app.put('/books', (req, res) => {
   const id=parseInt(req.params.id);
  const book = BookStore.find((info)=>info.id ==id);
  book.name = req.body.name;
  book.author = req.body.author;
  res.send("Book updated through put successfully");
});


app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id);
    const index=BookStore.findIndex(info=>info.id===id);
    BookStore.splice(index,1);
    res.send("Book deleted successfully");
})


app.listen(4100,()=>{
    console.log('Server is running on port 4100');
})