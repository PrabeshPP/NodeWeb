//Passing Parameters separately(other dialects);

const Sequelize=require("sequelize");

const sequelize=new Sequelize("ecommerce","postgres","X1y2z3###",{
    host:'localhost',
    dialect:"postgres"
});

module.exports=sequelize;
