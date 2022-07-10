const express=require("express");
const path=require("path");
const app=express();
const session=require("express-session");
const pg=require("pg");
const PostgreStore=require("connect-pg-simple")(session);


const sequelize=require("./utils/pgDatabase");


require('dotenv').config({path:path.join(__dirname,"config",".env")});

const oneDay=60*60*24*1000;


// 


const pgPool=new pg.Pool({
    user:"postgres",
    password:"X1y2z3###",
    database:"library",
    host:"localhost"
});


//

const store= new PostgreStore({
    pool:pgPool,
    tableName:"user_sessions",
    createTableIfMissing:true,
})

//Router
const PORT=process.env.PORT;
const libraryRouter=require("./routes/library");
const authRouter=require("./routes/auth");
const adminRouter=require("./routes/admin");
const cookieParser = require("cookie-parser");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));



//
app.use(session({
    store:store,
    secret:"haminepalihamronepala",
    saveUninitialized:false,
    cookie:{maxAge:oneDay},
    resave:false
}));

app.use(cookieParser());


app.use(libraryRouter);
app.use("/users",authRouter);
app.use('/admin',adminRouter);

sequelize.sync().then((result)=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
    
})



