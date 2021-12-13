import express from 'express';
import { MongoClient } from 'mongodb';


const app=express();
const PORT=7000;

//middleware to convert data into json//
app.use(express.json()) //inbuild//

 const MONGO_URL="mongodb://localhost";

//Mongo db coonnection//
async function createconnection(){
const client=new MongoClient(MONGO_URL);
 await client.connect();
console.log("connected")
return client;
   }
  const client= await createconnection();

//node js server//
app.get("/",(request,response)=>{
    response.send("hello world 😍")
});
 

// Getting products from mongodb //
app.get("/products",async(request,response)=>{
  console.log(request.query);
  const filter=request.query;
  console.log(filter);
  if(filter.rating){
filter.rating=parseInt(filter.rating);
}
  const filterproduct=await client.db("bwd28").collection("products").find(filter).toArray();
  console.log(filterproduct);
  response.send(filterproduct);
  })

  // To create product  in mongodb //
  app.post("/products",async(request,response)=>{
    const data=request.body;
   const newproduct= await client.db("bwd28").collection("products").insertMany({data})
   console.log(newproduct);
   response.send(newproduct)
  })

// Getting  all products by id from mongodb //
app.get("/products/:id",async (request,response)=>{
  const {id}=request.params
  const product= await client.db("bwd28").collection("products").findOne({id:id})
  console.log(product);
product ? response.send(product)
:response.status(404).send({messgae:"page not found"}) 
});

app.listen(PORT,()=>console.log("App started",PORT));

