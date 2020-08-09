const express = require('express');
const db = require('./db');
const cors = require('cors')


const app = express();
const port = 8000;

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


app.use((req, res) => {
  res.status(404).send({
    message: 'Not found...'
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});