const getLoginPage=(req,res)=>{
    res.status(200);
    res.render("auth/login",{
        pageTitle:"User Login",
        header:"User",
        postPath:"/login"
    });
}

module.exports={getLoginPage};

