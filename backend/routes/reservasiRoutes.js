import express from "express";
import multer from "multer";
import { createReservasi, getAllReservasi } from "../controllers/reservasiController.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

router.post("/", upload.single("petImage"), createReservasi);
router.get("/", getAllReservasi);

export default router;
