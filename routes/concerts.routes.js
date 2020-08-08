const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/concerts').get((req, res) => {
  res.send(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
  const renderData = db.concerts.find(item => item.id == req.params.id);

  if (renderData) {
    res.send(renderData);
  } else {
    res.status(404).send({
      message: '404 not found...'
    });
  }
});

router.route('/concerts').post((req, res) => {
  const {
    performer,
    genre,
    price,
    day,
    image,
  } = req.body;

  const postData = {
    id: db.concerts.length + 1,
    performer: performer,
    genre: genre,
    price: Number(price),
    day: Number(day),
    image: image,
  };

  db.concerts.push(postData);

  res.send({
    message: "ok"
  });
});

router.route('/concerts/:id').put((req, res) => {
  const {
    performer,
    genre,
    price,
    day,
    image,
  } = req.body;

  const index = db.concerts.findIndex(item => item.id == req.params.id);

  db.concerts.splice(index, 1, {
    id: Number(req.params.id),
    performer: performer,
    genre: genre,
    price: Number(price),
    day: Number(day),
    image: image,
  });

  res.send({
    message: "ok"
  });
});

router.route('/concerts/:id').delete((req, res) => {
  const index = db.concerts.findIndex(item => item.id == req.params.id);

  db.concerts.splice(index, 1);

  res.send({
    message: "ok"
  });
});


module.exports = router;