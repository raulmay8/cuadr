import app from "./app.js";
import { sequelize } from "./database/database.js";

import './home/models/Encabezado.js'
import './home/models/Valor.js'
import './home/models/Concepto.js'
import './home/models/Calculo.js'
import './home/models/Total.js'
import './home/models/Simbologia.js'

async function main(){
    try {
        await sequelize.sync({force:false})
        app.listen(4000)
        console.log('Usando el puerto ', 4000)
    } catch (error) {
        console.error('No se pudo conectar', error)
    }
}
main();