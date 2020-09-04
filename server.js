const express = require('express');
const cors = require('cors')
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');
const helmet = require('helmet');



const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(helmet());
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


console.log(process.env)


app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use((req, res) => {
  res.status(404).send({
    message: 'Not found...'
  });
})

const dbURI = process.env.NODE_ENV === 'production' ? `mongodb+srv://${process.env.test}` : 'mongodb://localhost:27017/NewWaveDB';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// mongoose.connect(`mongodb+srv://${process.env.test}`, { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/NewWaveDB', { useNewUrlParser: true, useFindAndModify: false });
// const db = mongoose.connection;

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
