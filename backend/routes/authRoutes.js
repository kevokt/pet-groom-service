/**
 * Routing untuk autentikasi admin.
 * 
 * @module routes/authRoutes
 */
import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

/**
 * Login admin dan dapatkan token.
 *
 * @function loginRoute
 * @name POST /api/auth/login
 * @memberof module:routes/authRoutes
 */
router.post('/login', login);

/**
 * Registrasi admin baru.
 *
 * @function registerRoute
 * @name POST /api/auth/register
 * @memberof module:routes/authRoutes
 */
router.post('/register', register);

export default router;
