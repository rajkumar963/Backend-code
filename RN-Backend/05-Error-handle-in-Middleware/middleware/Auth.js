//Middleware:- aAuthentication
const Auth=(req,res,next)=>{
    //add items in food menu
   //Authentication
   //Authorization (dummy code)
   const token="1234";
   const Acess=token==="1234"?1:0;
    if(Acess){
        next();
    }else{
        res.status(403).send("Authentication required to add items in food menu");
    }
}

module.exports=Auth;
