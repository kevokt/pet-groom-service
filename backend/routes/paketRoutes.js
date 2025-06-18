/**
 * Routing untuk data paket layanan.
 *
 * @module routes/paketRoutes
 */
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
 * Membuat paket baru.
 *
 * @function createPaketRoute
 * @name POST /api/paket
 * @memberof module:routes/paketRoutes
 */
router.post("/", createPaket);

/**
 * Mengambil detail paket berdasarkan ID.
 *
 * @function getPaketByIdRoute
 * @name GET /api/paket/:id
 * @memberof module:routes/paketRoutes
 */
router.get("/:id", getPaketById);

/**
 * Mengambil semua paket.
 *
 * @function getAllPaketRoute
 * @name GET /api/paket
 * @memberof module:routes/paketRoutes
 */
router.get("/", getAllPaket);

/**
 * Memperbarui paket berdasarkan ID.
 *
 * @function updatePaketRoute
 * @name PUT /api/paket/:id
 * @memberof module:routes/paketRoutes
 */
router.put("/:id", updatePaket);

/**
 * Menghapus paket berdasarkan ID.
 *
 * @function deletePaketRoute
 * @name DELETE /api/paket/:id
 * @memberof module:routes/paketRoutes
 */
router.delete("/:id", deletePaket);

export default router;
