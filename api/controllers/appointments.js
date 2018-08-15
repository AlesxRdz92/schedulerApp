const { Appointment } = require('./../models/appointment');
const { Slot } = require('./../models/slot');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '',
    apiSecret: ''
});

const appointmentController = {
    all(req, res) {
        Appointment.find().then(appointments => {
            res.json(appointments);
        }, e => res.status(400).send())
    },
    create(req, res) {
        new Slot({
            slot_time: req.body.slot_time,
            slot_date: req.body.slot_date,
            created_at: Date.now()
        }).save().then(slot => {
            new Appointment({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                slots: slot._id
            }).save().then(appointment => {
                sendSMS(appointment);
                Appointment.findById(appointment._id)
                    .populate('slots')
                    .then(result => res.json(result));
            });
        }).catch(e => res.status(400).send());
    }
}

function sendSMS(appointment) {
    let msg = `${appointment.name}, this message is to confirm your appointment at ${appointment.appointment}`;
    let from = VIRTUAL_NUMER;
    let to = RECIPIENT_NUMBER;

    nexmo.message.sendSMS(from, to, msg, (err, response) => {
        if (err)
            console.log(err);
        else
            console.dir(response);
    });
}

module.exports = appointmentController;