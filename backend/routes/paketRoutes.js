import express from "express";
import {
    createPaket,
    getPaketById,
    getAllPaket,
    updatePaket,
    deletePaket,
} from "../controllers/paketController.js";

const router = express.Router();

/**
 * @route POST /api/paket
 * @desc Membuat paket baru
 * @access Public (ubah ke Private jika perlu proteksi)
 */
router.post("/", createPaket);

/**
 * @route GET /api/paket/:id
 * @desc Mengambil detail paket berdasarkan ID
 * @access Public
 */
router.get("/:id", getPaketById);

/**
 * @route GET /api/paket
 * @desc Mengambil semua paket
 * @access Public
 */
router.get("/", getAllPaket);

/**
 * @route PUT /api/paket/:id
 * @desc Memperbarui paket berdasarkan ID
 * @access Public
 */
router.put("/:id", updatePaket);

/**
 * @route DELETE /api/paket/:id
 * @desc Menghapus paket berdasarkan ID
 * @access Public
 */
router.delete("/:id", deletePaket);

export default router;
