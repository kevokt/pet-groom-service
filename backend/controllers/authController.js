/**
 * @module controllers/authController
 */

import AdminModel from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

/**
 * Login admin menggunakan username dan password,
 * dan menghasilkan JWT jika berhasil.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/authController
 */
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await AdminModel.findOne({ username });
        console.log("User found in DB:", user);

        if (!user) return res.status(400).json("User tidak ditemukan!");

        if (user.password !== password) return res.status(400).json("Password salah!");

        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" });

        return res.json({ status: "Success", token });
    } catch (err) {
        return res.status(500).json("Login error");
    }
};

/**
 * Registrasi admin baru.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @memberof module:controllers/authController
 */
export const register = async (req, res) => {
    try {
        const newUser = await AdminModel.create(req.body);
        return res.json(newUser);
    } catch (err) {
        return res.status(500).json(err);
    }
};