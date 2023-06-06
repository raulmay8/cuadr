import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Tablero = sequelize.define('Tableros', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    capacidad:{
        type:DataTypes.STRING
    }
})