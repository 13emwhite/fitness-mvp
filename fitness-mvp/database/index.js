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

// get workouts based off workout id
// var selectWorkoutId = function(id, callback) {
//   connection.query(`SELECT * FROM workouts WHERE id=?`, [id], function(error, results) {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   })
// }

// get all upper body workouts
// var categoryWorkout = function(category, callback) {
//   connection.query(`SELECT * FROM workouts WHERE category=?`, [category], function(error, results) {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   })
// }

// get all lower body workouts

// get all abs workouts

// post a new workout

module.exports = {
  allWorkouts,
  // selectWorkoutId,
  // categoryWorkout
};