const validator=require("validator");

function validUser(body) {
    const mandetory=["firstName", "email","age"]

    const IsAllowed=mandetory.every((k)=>Object.keys(body).includes(k));
    if(!IsAllowed)
        throw new Error("Missing mandetory fields");

    //Email validation
    if(!validator.isEmail(body.email))
        throw new Error("Invalid Email");


    //Password validation
    if(!validator.isStrongPassword(body.password))
        throw new Error("Weak Password");
  
    //Firstname validation
    if(!body.firstName.length>=3 && !body.firstName.length<=20)
        throw new Error("Name must be between 3 to 20 characters");
    
}

module.exports=validUser;