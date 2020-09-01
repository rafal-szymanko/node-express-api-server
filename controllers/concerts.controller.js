const Concert = require('../models/concert.model');
const formatFullname = require('../utils/formatFullname');

exports.getAllConcerts = async (req, res) => {

    try {
        res.json(await Concert.find())
            
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.getConcertByID = async (req, res) => {
    try {

        const concert = await Concert.findOne({id: req.params.id});

        if(concert) {
            res.json(concert);
        } else {
            res.status(404).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.getConcertByPerformer = async (req, res) => {
    try {
        const performer = formatFullname(req.params.performer);
        const concerts = await Concert.find({performer: performer});

        if(concerts) {
            res.json(concerts);
        } else {
            res.status(404).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.getConcertByGenre = async (req, res) => {
    try {
        const findConcerts = req.params.genre.toLowerCase();
        const concerts = await Concert.findOne({genre: findConcerts});

        if(concerts) {
            res.json(concerts);
        } else {
            res.status(404).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.getConcertByDay = async (req, res) => {

    try {
        const concerts = await Concert.find({day: req.params.day});

        if(concerts) {
            res.json(concerts);
        } else {
            res.status(404).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.getConcertByPrice = async (req, res) => {
        console.log(req.params)
    try {
        const concerts = await Concert.find({
            price: {
            "$gte": req.params.price_min,
            "$lte": req.params.price_max,
        }});

        if(concerts) {
            res.json(concerts);
        } else {
            res.status(404).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.postNewConcert = async (req, res) => {
    const {performer, genre, price, day, image} = req.body;
    try {
        const count = await Concert.countDocuments();
        const newConcert = new Concert({id: count + 1, performer: performer, genre: genre, price: price, day: day, image: image});
        await newConcert.save();
        res.json(await Concert.find());
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.updateConcert = async (req, res) => {
    const {performer, genre, price, day, image, id} = req.body;
    try {
        const concert = await Concert.findOne({id: req.params.id})
        if(concert) {
            await Concert.updateOne({id: req.params.id}, {$set : {id: id, performer: performer, genre: genre, price: price, day: day, image: image}});
            res.json(await Concert.find());
        } else {
            res.status(500).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: err});
    }
};

exports.deleteConcert = async (req, res) => {
    try {
        const concert = await Concert.findOne({id: req.params.id});
        if(concert) {
            await Concert.deleteOne({id: req.params.id});
            res.json(await Concert.find());
        } else {
            res.status(500).json({message: 'Not found...'});
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};
