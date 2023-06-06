import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Tablero } from "./Tablero.js";

export const TipoTablero = sequelize.define("TipoTableros", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})
TipoTablero.hasMany(Tablero,{
    foreignKey: 'tipoTableroId',
    sourceKey: 'id'
})
Tablero.belongsTo(TipoTablero,{
    foreignKey: 'tipoTableroId',
    targetId: 'id'
})