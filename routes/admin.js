const express=require("express");

const router=express.Router();
const  {addProduct,postProduct,getProducts, getDetailProduct}=require("../controller/admin");


router.get("/add-products/",addProduct);
router.post("/add",postProduct);
router.get("/products",getProducts);
router.get("/products/:id",getDetailProduct);

module.exports=router;