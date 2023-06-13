import app from "./app.js";
import { sequelize } from "./database/database.js";

import './home/models/Tablero.js'
import './home/models/Cabecera.js'
import './home/models/Equipo.js'
import './home/models/datoPrincipal.js'

async function main(){
    try {
        /* await sequelize.drop() */
        await sequelize.sync({force:false})
        app.listen(4000)
        console.log('Usando el puerto ', 4000)
    } catch (error) {
        console.error('No se pudo conectar', error)
    }
}
main(); 