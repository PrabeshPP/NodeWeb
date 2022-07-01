const express=require("express");
const {getProducts,getDetailProduct}=require("../controller/shop");

const router=express.Router();

router.get("/",getProducts);

module.exports=router;