const express = require('express');
const router = express.Router();
const ConcertsController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertsController.getAllConcerts);
router.get('/concerts/:id', ConcertsController.getConcertByID);
router.post('/concerts', ConcertsController.postNewConcert);
router.put('/concerts/:id', ConcertsController.updateConcert);
router.delete('/concerts/:id', ConcertsController.deleteConcert);

module.exports = router;