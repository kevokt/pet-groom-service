import mongoose from "mongoose";

const paketSchema = new mongoose.Schema(
    {
        namaPaket: { type: String, required: true },
        harga: { type: Number, required: true },
        deskripsi: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Paket", paketSchema);
