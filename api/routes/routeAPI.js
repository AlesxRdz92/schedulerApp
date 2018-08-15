const router = express.Router();

const appointmentController = require('./../controllers/appointments');
const slotControler = require('./../controllers/slot');

router.get('/appointments', appointmentController.all);
router.get('/retrieveSlots', slotControler.all);
router.post('/appointmentCreate', appointmentController.create);

module.exports = router;