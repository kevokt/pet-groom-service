import mongoose from "mongoose";

const reservasiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    petImage: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Reservasi", reservasiSchema);
