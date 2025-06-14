import Reservasi from "../models/Reservasi.js";

export const createReservasi = async (req, res) => {
    try {
        const {
            namaPemesan,
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
            nomorTelepon,
            jenisHewan,
            paket,
            jadwal,
            petImage,
            status: "pending",
        });

        await newReservasi.save();
        res.status(201).json(newReservasi);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllReservasi = async (req, res) => {
    try {
        const reservasiList = await Reservasi.find().sort({ createdAt: -1 });
        res.json(reservasiList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

export const deleteReservasi = async (req, res) => {
    try {
        const { id } = req.params;
        await Reservasi.findByIdAndDelete(id);
        res.json({ message: "Reservasi berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};