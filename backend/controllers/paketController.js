/**
 * @module controllers/paketController
 */

import Paket from "../models/Paket.js";

/**
 * Membuat paket baru.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberOf module:controllers/paketController
 */
export const createPaket = async (req, res) => {
    try {
        const { namaPaket, harga, deskripsi } = req.body;
        const newPaket = new Paket({ namaPaket, harga, deskripsi });
        await newPaket.save();
        res.status(201).json(newPaket);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Mengambil satu paket berdasarkan ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberOf module:controllers/paketController
 */
export const getPaketById = async (req, res) => {
    try {
        const paket = await Paket.findById(req.params.id);
        if (!paket) {
            return res.status(404).json({ message: "Paket tidak ditemukan" });
        }
        res.status(200).json(paket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * Mengambil semua paket.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberOf module:controllers/paketController
 */
export const getAllPaket = async (req, res) => {
    try {
        const paketList = await Paket.find().sort({ createdAt: -1 });
        res.json(paketList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Memperbarui paket berdasarkan ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberOf module:controllers/paketController
 */
export const updatePaket = async (req, res) => {
    try {
        const { id } = req.params;
        const { namaPaket, harga, deskripsi } = req.body;
        const updated = await Paket.findByIdAndUpdate(
            id,
            { namaPaket, harga, deskripsi },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * Menghapus paket berdasarkan ID.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberOf module:controllers/paketController
 */
export const deletePaket = async (req, res) => {
    try {
        const { id } = req.params;
        await Paket.findByIdAndDelete(id);
        res.json({ message: "Paket berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
