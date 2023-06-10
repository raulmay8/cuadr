import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Valor = sequelize.define('Valores', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    sistemaVal:{
        type:DataTypes.STRING
    },
    capacidadVal:{
        type:DataTypes.STRING
    },
    modVal:{
        type:DataTypes.STRING
    },
    vaVal:{
        type:DataTypes.INTEGER
    },
    hpVal:{
        type:DataTypes.STRING
    },
    voltVal:{
        type:DataTypes.INTEGER
    },
    amperVal:{
        type:DataTypes.INTEGER
    }
})