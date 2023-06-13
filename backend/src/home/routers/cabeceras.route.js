import { Router } from "express";
import {createCabecera, deleteCabecera, getCabecera, getCabeceras, updateCabecera} from '../controllers/cabeceras.controllers.js'

const router = Router()

router.get("/cabeceras", getCabeceras)
router.get("/cabeceras/:id", getCabecera);
router.post("/cabeceras", createCabecera);
router.put("/cabeceras/:id", updateCabecera);
router.delete("/cabeceras/:id", deleteCabecera);

export default router;