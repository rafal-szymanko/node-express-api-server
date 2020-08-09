const express = require('express');
const db = require('./db');
const cors = require('cors')
const path = require('path');


const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '/client/build')));


app.use('/api', testimonialsRoutes);
app.use('/api', concertRoutes);
app.use('/api', seatsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


app.use((req, res) => {
  res.status(404).send({
    message: 'Not found...'
  });
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Example app listening at http://localhost:8000`);
});