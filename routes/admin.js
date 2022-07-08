const express=require("express");

const router=express.Router();

const {getLoginPage,postLoginPage,getAdminDashBoard, getAdminSignUpPage ,postAdminSignUpPage}=require("../controller/admin");


//admin login
router.route("/login").get(getLoginPage);
router.route("/login").post(postLoginPage);
router.route("/dashboard").get(getAdminDashBoard);
router.route("/signup").get(getAdminSignUpPage);
router.route("/signup").post(postAdminSignUpPage);


module.exports=router;