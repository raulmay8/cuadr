import { Router } from "express";
import { createTipoTablero, deleteTipoTablero, getTipoTablero, getTipoTableroTablero, getTipoTableros, updateTipoTablero } from "../controllers/tipotableros.controllers.js";

const router = Router()

router.get("/tipos", getTipoTableros)
router.post("/tipos", createTipoTablero);
router.put("/tipos/:id", updateTipoTablero);
router.delete("/tipos/:id", deleteTipoTablero);
router.get("/tipos/:id", getTipoTablero);

router.get("/tipos/:id/tableros", getTipoTableroTablero)

export default router;