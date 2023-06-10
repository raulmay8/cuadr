import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Valor } from "./Valor.js";

export const Simbologia = sequelize.define('Simbologias', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})
Simbologia.belongsToMany(Valor, { through: 'SimbologiaValores' });
Valor.belongsToMany(Simbologia, { through: 'SimbologiaValores' });
