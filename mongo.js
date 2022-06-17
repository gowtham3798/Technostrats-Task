import {MongoClient} from "mongodb";

const mongo = {
     db:null,
     Employees:null,

     async connect(){
// const client = new MongoClient(process.env.MONGODB_URL);
const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
// console.log(`MongoDB connected- ${MONGODB_URL}`)

this.db = client.db('Employee-data');
// console.log(`MongoDB Selected- ${MONGODB_NAME}`)

this.batch = this.db.collection('employees');

console.log('Collections Initialized')

     }
}

export default mongo;
