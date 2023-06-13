import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Tablero } from "./Tablero.js";

export const Equipo = sequelize.define('Equipos', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    cantidad:{
        type:DataTypes.INTEGER
    },
    factorDemanda:{
        type:DataTypes.INTEGER
    },
    factorDemandaVA:{
        type:DataTypes.DECIMAL(7,2)
    }
    
})
Tablero.hasOne(Equipo,{
    foreignKey: 'tableroId',
    sourceKey: 'id'
})
Equipo.belongsTo(Tablero,{
    foreignKey: 'tableroId',
    targetId: 'id'
})