const http=require('http')

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.end('Hello World\n from Node.js Server')
    if(req.url==='/'){
        res.end('Home Page\n from Node.js Server')
    }else if(req.url==='/about'){
        res.end('About Page\n from Node.js Server')
    }else{
        res.end('404 Not Found\n from Node.js Server')
    }
});

server.listen(4000,()=>{
    console.log('Server running at http://localhost:4000/')
})
