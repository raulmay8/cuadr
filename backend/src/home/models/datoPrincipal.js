import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Cabecera } from "./Cabecera.js";
import { Tablero } from "./Tablero.js";

export const datoPrincipal = sequelize.define('datos', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    btu:{
        type:DataTypes.INTEGER
    },
    watts:{
        type:DataTypes.DECIMAL(7,2)
    },
    va:{
        type:DataTypes.DECIMAL(7,2)
    },
    hp:{
        type:DataTypes.INTEGER
    },
    vnominal:{
        type:DataTypes.DECIMAL(7,2)
    },
    volt:{
        type:DataTypes.DECIMAL(7,2)
    },
    amp:{
        type:DataTypes.DECIMAL(7,2)
    }
    
})
Cabecera.hasOne(datoPrincipal,{
    foreignKey: 'cabeceraId',
    sourceKey: 'id'
})
datoPrincipal.belongsTo(Cabecera,{
    foreignKey: 'cabeceraId',
    targetId: 'id'
})
Tablero.hasOne(datoPrincipal,{
    foreignKey: 'tableroId',
    sourceKey: 'id'
})
datoPrincipal.belongsTo(Tablero,{
    foreignKey: 'tableroId',
    targetId: 'id'
})