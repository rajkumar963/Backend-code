const express = require("express");
const app = express();
const Auth=require('./middleware/Auth');

app.use(express.json());

//CURD 

//DATABASE
const foods = [
    {id:1,name:"Pizza",price:500},
    {id:2,name:"Burger",price:200},
    {id:3,name:"Pasta",price:50},
    {id:4,name:"Noodles",price:100},
    {id:5,name:"French Fries",price:150},
    {id:6,name:"Ice Cream",price:120},
    {id:7,name:"Salad",price:80},
    {id:8,name:"Sandwich",price:60},
    {id:9,name:"Soup",price:70},
    {id:10,name:"Rice",price:90},
    {id:11,name:"Chicken",price:300},
    {id:12,name:"Bread",price:400},
    {id:13,name:"mutton",price:50},
    {id:14,name:"Egg",price:120},
    {id:15,name:"paneer tika",price:300},
];

const addtoCart =[];

app.get("/foods", (req, res) => {
    res.send(foods);
});

//middleware:--Auth
//app.use('/admin',Auth);

app.post('/admin',Auth,(req,res)=>{ 
    foods.push(req.body);
    res.send("Item added successfully"); 
})

app.delete('/admin/:id',Auth,(req,res)=>{

        const id=parseInt(req.params.id);
        const index=foods.findIndex(info=>info.id===id);
        if(index!==-1){
            foods.splice(index,1);
            res.send("Item deleted successfully");
        }else{
            res.status(404).send("Item not found");
        } 
})

app.patch('/admin',Auth,(req,res)=>{
    
        const id=parseInt(req.body.id);
        const fooddata=foods.find(info=>info.id===id);
        if(fooddata){
           if(req.body.name){
            fooddata.name=req.body.name;
           }
           if(req.body.price){
            fooddata.price=req.body.price;
           }
           res.send("Item updated successfully");
        }else{
            res.status(404).send("Item not found");
        }
})

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})