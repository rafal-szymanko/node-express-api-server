const express = require('express');
const db = require('./db');
const cors = require('cors')
const path = require('path');
const socket = require('socket.io');



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

app.use((req, res, next) => {
  req.io = io;
  next();
});


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

const server = app.listen(process.env.PORT || 8000, () => {
  console.log(`Example app listening at http://localhost:8000`);
});


const io = socket(server);

io.on('connection', (socket) => {
    console.log('New socket');
  // socket.on('addTask', (data) => {
  //   tasks.push(data);
  //   socket.broadcast.emit('addTask', {name: data.name, id: data.id});
  // });

  // socket.on('removeTask', (taskId) => {
  //   const isLocal = false;
  //   tasks.splice(taskId, 1);
  //   socket.broadcast.emit('removeTask', {id: taskId, isLocal});
  // });
  // socket.on('disconnect', () => {});
});
