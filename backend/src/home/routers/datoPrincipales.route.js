import { Router } from "express";
import {createDato, deleteDato, getDato, getDatos, updateDato} from '../controllers/datoPrincipales.controllers.js'

const router = Router()

router.get("/datos", getDatos)
router.get("/datos/:id", getDato);
router.post("/datos", createDato);
router.put("/datos/:id", updateDato);
router.delete("/datos/:id", deleteDato);

export default router;