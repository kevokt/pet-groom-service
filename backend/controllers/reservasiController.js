import Reservasi from "../models/Reservasi.js";
import path from "path";

export const createReservasi = async (req, res) => {
    try {
        const { name } = req.body;
        const petImage = req.file.filename;

        const newReservasi = new Reservasi({ name, petImage });
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