import dotenv from "dotenv";
import express, { request } from 'express';
import { MongoClient } from 'mongodb';
import { productRouter } from "./router/product.js";


dotenv.config();
console.log(process.env)

const app=express();
const PORT=7000;

//middleware to convert data into json//
app.use(express.json()) //inbuild//

 const MONGO_URL=process.env.MONGO_URL
 

//Mongo db coonnection//
async function createconnection(){
const client=new MongoClient(MONGO_URL);
 await client.connect();
console.log("connected")
return client;
   }
  export const client= await createconnection();

//node js server//
app.get("/",(request,response)=>{
    response.send("hello world 😍")
});
app.use("/products",productRouter)
 

app.listen(PORT,()=>console.log("App started",PORT));


