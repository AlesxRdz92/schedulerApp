const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    slot_time: String,
    slot_date: String,
    created_at: Date
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = { Slot }