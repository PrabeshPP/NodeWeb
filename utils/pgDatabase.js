const Sequelize=require("sequelize");

const sequelize=new Sequelize('library','postgres','X1y2z3###',{
    dialect:"postgres",
    host:'localhost'
});


module.exports=sequelize;