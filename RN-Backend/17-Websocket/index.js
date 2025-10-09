const express=require('express');
const app=express();
const {Server}=require('socket.io');
const http=require('http');

const server=http.createServer(app);
const io=new Server(server);

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

io.on('connection',(socket)=>{
    console.log("A user connected");
    socket.on('message',(data)=>{
        io.emit('message',data);
    });
    socket.on('disconnect',()=>{
        console.log("User disconnected");
    });
});



// const server=app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });
// const io=new Server(server);

// io.on('connection',(socket)=>{
//     console.log("A user connected");
//     socket.on('disconnect',()=>{
//         console.log("User disconnected");
//     });
// });