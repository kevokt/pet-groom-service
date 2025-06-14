import mongoose from "mongoose";

const reservasiSchema = new mongoose.Schema({
    namaPemesan: { type: String, required: true },
    namaPeliharaan: { type: String, required: true },
    nomorTelepon: { type: String },
    jenisHewan: { type: String },
    paket: { type: String },
    jadwal: { type: String },
    status: {
        type: String,
        default: "PENDING", // ← default value
    },
    petImage: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Reservasi", reservasiSchema);