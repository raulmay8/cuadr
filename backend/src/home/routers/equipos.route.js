import { Router } from "express";
import { createEquipo, deleteEquipo, getEquipo, getEquipoTablero, getEquipos, updateEquipo } from "../controllers/equipos.controllers.js";

const router = Router()

router.get("/equipos", getEquipos)
router.get("/equipos/:id", getEquipo);
router.post("/equipos", createEquipo);
router.put("/equipos/:id", updateEquipo);
router.delete("/equipos/:id", deleteEquipo);

router.get("/equipos/:id/tableros", getEquipoTablero)

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

export default router;