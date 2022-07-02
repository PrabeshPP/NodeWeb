const express=require("express");

const router=express.Router();

const {getLoginPage}=require("../controller/auth");

router.route("/login").get(getLoginPage);


module.exports=router;