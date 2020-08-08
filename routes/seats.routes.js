const express = require('express');
const router = express.Router();
const db = require('./../db');

// get all posts
router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
  const renderData = db.seats.find(item => item.id == req.params.id);

  if (renderData) {
    res.send(renderData);
  } else {
    res.status(404).send({
      message: '404 not found...'
    });
  }
});

router.route('/seats').post((req, res) => {
  const {
    day,
    seat,
    client,
    email,
  } = req.body;

  const postData = {
    id: db.seats.length + 1,
    day: Number(day),
    seat: Number(seat),
    client: client,
    email: email,
  };

  db.seats.push(postData);

  res.send({
    message: "ok"
  });
});

router.route('/seats/:id').put((req, res) => {
  const {
    day,
    seat,
    client,
    email,
  } = req.body;

  const index = db.seats.findIndex(item => item.id == req.params.id);

  db.seats.splice(index, 1, {
    id: Number(req.params.id),
    day: Number(day),
    seat: Number(seat),
    client: client,
    email: email,
  });

  res.send({
    message: "ok"
  });
});

router.route('/seats/:id').delete((req, res) => {
  const index = db.seats.findIndex(item => item.id == req.params.id);

  db.seats.splice(index, 1);

  res.send({
    message: "ok"
  });
});

module.exports = router;