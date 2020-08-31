const Concert = require('../models/concert.model');
const Seats = require('../models/seat.model');

exports.getAllConcerts = async (req, res) => {

    let concerts = await Concert.find();


    try {
        updateTickets = async (id) => {
            const bookedSeats = await Seats.find({concertID: id});
            let availableSeats = 50 - bookedSeats.length;
            let filter = {id: id};
            await Concert.findOneAndUpdate(filter, {tickets: availableSeats});
        }

        for( concert of concerts) {
            updateTickets(concert.id);
        }

        res.send(await Concert.find());


    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.getConcertByID = async (req, res) => {
    try {

        // const bookedSeats = await Seats.find({concertID: Number(req.params.id)});

        // const maxSeats = 50;
        // const availableSeats = maxSeats - bookedSeats.length;

        // const filter = {id: req.params.id};
        // const update = {tickets: availableSeats};

        // let concert = await Concert.findOneAndUpdate(filter, update);
        // concert = await Concert.findOne(filter);

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
