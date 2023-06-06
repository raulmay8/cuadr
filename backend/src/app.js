import  express  from "express";
import tipotableros from './home/routers/tableros.route.js'
import tableros from './home/routers/tipotableros.route.js'

const app =  express()

app.use(express.json());
app.use(tipotableros)
app.use(tableros)
export default app;