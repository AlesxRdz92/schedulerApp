const mongoose = require('mongoose');
const validator = require('validator');

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
        ref: 'Slot'
    }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = { Appointment };