CREATE TABLE workouts (
  id integer AUTO_INCREMENT PRIMARY KEY,
  workout_id integer,
  category varchar(50),
  exercise varchar(50),
  reps integer,
  rounds integer
);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (1, 'Upper Body', 'bicep curl', 10, 4);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (1, 'Upper Body', 'sholder press', 8, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (1, 'Upper Body', 'tricep extension', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (1, 'Upper Body', 'chest press', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (1, 'Upper Body', 'lat pull downs', 8, 4);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (2, 'Upper Body', 'cable curls', 10, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (2, 'Upper Body', 'sholder raises', 8, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (2, 'Upper Body', 'tricep pull downs', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (2, 'Upper Body', 'chest flys', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (2, 'Upper Body', 'bent over rows', 8, 4);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (3, 'Lower Body', 'squats', 10, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (3, 'Lower Body', 'hamstring curl', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (3, 'Lower Body', 'dead lifts', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (3, 'Lower Body', 'reverse lunges', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (3, 'Lower Body', 'kickbacks', 8, 3);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (4, 'Lower Body', 'cable adduction', 10, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (4, 'Lower Body', 'RDL', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (4, 'Lower Body', 'sumo squats', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (4, 'Lower Body', 'standing abduction', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (4, 'Lower Body', 'burpees', 8, 3);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (5, 'Abs', 'russian twist', 10, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (5, 'Abs', 'suitcases', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (5, 'Abs', 'situps', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (5, 'Abs', 'toe touches', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (5, 'Abs', 'crunches', 8, 3);

INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (6, 'Abs', 'bicylce crunches', 10, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (6, 'Abs', 'plank rotations', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (6, 'Abs', 'leg extensions', 8, 4);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (6, 'Abs', 'flutter kicks', 10, 3);
INSERT INTO workouts (workout_id, category, exercise, reps, rounds) VALUES (6,'Abs', 'yoga ball knee tucks', 8, 3);
