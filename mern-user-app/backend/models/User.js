const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    modalidad: {
        type: String,
        required: true,
        enum: ['Online', 'Presencial', 'Híbrido']
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);