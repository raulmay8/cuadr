import { Router } from "express";
import { createSimbologia, deleteSimbologia, getSimbologia, getSimbologias, updateSimbologia } from "../controllers/simbologias.controllers.js";

const router = Router()

router.get("/simbologias", getSimbologias)
router.post("/simbologias", createSimbologia);
router.put("/simbologias/:id", updateSimbologia);
router.delete("/simbologias/:id", deleteSimbologia);
router.get("/simbologias/:id", getSimbologia);

export default router;