import express from "express";
import {
    createPaket,
    getPaketById,
    getAllPaket,
    updatePaket,
    deletePaket,
} from "../controllers/paketController.js";

const router = express.Router();

router.post("/", createPaket);
router.get("/:id", getPaketById);
router.get("/", getAllPaket);
router.put("/:id", updatePaket);
router.delete("/:id", deletePaket);

export default router;
