/**
 * @module controllers/reservasiController
 */

import Reservasi from "../models/Reservasi.js";
import fs from "fs";
import path from "path";

/**
 * Menyimpan data reservasi baru ke database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/reservasiController
 */
export const createReservasi = async (req, res) => {
    try {
        const {
            namaPemesan,
            namaPeliharaan,
            nomorTelepon,
            jenisHewan,
            paket,
            jadwal,
        } = req.body;

        const petImage = req.file?.filename;
        if (!petImage) {
            return res.status(400).json({ error: "Gambar peliharaan wajib diunggah." });
        }

        const newReservasi = new Reservasi({
            namaPemesan,
            namaPeliharaan,
            nomorTelepon,
            jenisHewan,
            paket,
            jadwal,
            petImage,
            status: "PENDING",
        });

        await newReservasi.save();
        res.status(201).json(newReservasi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Mengambil seluruh data reservasi dari database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/reservasiController 
 */
export const getAllReservasi = async (req, res) => {
    try {
        const reservasiList = await Reservasi.find().sort({ createdAt: -1 });
        res.json(reservasiList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Memperbarui status reservasi berdasarkan ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/reservasiController
 */
export const updateReservasiStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updated = await Reservasi.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Menghapus data reservasi dan file gambar terkait.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/reservasiController
 */
export const deleteReservasi = async (req, res) => {
    try {
        const { id } = req.params;

        const reservasi = await Reservasi.findById(id);
        if (!reservasi) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        // Hapus file gambar 
        const imagePath = path.join("backend", "uploads", reservasi.petImage);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        // Hapus data dari MongoDB
        await Reservasi.findByIdAndDelete(id);

        res.json({ message: "Reservasi dan gambar berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};