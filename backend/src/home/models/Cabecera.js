import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Tablero } from "./Tablero.js";

export const Cabecera = sequelize.define('Cabeceras', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    }
    
})
Tablero.hasOne(Cabecera,{
    foreignKey: 'tableroId',
    sourceKey: 'id'
})
Cabecera.belongsTo(Tablero,{
    foreignKey: 'tableroId',
    targetId: 'id'
})