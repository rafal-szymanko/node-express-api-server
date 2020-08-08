const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use('/', testimonialsRoutes); 
app.use('/', concertRoutes); 
app.use('/', seatsRoutes); 


app.use((req, res) => {
  res.status(404).send({
    message: 'Not found...'
  });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});