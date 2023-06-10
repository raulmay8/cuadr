import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Concepto = sequelize.define('Conceptos', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    valor:{
        type:DataTypes.INTEGER
    }
})