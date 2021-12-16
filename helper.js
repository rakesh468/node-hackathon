import { ObjectId } from "mongodb";
import { client } from "./index.js";

 async function updatedProductById(id, data) {
  return await client.db("bwd28").collection("products").updateOne({ id:ObjectId(id)}, { $set: data });
}
 async function createProduct(data) {
  return await client.db("bwd28").collection("products").insertMany(data);
}
 async function GetProducts(filter) {
  return await client.db("bwd28").collection("products").find(filter).toArray();
}
 async function DeleteProductById(id) {
  return await client.db("bwd28").collection("products").deleteOne({ id: ObjectId(id) });
}
 async function getProductsById(id) {
  return await client.db("bwd28").collection("products").findOne({ _id: ObjectId(id) });
}
export{
  createProduct, 
  getProductsById, 
  DeleteProductById, 
  updatedProductById,
  GetProducts,
};
