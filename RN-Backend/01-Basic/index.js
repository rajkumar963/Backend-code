//const {test, greet}=require('./second');

const fs=require("fs");

console.log("Hello, World!");
    // greet();
    // test();

fs.readFile('./data.json','utf-8',(err,data)=>{
    if(err){
        console.error("Error reading file:", err);
        return;
    }
    console.log("File data:", data);
});