const express = require('express');
const router = express.Router();
const SeatsController = require('../controllers/seats.controller.js');

router.get('/seats', SeatsController.getAllSeats);
router.get('/seats/:id', SeatsController.getSeatByID);
router.post('/seats', SeatsController.postNewSeat);
router.put('/seats/:id', SeatsController.updateSeat);
router.delete('/seats/:id', SeatsController.deleteSeat);

module.exports = router;