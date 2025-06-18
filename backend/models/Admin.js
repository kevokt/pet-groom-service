import mongoose from 'mongoose';

/**
 * Skema untuk model Admin.
 * 
 * @typedef {Object} Admin
 * @property {string} username - Nama pengguna admin.
 * @property {string} password - Kata sandi admin.
 */
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const AdminModel = mongoose.model('admins', AdminSchema);

export default AdminModel;
