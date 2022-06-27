const express=require("express");

const router=express.Router();
const  {addProduct,postProduct,getProducts}=require("../controller/admin");


router.get("/add-products/",addProduct);
router.post("/add",postProduct);
router.get("/products",getProducts);

module.exports=router;