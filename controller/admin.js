const Product=require("../model/admin");





const addProduct=(req,res)=>{
    res.status(200).render("admin/add-products");
}

const postProduct=async(req,res)=>{
    const title=req.body.title;
    const imageURL=req.body.imageurl;
    const price=req.body.price;
    const description=req.body.description;

    const result=await new Product()
    

}


module.exports={addProduct,postProduct};