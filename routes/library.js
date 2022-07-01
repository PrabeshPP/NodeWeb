const express=require("express");
const router=express.Router();

const {getLibraryBooks}=require("../controller/library");


router.route("/").get(getLibraryBooks);

module.exports=router;
