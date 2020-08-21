const Seat = require('../models/seat.model');

exports.getAllSeats = async (req, res) => {
    try {
        res.json(await Seat.find());
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
};

exports.getSeatByID = async (req, res) => {
    try {
        const seats = await Seat.findOne({
            id: req.params.id
        });
        if (seats) {
            res.json(await Seat.findOne({
                id: req.params.id
            }))
        }
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
};


exports.postNewSeat = async (req, res) => {
    const {
        day,
        seat,
        client,
        email,
    } = req.body;

    try {
        const data = await Seat.find();
        const isBooked = data.filter(item => item.day == day && item.seat == seat);

        if (isBooked == false) {
            const count = await Seat.countDocuments();
            const newSeat = new Seat({
                id: count + 1,
                day: day,
                seat: seat,
                client: client,
                email: email,
            });
            await newSeat.save();
            // req.io.emit('seatsUpdated', db.seats);
            res.json(await Seat.find());
        } else {
            res.json({
                message: "The slot is already taken..."
            });
        }
    } catch (err) {
        res.status(500).json({
            message: error
        });
    }
};

exports.updateSeat = async (req, res) => {
    const {
        id,
        day,
        seat,
        client,
        email,
    } = req.body;

    try {
        const findSeat = await Seat.findOne({
            id: req.params.id
        })
        if (findSeat) {
            await Seat.updateOne({
                id: req.params.id
            }, {
                $set: {
                    id: id,
                    day: day,
                    seat: seat,
                    client: client,
                    email: email
                }
            });
            res.json(await Seat.find());
        } else {
            res.status(500).json({
                message: error
            });
        }
    } catch (err) {
        res.status(500).json({
            message: error
        });
    }
};

exports.deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findOne({id: req.params.id});
        if(seat) {
            await Seat.deleteOne({id: req.params.id});
            res.json(await Seat.find());
        } else {
            res.status(500).json({message: error});
        }
    }
    catch(err) {
        res.status(500).json({message: error});
    }
};