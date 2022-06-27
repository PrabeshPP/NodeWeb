const express=require("express");

const router=express.Router();
const  {addProduct,postProduct}=require("../controller/admin");


router.get("/add-products/",addProduct);
router.post("/add",postProduct)

module.exports=router;