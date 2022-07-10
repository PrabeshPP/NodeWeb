const AdminUser=require("../model/adminuser");
const bcrypt=require('bcrypt');



const getLoginPage=(req,res)=>{
    
    res.status(200);
    res.render("auth/login",{
        pageTitle:"Admin Login",
        header:"Admin",
        postPath:"/admin/login",
        signUpLink:"/admin/signup"
    });
}

const getAdminSignUpPage=(req,res)=>{
    res.status(200);
    res.render("auth/signup",{
        pageTitle:"Sign Up",
        postSignUp:"/admin/signup"
        
    })
}

const postAdminSignUpPage=async(req,res)=>{
    res.status(200);
    const email=req.body.email;
    const password=req.body.password;
    const foundUser=await AdminUser.findOne({
        where:{
            email:email
        }
    });

    if(foundUser){
        return res.redirect("/signup");
        res.flash("info","Email Already exist");
    }

    if(email.length===0 || password.length===0){
        res.flash("info","Email or Password cannot be empty")
        return res.redirect("/signup");

    }

    const hashedPassword=   await bcrypt.hash(password,12);
    const user= await AdminUser.create({
        email:email,
        password:hashedPassword
    });


    res.redirect("/admin/login");
}

const postLoginPage=async(req,res)=>{
    const email=req.body.email;
    
    const password=req.body.password;
    const foundUser=await AdminUser.findOne({
        where:{
            email:email
        }
    });

    if(!foundUser){
      return  res.redirect("/admin/login");
    }

    const passwordMatched=await bcrypt.compare(password,foundUser.password)

    if(passwordMatched){
        req.session.isLoggedIn=true;
        return res.redirect("/admin/dashboard");
    }else{
        return res.redirect("/admin/login")
    }

    
}

const getAdminDashBoard=(req,res)=>{
    res.status(200);
    res.render("admin/dashboard",{
        pageTitle:"Admin Dashboard"
    })

}

module.exports={getLoginPage,postLoginPage,getAdminDashBoard,getAdminSignUpPage,postAdminSignUpPage};
