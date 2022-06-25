const express=require('express');
const app=express();


app.set("view engine","ejs");
app.set("views","views");
console.log("hi");

app.use("/",(req,res)=>{
    console.log(req);
    res.status(200).render("index");
});

app.listen(3000,()=>{
    console.log("server running at port 3000");
});