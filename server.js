const express = require('express');
const cors = require('cors')
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');

const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

app.use('/api', testimonialsRoutes);
app.use('/api', concertRoutes);
app.use('/api', seatsRoutes);


app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use((req, res) => {
  res.status(404).send({
    message: 'Not found...'
  });
})


// mongoose.connect('mongodb+srv://rszymanko:cPPECFZIiyFK1TJf@cluster0.pefni.mongodb.net/NewWaveDB?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/NewWaveDB', { useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Example app listening at http://localhost:8000`);
});


const io = socket(server);

io.on('connection', (socket) => {
    console.log('New socket');
});
