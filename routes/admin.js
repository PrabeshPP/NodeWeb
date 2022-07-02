const express=require("express");

const router=express.Router();

const {getLoginPage,postLoginPage,getAdminDashBoard}=require("../controller/admin");


//admin login
router.route("/login").get(getLoginPage);
router.route("/login").post(postLoginPage);
router.route("/dashboard").get(getAdminDashBoard);


module.exports=router;