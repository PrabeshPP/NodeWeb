const getLibraryBooks=(req,res)=>{
    res.status(200).render("index",{
        pageTitle:"home"
    });
}


module.exports={getLibraryBooks};