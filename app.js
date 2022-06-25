const express=require('express');
const app=express();
const path=require("path");


app.use(express.urlencoded({extended:false}));
app.use(express.json());
const adminRouter=require("./routes/admin");


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRouter)



app.listen(3000,()=>{
    console.log("server running at port 3000");
});