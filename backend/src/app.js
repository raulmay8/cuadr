import  express  from "express";
import simbologias from './home/routers/simbologias.route.js'

const app =  express()

app.use(express.json());
app.use(simbologias)
export default app; 