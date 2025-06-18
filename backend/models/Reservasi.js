/**
 * @module models/Reservasi
 */

import mongoose from "mongoose";

/**
 * Skema untuk model Reservasi.
 * 
 * @typedef {Object} Reservasi
 * @property {string} namaPemesan - Nama pemesan reservasi.
 * @property {string} namaPeliharaan - Nama peliharaan yang akan dirawat.
 * @property {string} nomorTelepon - Nomor telepon pemesan.
 * @property {string} jenisHewan - Jenis hewan peliharaan.
 * @property {string} paket - Paket layanan yang dipilih.
 * @property {string} jadwal - Jadwal reservasi.
 * @property {string} status - Status reservasi, default adalah "PENDING".
 * @property {string} petImage - Gambar peliharaan yang diunggah.
 * 
 * @type {mongoose.Schema<Reservasi>}
 */
const reservasiSchema = new mongoose.Schema({
    namaPemesan: { type: String, required: true },
    namaPeliharaan: { type: String, required: true },
    nomorTelepon: { type: String, required: true },
    jenisHewan: { type: String, required: true },
    paket: { type: String, required: true },
    jadwal: { type: String, required: true },
    status: {
        type: String,
        default: "PENDING", // ← default value
    },
    petImage: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Reservasi", reservasiSchema);