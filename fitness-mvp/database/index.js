var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bosiebear13',
  database : 'fitness'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting');
  } else {
    console.log('connected');
  }
});

// get all workouts
var allWorkouts = function(callback) {
  connection.query('SELECT * FROM workouts', function(error, results) {
    if (error) {
      callback(error,null);
    } else {
      callback(null, results);
    }
  })
}

// post a new workout
var addNewWorkout = function(id, category, exercise, reps, rounds, callback) {
  connetion.query(`INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES ("${id}", "${category}", "${exercise}", "${reps}", "${rounds}")`, function(error, results) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports = {
  allWorkouts,
  addNewWorkout
};