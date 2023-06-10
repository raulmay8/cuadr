import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";

export const Encabezado = sequelize.define('Encabezados', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    fecha:{
        type:DataTypes.DATEONLY
    },
    alimentador:{
        type:DataTypes.STRING
    },
    servicioA:{
        type:DataTypes.STRING
    },
    cat:{
        type:DataTypes.STRING
    },
    montaje:{
        type:DataTypes.STRING
    },
    totalFase:{
        type:DataTypes.INTEGER
    },
    temperatura:{
        type:DataTypes.STRING
    }
})