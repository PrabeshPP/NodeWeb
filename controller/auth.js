const getLoginPage=(req,res)=>{
    res.status(200);
    res.render("auth/login",{
        pageTitle:"User Login",
        header:"Login",
        postPath:"/login"
    });
}

module.exports={getLoginPage};

