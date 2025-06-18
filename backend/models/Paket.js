import mongoose from "mongoose";

/**
 * Skema untuk paket layanan grooming hewan peliharaan.
 * 
 * @typedef {Object} Paket
 * @property {string} namaPaket - Nama dari paket layanan.
 * @property {number} harga - Harga dari paket layanan.
 * @property {string} deskripsi - Deskripsi mengenai paket layanan.
 * @property {Date} createdAt - Waktu ketika paket dibuat (otomatis ditambahkan).
 * @property {Date} updatedAt - Waktu ketika paket terakhir diperbarui (otomatis ditambahkan).
 */
const paketSchema = new mongoose.Schema(
    {
        namaPaket: { type: String, required: true },
        harga: { type: Number, required: true },
        deskripsi: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Paket", paketSchema);
