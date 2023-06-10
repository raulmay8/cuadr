import { DataTypes } from "sequelize";
import { sequelize } from "../../database/database.js";
import { Valor } from "./Valor.js";
import { Concepto } from "./Concepto.js";

export const Calculo = sequelize.define('Calculos', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    vaCalc:{
        type:DataTypes.INTEGER
    },
    fdCalc:{
        type:DataTypes.INTEGER
    },
    fdVaCalc:{
        type:DataTypes.INTEGER
    },
    voltCalc:{
        type:DataTypes.INTEGER
    },
    fCalc:{
        type:DataTypes.INTEGER
    },
    nCalc:{
        type:DataTypes.INTEGER
    },
    hiloCalc:{
        type:DataTypes.INTEGER
    },
    lCalc:{
        type:DataTypes.INTEGER
    },
    iCalc:{
        type:DataTypes.INTEGER
    },
    hiloFaseCalc:{
        type:DataTypes.INTEGER
    },
    condCalc:{
        type:DataTypes.INTEGER
    },
    capCalc:{
        type:DataTypes.INTEGER
    },
    ftCalc:{
        type:DataTypes.INTEGER
    },
    faCalc:{
        type:DataTypes.INTEGER
    },
    ampCorrCalc:{
        type:DataTypes.INTEGER
    },
    canalCalc:{
        type:DataTypes.INTEGER
    },
    condTierraCalc:{
        type:DataTypes.INTEGER
    },
    fctCalc:{
        type:DataTypes.INTEGER
    },
    ctCalc:{
        type:DataTypes.INTEGER
    },
    faseACalc:{
        type:DataTypes.INTEGER
    },
    faseBCalc:{
        type:DataTypes.INTEGER
    },
    faseCCalc:{
        type:DataTypes.INTEGER
    },
    intACalc:{
        type:DataTypes.INTEGER
    },
    intBCalc:{
        type:DataTypes.STRING
    },
    intCCalc:{
        type:DataTypes.INTEGER
    },
    capacidadCalc:{
        type:DataTypes.INTEGER
    }
})
Calculo.hasOne(Valor,{
    foreignKey: 'calculoValorId',
    sourceKey: 'id'
})
Valor.belongsTo(Calculo,{
    foreignKey: 'calculoValorId',
    targetId: 'id'
})
Calculo.hasOne(Concepto,{
    foreignKey: 'calculoConceptoId',
    sourceKey: 'id'
})
Concepto.belongsTo(Concepto,{
    foreignKey: 'calculoConceptoId',
    targetId: 'id'
})