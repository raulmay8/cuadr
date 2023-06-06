import app from "./app.js";
import { sequelize } from "./database/database.js";

import './home/models/Tablero.js'
import './home/models/TipoTablero.js'

async function main(){
    try {
        await sequelize.sync({force:true})
        app.listen(4000)
        console.log('Usando el puerto ', 4000)
    } catch (error) {
        console.error('No se pudo conectar', error)
    }
}
main();