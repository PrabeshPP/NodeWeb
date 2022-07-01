const express=require("express");
const path=require("path");
const app=express();

//Router

const libraryRouter=require("./routes/library");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));

app.use(libraryRouter);

app.listen(3000,()=>{
    console.log("Port Running at 3000")
})


