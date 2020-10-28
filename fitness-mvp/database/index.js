var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bosiebear13'
  database : 'fitness'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting');
  } else {
    console.log('connected');
  }
});

// queries

// get all upper body workouts
// connection.query(query string)

// get all lower body workouts

// get all abs workouts

// post a new workout

module.exports = {
};