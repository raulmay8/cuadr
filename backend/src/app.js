import  express  from "express";
import cabecerasRoutes from './home/routers/cabeceras.route.js'
import datosRoutes from './home/routers/datoPrincipales.route.js'
import equiposRoutes from './home/routers/equipos.route.js'
import tablerosRoutes from './home/routers/tableros.route.js'

const app =  express()
/* app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    }) */
app.use(express.json());
app.use(cabecerasRoutes)
app.use(datosRoutes)
app.use(equiposRoutes)
app.use(tablerosRoutes)


export default app; 