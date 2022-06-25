const express=require("express");

const router=express.Router();
const  {addProduct}=require("../controller/admin");


router.get("/add-products",addProduct);

module.exports=router;