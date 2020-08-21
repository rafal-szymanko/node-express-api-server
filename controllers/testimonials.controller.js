const Testimonial = require('../models/testimonial.model');

exports.getAllTestimonials = async (req, res) => {
    try {
        res.json(await Testimonial.find());
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.getRandomTestimonial = async (req, res) => {
    try {
        const count = await Testimonial.countDocuments();
        const rand = Math.floor(Math.random * count);
        const testimonial = await Testimonial.findOne().skip(rand);
        if(testimonial) {
            res.json(testimonial)
        } else {
            res.status(404).json({message: 'Not found...'})
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};

exports.getTestimonialByID = async (req, res) => {
    try {
        const testimonial = await Testimonial.findOne({id: req.params.id})
        if(testimonial) {
            res.json(testimonial)
        } else {
            res.status(404).json({message: 'Not found...'})
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};

exports.postNewTestimonial = async (req, res) => {
    const {author, text} = req.body;
    try {
        const count = await Testimonial.countDocuments();
        const newTestimonial = new Testimonial({id: count + 1, author: author, text: text});
        await newTestimonial.save();
        res.json(await Testimonial.find());
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};

exports.updateTestimonial = async (req, res) => {
    const {author, text, id} = req.body;
    try {
        const testimonial = await Testimonial.findOne({id: req.params.id})
        if(testimonial) {
            await Testimonial.updateOne({id: req.params.id}, {$set : {author: author, text: text, id: id }});
            res.json(await Testimonial.find());
        } else {
            res.status(500).json({message: error});
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};

exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findOne({id: req.params.id});
        if(testimonial) {
            await Testimonial.deleteOne({id: req.params.id});
            res.json(await Testimonial.find());
        } else {
            res.status(500).json({message: error});
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};