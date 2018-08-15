const mongoose = require('mongoose');
const validator = require('validator');
const Slot = require('./slot');

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    phone: {
        type: Number,
        required: true,
    },
    slots: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Slot'
    },
    created_at: Date
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = { Appointment };