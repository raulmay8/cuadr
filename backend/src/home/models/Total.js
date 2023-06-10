import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Encabezado } from "./Encabezado.js";
import { Calculo } from "./Calculo.js";

export const Total = sequelize.define('Totales', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    conceptoTotal:{
        type:DataTypes.INTEGER
    },
    vaTotal:{
        type:DataTypes.INTEGER
    },
    fdTotal:{
        type:DataTypes.INTEGER
    },
    fdVaTotal:{
        type:DataTypes.INTEGER
    },
    voltTotal:{
        type:DataTypes.INTEGER
    },
    fTotal:{
        type:DataTypes.INTEGER
    },
    nTotal:{
        type:DataTypes.INTEGER
    },
    hiloTotal:{
        type:DataTypes.INTEGER
    },
    lTotal:{
        type:DataTypes.INTEGER
    },
    iTotal:{
        type:DataTypes.INTEGER
    },
    hiloFaseTotal:{
        type:DataTypes.INTEGER
    },
    condTotal:{
        type:DataTypes.INTEGER
    },
    capTotal:{
        type:DataTypes.INTEGER
    },
    ftTotal:{
        type:DataTypes.INTEGER
    },
    faTotal:{
        type:DataTypes.INTEGER
    },
    ampCorrTotal:{
        type:DataTypes.INTEGER
    },
    canalTotal:{
        type:DataTypes.INTEGER
    },
    condTierraTotal:{
        type:DataTypes.INTEGER
    },
    fctTotal:{
        type:DataTypes.INTEGER
    },
    ctTotal:{
        type:DataTypes.INTEGER
    },
    faseATotal:{
        type:DataTypes.INTEGER
    },
    faseBTotal:{
        type:DataTypes.INTEGER
    },
    faseCTotal:{
        type:DataTypes.INTEGER
    },
    intATotal:{
        type:DataTypes.INTEGER
    },
    intBTotal:{
        type:DataTypes.STRING
    },
    intCTotal:{
        type:DataTypes.INTEGER
    },
    capacidadTotal:{
        type:DataTypes.INTEGER
    }
})
Total.hasOne(Encabezado,{
    foreignKey: 'totalEncabezadoId',
    sourceKey: 'id'
})
Encabezado.belongsTo(Total,{
    foreignKey: 'totalEncabezadoId',
    targetId: 'id'
})
Total.hasMany(Calculo,{
    foreignKey: 'totalCalculoId',
    sourceKey: 'id'
})
Calculo.belongsTo(Total,{
    foreignKey: 'totalCalculoId',
    targetId: 'id'
})