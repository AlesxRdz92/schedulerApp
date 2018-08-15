const { Appointment } = require('./../models/appointment');
const { Slot } = require('./../models/slot');

const slotController = {
    all(req, res) {
        Slot.find().then(slots => {
            res.json(slots);
        }, e => res.send(400).send())
    }
};

module.exports = slotController;