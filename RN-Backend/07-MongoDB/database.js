//const url="mongodb+srv://developerraj:Developer@12345@coding.x3ajkzm.mongodb.net/"

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL  { @==%40(hexa decimal)}
const url = 'mongodb+srv://developerraj:Developer%4012345@coding.x3ajkzm.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'Developer';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
  //get data1
  //const findResult = collection.find({});
  //   const ans=await findResult.toArray();
  // console.log('Found documents =>', ans);

  //get data2
//   let balance=0;
//   for await (const doc of findResult) 
//   { 
//     console.log(doc);
//     balance++;
//   }


//one date insert
// const insertResult = await collection.insertOne({ name: 'Jyoti pal', age: 22,city:"Noida"}); 
// console.log('Inserted documents =>', insertResult);

//   return 'done.';
// }

//Many data insert
// const insertResult = await collection.insertMany([{ name: 'tushar pal', age: 22,city:"delhi"},{name: 'Abhi', age: 22,city:"Noida62"},{name: 'Rani', age: 23,city:"Bagodar"}]); 
// console.log('Inserted documents =>', insertResult);
//   return 'done.';


//filter  data
const filteredDocs = await collection.find({ name: 'Jyoti pal' }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);


}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());