const express = require('express');
const router = express.Router({mergeParams: true});
const ConcertsController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertsController.getAllConcerts);
router.get('/concerts/:id', ConcertsController.getConcertByID);
router.get('/concerts/genre/:genre', ConcertsController.getConcertByGenre);
router.get('/concerts/performer/:performer', ConcertsController.getConcertByPerformer);
router.get('/concerts/price/day/:day', ConcertsController.getConcertByDay);
router.get('/concerts/price/:price_min/:price_max', ConcertsController.getConcertByPrice);
router.post('/concerts', ConcertsController.postNewConcert);
router.put('/concerts/:id', ConcertsController.updateConcert);
router.delete('/concerts/:id', ConcertsController.deleteConcert);

module.exports = router;