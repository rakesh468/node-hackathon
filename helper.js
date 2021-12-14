import { client } from "./index.js";

 async function updatedProductById(id, data) {
  return await client.db("bwd28").collection("products").updateOne({ id: id }, { $set: data });
}
 async function createProduct(data) {
  return await client.db("bwd28").collection("products").insertMany(data);
}
 async function GetProducts(filter) {
  return await client.db("bwd28").collection("products").find(filter).toArray();
}
 async function DeleteProductById(id) {
  return await client.db("bwd28").collection("products").deleteOne({ id: id });
}
 async function getProductsById(id) {
  return await client.db("bwd28").collection("products").findOne({ id: id });
}
export{
  createProduct, 
  getProductsById, 
  DeleteProductById, 
  updatedProductById,
  GetProducts,
};
