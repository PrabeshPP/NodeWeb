const User=require("../model/user");
const bcrypt=require("bcrypt");

const getLoginPage=(req,res)=>{
    res.status(200);
    res.render("auth/login",{
        pageTitle:"User Login",
        header:"Login",
        postPath:"/login"
    });
}


const getSignUp=(req,res)=>{
    res.status(200);
    res.render("auth/signup",{
        pageTitle:"Sign Up",
    })
}

const postSignUp=async(req,res)=>{
    res.status(200);
    const email=req.body.email;
    const password=req.body.password;
    const foundUser=await User.findOne({
        where:{
            email:email
        }
    });

    if(foundUser){
        return res.redirect("/signup");
    }

    if(email.length===0 || password.length===0){
        return res.redirect("/signup");
    }

    const hashedPassword=   await bcrypt.hash(password,12);
    const user= User.create({
        email:email,
        password:hashedPassword
    });


    res.redirect("/login");
  
}

module.exports={getLoginPage,getSignUp,postSignUp};

