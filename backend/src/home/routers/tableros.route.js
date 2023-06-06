import { Router } from "express";
import {createTablero, deleteTablero, getTablero, getTableros, updateTablero} from '../controllers/tableros.controllers.js'

const router = Router()

router.get("/tableros", getTableros)
router.post("/tableros", createTablero);
router.put("/tableros/:id", updateTablero);
router.delete("/tableros/:id", deleteTablero);
router.get("/tableros/:id", getTablero);

export default router;