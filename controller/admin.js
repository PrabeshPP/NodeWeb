const addProduct=(req,res)=>{
    res.status(200).render("admin/add-products");
}


module.exports={addProduct};