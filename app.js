const express=require("express");
const path=require("path");
const app=express();


require('dotenv').config({path:path.join(__dirname,"config",".env")});
//Router
const PORT=process.env.PORT;
const libraryRouter=require("./routes/library");
const authRouter=require("./routes/auth");
const adminRouter=require("./routes/admin");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(__dirname,"public")));

app.use(libraryRouter);
app.use(authRouter);
app.use('/admin',adminRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})


