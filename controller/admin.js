

const getLoginPage=(req,res)=>{
    
    res.status(200);
    res.render("auth/login",{
        pageTitle:"Admin Login",
        header:"Admin",
        postPath:"/admin/login"
    });
}

const postLoginPage=(req,res)=>{
    res.redirect("/admin/dashboard");
}

const getAdminDashBoard=(req,res)=>{
    res.status(200);
    res.render("admin/dashboard",{
        pageTitle:"Admin Dashboard"
    })

}

module.exports={getLoginPage,postLoginPage,getAdminDashBoard};
