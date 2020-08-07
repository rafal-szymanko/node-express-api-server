const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/', testimonialsRoutes); // add post routes to server
app.use('/', concertRoutes); // add user routes to server
app.use('/', seatsRoutes); // add user routes to server

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/testimonials', (req, res) => {
//     res.send(db.testimonials);
// });

// app.get('/testimonials/random', (req, res) => {
//     const randomId = Math.floor(Math.random() * (db.testimonials.length - 1 + 1) + 1);

//     const renderData = db.testimonials.find(item => item.id == randomId);

//     res.send(renderData);
// });

// app.get('/testimonials/:id', (req, res) => {
//     const renderData = db.testimonials.find(item => item.id == req.params.id);

//     if (renderData) {
//         res.send(renderData);
//     } else {
//         res.status(404).send('404 not found...');
//     }
// });

// app.post('/testimonials', (req, res) => {
//     const {
//         author,
//         text
//     } = req.body;

//     const postData = {
//         id: db.testimonials.length + 1,
//         author: author,
//         text: text,
//     };

//     db.testimonials.push(postData);

//     res.send({
//         message: "ok"
//     });
// });


// app.put('/testimonials/:id', (req, res) => {
//     const {
//         author,
//         text
//     } = req.body;

//     const index = db.testimonials.findIndex(item => item.id == req.params.id);

//     db.testimonials.splice(index, 1, {
//         id: Number(req.params.id),
//         author: author,
//         text: text,
//     });

//     res.send({
//         message: "ok"
//     });
// });

// app.delete('/testimonials/:id', (req, res) => {
//     const index = db.testimonials.findIndex(item => item.id == req.params.id);

//     db.testimonials.splice(index, 1);

//     res.send({
//         message: "ok"
//     });
// });


// app.get('/concerts', (req, res) => {
//     res.send(db.concerts);
// });


// app.get('/concerts/:id', (req, res) => {
//     const renderData = db.concerts.find(item => item.id == req.params.id);

//     if (renderData) {
//         res.send(renderData);
//     } else {
//         res.status(404).send('404 not found...');
//     }
// });

// app.post('/concerts', (req, res) => {
//     const {
//         performer,
//         genre,
//         price,
//         day,
//         image,
//     } = req.body;

//     const postData = {
//         id: db.concerts.length + 1,
//         performer: performer,
//         genre: genre,
//         price: Number(price),
//         day: Number(day),
//         image: image,
//     };

//     db.concerts.push(postData);

//     res.send({
//         message: "ok"
//     });
// });


// app.put('/concerts/:id', (req, res) => {
//     const {
//         performer,
//         genre,
//         price,
//         day,
//         image,
//     } = req.body;

//     const index = db.concerts.findIndex(item => item.id == req.params.id);

//     db.concerts.splice(index, 1, {
//         id: Number(req.params.id),
//         performer: performer,
//         genre: genre,
//         price: Number(price),
//         day: Number(day),
//         image: image,
//     });

//     res.send({
//         message: "ok"
//     });
// });

// app.delete('/concerts/:id', (req, res) => {
//     const index = db.concerts.findIndex(item => item.id == req.params.id);

//     db.concerts.splice(index, 1);

//     res.send({
//         message: "ok"
//     });
// });

// app.get('/seats', (req, res) => {
//     res.send(db.seats);
// });


// app.get('/seats/:id', (req, res) => {
//     const renderData = db.seats.find(item => item.id == req.params.id);

//     if (renderData) {
//         res.send(renderData);
//     } else {
//         res.status(404).send('404 not found...');
//     }
// });

// app.post('/seats', (req, res) => {
//     const {
//         day,
//         seat,
//         client,
//         email,
//     } = req.body;

//     const postData = {
//         id: db.seats.length + 1,
//         day: Number(day),
//         seat: Number(seat),
//         client: client,
//         email: email,
//     };

//     db.seats.push(postData);

//     res.send({
//         message: "ok"
//     });
// });


// app.put('/seats/:id', (req, res) => {
//     const {
//         day,
//         seat,
//         client,
//         email,
//     } = req.body;

//     const index = db.seats.findIndex(item => item.id == req.params.id);

//     db.seats.splice(index, 1, {
//         id: Number(req.params.id),
//         day: Number(day),
//         seat: Number(seat),
//         client: client,
//         email: email,
//     });

//     res.send({
//         message: "ok"
//     });
// });

// app.delete('/seats/:id', (req, res) => {
//     const index = db.seats.findIndex(item => item.id == req.params.id);

//     db.seats.splice(index, 1);

//     res.send({
//         message: "ok"
//     });
// });

app.use((req, res) => {
    res.status(404).send({
        message: 'Not found...'
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});