/**
 * Routing untuk data reservasi layanan hewan.
 *
 * @module routes/reservasiRoutes
 */
import express from "express";
import multer from "multer";
import {
    createReservasi,
    getAllReservasi,
    updateReservasiStatus,
    deleteReservasi,
} from "../controllers/reservasiController.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Menentukan path direktori saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfigurasi penyimpanan untuk file upload menggunakan multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        cb(null, uniqueSuffix);
    },
});

const upload = multer({ storage });

/**
 * Membuat reservasi baru dengan upload gambar peliharaan.
 *
 * @function createReservasiRoute
 * @name POST /api/reservasi
 * @memberof module:routes/reservasiRoutes
 */
router.post("/", upload.single("petImage"), createReservasi);

/**
 * Mengambil seluruh data reservasi.
 *
 * @function getAllReservasiRoute
 * @name GET /api/reservasi
 * @memberof module:routes/reservasiRoutes
 */
router.get("/", getAllReservasi);

/**
 * Mengubah status reservasi (PENDING, APPROVED, REJECTED).
 *
 * @function updateReservasiStatusRoute
 * @name PUT /api/reservasi/:id
 * @memberof module:routes/reservasiRoutes
 */
router.put("/:id", updateReservasiStatus);

/**
 * Menghapus reservasi dan gambar terkait.
 *
 * @function deleteReservasiRoute
 * @name DELETE /api/reservasi/:id
 * @memberof module:routes/reservasiRoutes
 */
router.delete("/:id", deleteReservasi);

export default router;
