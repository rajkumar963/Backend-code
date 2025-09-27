const bcrypt = require('bcrypt');

const password = 'Raj@3690';

async function Hashing() {
    //console.time("Hashing Password");
    const hashpass=await bcrypt.hash(password,10);
    console.log("Hashing Password:" + hashpass);
    //console.timeEnd("Hashing Password");

    const match=await bcrypt.compare(password,hashpass);
    console.log("Password Match:" + match);
}
Hashing();

// async function Hashing1() {
//     const salt=await bcrypt.genSalt(10);
//     const hashpass=await bcrypt.hash(password,salt);
//     console.log("Salt:" + salt);
//     console.log("Hashing Password:" + hashpass);
// }

// Hashing1();