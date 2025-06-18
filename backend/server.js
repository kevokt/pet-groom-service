/**
 * @file server.js
 * Server utama Express untuk aplikasi pet groom service hewan peliharaan.
 */

// Library imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoutes from './routes/authRoutes.js';
import reservasiRoutes from './routes/reservasiRoutes.js';
import paketRoutes from './routes/paketRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

/**
 * Port untuk menjalankan server.
 * Nilai default: 3000 jika variabel lingkungan tidak disediakan.
 * @constant {number}
 */
const PORT = process.env.PORT || 3000;

// Get current directory path
/**
 * Jalur absolut dari file modul saat ini.
 * @constant {string}
 */
const __filename = fileURLToPath(import.meta.url);

/**
 * Jalur direktori dari file modul saat ini.
 * @constant {string}
 */
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reservasi', reservasiRoutes);
app.use('/api/paket', paketRoutes);

/**
 * Menjalankan server Express pada port yang ditentukan.
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
