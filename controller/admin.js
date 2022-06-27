const Product=require("../model/admin");


const addProduct=(req,res)=>{
    res.status(200).render("admin/add-products");
}


//Posting the product
const postProduct=async(req,res)=>{
    const title=req.body.title;
    const imageURL=req.body.imageurl;
    const price=req.body.price;
    const description=req.body.description;

    //it will add the data fetched from the ejs template to postgresSql database
   await Product.create({
        title:title,
        imageURL:imageURL,
        price:price,
        description:description
    });

    //it will redirect us to the add-products page ,after we have pushed data to database
    res.status(200).redirect("/admin/add-products");
    
}

//Retriving the data

const getProducts=async(req,res)=>{
    const products=await Product.findAll();
    res.status(200).render("admin/products",{
        title:products[1].title
    });
}


module.exports={addProduct,postProduct,getProducts};