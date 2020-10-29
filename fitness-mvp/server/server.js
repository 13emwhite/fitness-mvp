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

// get workouts based off workout id
// app.get('/workouts/:id', function(req, res) {
//   db.selectWorkoutId(req.params.id, function(error, data) {
//     if (error) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   })
// })

// get upper body workouts
// app.get('/workouts/:category', function(req, res) {
//   db.selectWorkoutId(req.params.category, function(error, data) {
//     if (error) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   })
// })

// get lower body workouts

// get abs workouts

// post new workout

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});