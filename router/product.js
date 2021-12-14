import express from "express";
import{
    createProduct, 
    getProductsById, 
    DeleteProductById, 
    updatedProductById,
    GetProducts,
  } from "../helper.js";

const router=express.Router();


router
.route("/").get(async(request,response)=>{
    console.log(request.query);
    const filter=request.query;
    console.log(filter);
    if(filter.rating){
     filter.rating=+filter.rating;
    }
    const filterproduct=await GetProducts(filter);
    console.log(filterproduct);
    response.send(filterproduct);
    })// Getting products from mongodb //
.post(async(request,response)=>{
        const data=request.body;
       const newproduct= await createProduct(data)
       console.log(newproduct);
       response.send(newproduct)
      }) // To create product  in mongodb //
router
  .route("/:id")
  .get(async (request,response)=>{
    const {id}=request.params
    const product= await getProductsById(id);
    console.log(product)
  product ? response.send(product)
  :response.status(404).send({messgae:"page not found"}) 
  }) // Getting  all products by id from mongodb //
  .delete(async(request,response)=>{
    const{id}=request.params;
    console.log(request.params);
    const deleteproduct=await DeleteProductById(id)
    deleteproduct.deletedCount > 0 
    ? response.send(deleteproduct)
    : response.send({message:"page not foud"})
  })//Delete method//
  .put(async(request,response)=>{
    const{id}=request.params;
    const data=request.body;
    console.log(data);
    const result=await updatedProductById(id,data);
    const product= await getProductsById(id);
    response.send(product)
  })//edit method mongodb//
  
export const productRouter=router;