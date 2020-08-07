const express = require('express');
const router = express.Router();
const db = require('../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });

  router.route('/testimonials/random').get((req, res) => {
    const randomId = Math.floor(Math.random() * (db.testimonials.length - 1 + 1) + 1);

    const renderData = db.testimonials.find(item => item.id == randomId);

    res.send(renderData);
  });

  router.route('/testimonials/:id').get((req, res) => {
    const renderData = db.testimonials.find(item => item.id == req.params.id);

    if (renderData) {
        res.send(renderData);
    } else {
        res.status(404).send({message: '404 not found...'});
    }
  });

  router.route('/testimonials').post((req, res) => {
    const {
        author,
        text
    } = req.body;

    const postData = {
        id: db.testimonials.length + 1,
        author: author,
        text: text,
    };

    db.testimonials.push(postData);

    res.send({
        message: "ok"
    });
  });

  router.route('/testimonials/:id').put((req, res) => {
    const {
        author,
        text
    } = req.body;

    const index = db.testimonials.findIndex(item => item.id == req.params.id);

    db.testimonials.splice(index, 1, {
        id: Number(req.params.id),
        author: author,
        text: text,
    });

    res.send({
        message: "ok"
    });
  });

  router.route('/testimonials/:id').delete((req, res) => {
    const index = db.testimonials.findIndex(item => item.id == req.params.id);

    db.testimonials.splice(index, 1);

    res.send({
        message: "ok"
    });
  });

  module.exports = router;