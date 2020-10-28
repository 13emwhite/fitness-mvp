DROP DATABASE IF EXISTS fitness;

CREATE DATABASE fitness;

USE fitness;

CREATE TABLE workouts (
  id integer AUTO_INCREMENT,
  category varchar(50),
  exercise varchar(50),
  reps integer,
  rounds integer
);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'bicep curl', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'sholder press', 8, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'tricep extension', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'chest press', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'lat pull downs', 8, 4);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'cable curls', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'sholder raises', 8, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'tricep pull downs', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'chest flys', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Upper Body', 'bent over rows', 8, 4);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'squats', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'hamstring curl', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'dead lifts', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'reverse lunges', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'kickbacks', 8, 3);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'cable adduction', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'RDL', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'sumo squats', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'standing abduction', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Lower Body', 'burpees', 8, 3);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'russian twist', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'suitcases', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'situps', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'toe touches', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'crunches', 8, 3);

INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'bicylce crunches', 10, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'plank rotations', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'leg extensions', 8, 4);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'flutter kicks', 10, 3);
INSERT INTO workouts (category, exercise, reps, rounds) VALUES ('Abs', 'yoga ball knee tucks', 8, 3);
