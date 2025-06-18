/**
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
 * @route POST /api/reservasi
 * @desc Membuat reservasi baru dengan upload gambar peliharaan
 * @access Public
 */
router.post("/", upload.single("petImage"), createReservasi);

/**
 * @route GET /api/reservasi
 * @desc Mengambil seluruh data reservasi
 * @access Public
 */
router.get("/", getAllReservasi);

/**
 * @route PUT /api/reservasi/:id
 * @desc Mengubah status reservasi (PENDING, APPROVED, REJECTED)
 * @access Public
 */
router.put("/:id", updateReservasiStatus);

/**
 * @route DELETE /api/reservasi/:id
 * @desc Menghapus reservasi dan gambar terkait
 * @access Public
 */
router.delete("/:id", deleteReservasi);

export default router;
