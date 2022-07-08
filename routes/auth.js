const express=require("express");

const router=express.Router();

const {getLoginPage,getSignUp, postSignUp,pos}=require("../controller/auth");

router.route("/login").get(getLoginPage);
router.route("/login").post()
router.route("/signup").get(getSignUp);
router.route("/signup").post(postSignUp);


module.exports=router;