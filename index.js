import dotenv from "dotenv";
import express, { request } from 'express';
import { MongoClient } from 'mongodb';


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
   filter.rating=+filter.rating;
  }
  const filterproduct=await getProducts(filter);
  console.log(filterproduct);
  response.send(filterproduct);
  })

  // To create product  in mongodb //
  app.post("/products",async(request,response)=>{
    const data=request.body;
   const newproduct= await createProduct(data)
   console.log(newproduct);
   response.send(newproduct)
  })

// Getting  all products by id from mongodb //
app.get("/products/:id",async (request,response)=>{
  const {id}=request.params
  const product= await getProductsById(id);
  console.log(product)
product ? response.send(product)
:response.status(404).send({messgae:"page not found"}) 
});

//Delete method//
app.delete("/products/:id",async(request,response)=>{
  const{id}=request.params;
  console.log(request.params);
  const deleteproduct=await DeleteProductById(id)
  deleteproduct.deletedCount > 0 
  ? response.send(deleteproduct)
  : response.send({message:"page not foud"})
})

//edit method mongodb//
app.put("/products/:id",async(request,response)=>{
  const{id}=request.params;
  const data=request.body;
  console.log(data);
  const result=await updatedProductById(id,data);
  const product= await getProductsById(id);
  response.send(product)
})
app.listen(PORT,()=>console.log("App started",PORT));

async function updatedProductById(id,data) {
  return await client.db("bwd28").collection("products").updateOne({ id: id },{$set: data });
}

async function createProduct(data) {
  return await client.db("bwd28").collection("products").insertMany(data);
}

async function getProducts(filter) {
  return await client.db("bwd28").collection("products").find(filter).toArray({});
}

async function DeleteProductById(id) {
  return await client.db("bwd28").collection("products").deleteOne({ id: id });
}

async function getProductsById(id) {
  return await client.db("bwd28").collection("products").findOne({ id: id });
}

