const {DataTypes}=require("sequelize");
const sequelize=require("../utils/postgresSQLDB");


//Models are the essence of the Sequelize.


const Product=sequelize.define("product",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    imageURL:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    }

});

//We can also create model using ModelName.init() method;


module.exports=Product;
