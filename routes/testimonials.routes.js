const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonials.controller');

router.get('/testimonials', TestimonialsController.getAllTestimonials);
router.get('/testimonials/random', TestimonialsController.getRandomTestimonial);
router.get('/testimonials/:id', TestimonialsController.getTestimonialByID);
router.post('/testimonials', TestimonialsController.postNewTestimonial);
router.put('/testimonials/:id', TestimonialsController.updateTestimonial);
router.delete('/testimonials/:id', TestimonialsController.deleteTestimonial);

module.exports = router;