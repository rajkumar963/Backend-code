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


app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})