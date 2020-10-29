const express = require('express');
var cors = require('cors');
const app = express();
const port = 3003;
const db = require('../database/index.js');

app.use(cors());
app.use(express());

// get all workouts
app.get('/workouts', function(req, res) {
  db.allWorkouts(function(error, data) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
})

// post new workout
app.post('/workouts', function(req, res) {
  db.addNewWorkout(req.body.id, req.body.category, req.body.exercise, req.body.reps, req.body.rounds, function(error, data) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});