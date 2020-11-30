CREATE TABLE workouts (
  id integer AUTO_INCREMENT PRIMARY KEY,
  workout_id integer,
  category varchar(50),
  exercise varchar(50),
  equipment varchar(50),
  rounds integer,
  reps integer,
  hold integer,
  instructions
);

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Back Extensions', null, 3, 10, null, '1. Lie face down on a mat, with your legs fully extended and your hands supporting your head. 2. Lift your torso up with the help of your back muscles. 3. Hold for a count of 2 and return to the starting position. 4. Repeat until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Bent Over Rows','Dumbbells', 3, 10, null, '1. Grab a set of dumbbells, bend your torso forward and keep your knees slightly bent. 2. Pull the dumbbells toward your waistline, while squeezing your shoulder blades. 3. Slowly lower the weights to the starting position. A 1-second pull, 1-second pause, 2 second down count is ideal. 4. Repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Bicep Curls', 'Dumbbells', 3, 10, null, '1. Stand straight with a dumbbell in each hand, your feet shoulder-width apart and hands by your sides. 2. Squeeze the biceps and lift the dumbbells. Keep the elbows close to your body and the upper arms stationary, only the forearms should move. 3. Once the dumbbells are at shoulder level, slowly lower the arms to the starting position. 4. Repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Chest Press','Dumbbells', 3, 10, null, '1. Lie down on a mat with your knees bent and a dumbbell in each hand. 2. Push the dumbbells up toward the ceiling so that your arms are directly over your shoulders and your palms are facing your feet. 3. Lower your arms and repeat the movement.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Front Raises','Dumbbells', 3, 10, null, '1. Grab a set of dumbbells and stand straight. 2. With your palms facing down, lift one dumbbell until your arm is slightly above parallel to the floor. 3. Pause and then slowly lower the arm back to the starting position. 4. Repeat with the opposite arm and keep alternating sides until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Hammer Curls','Dumbbells', 3, 10, null, '1. Stand straight with your feet hip-width apart and hold the weights with your palms facing your thighs. 2. Bend your elbows and bring the weights up, until the dumbbells are at shoulder level 3. Pause and then lower the dumbbells back to the starting position. 4. Repeat this move until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Push Ups','Dumbbells', 3, 10, null, '1. With your legs extended back, place the hands below the shoulders, slightly wider than shoulder width apart. 2. Start bending your elbows and lower your chest until it’s just above the floor. 3. Push back to the starting position. A 1-second push, 1-second pause, 2-second down count is ideal. 4. Repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Shoulder Press','Dumbbells', 3, 10, null, '1. Stand with your feet shoulder-width apart and hold a dumbbell in each hand. 2. With your palms facing forward and your elbows under your wrists, position the dumbbells at your shoulders. 3. Push the dumbbells up and fully extend your arms. 4. Lower the dumbbells back down to your shoulders and repeat the movement until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Tricep Dips', null, 3, 10, null, '1. Place your hands behind you onto a chair, so that your fingers face forward. 2. Extend your legs and start bending your elbows. 3. Lower your body until your arms are at a 90-degree angle. 4. Lift your body back up until your arms are straight.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (1, 'Upper Body', 'Tricep Extensions','Dumbbells', 3, 10, null, '1. Grab a dumbbell and stand straight with your feet shoulder-width apart. 2. Raise your arms and, with your elbows pointing forward, start lowering the dumbbell. 3. Slowly raise the dumbbell to the starting position and squeeze the triceps. 4. Repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Calf Raises', null, 4, 8, null, '1. Stand with your torso upright, your feet hip-width apart and your toes pointing forward. 2. Raise your heels off the floor and squeeze your calves. 3. Return to the starting position, by slowly lowering your heels, and repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Good Mornings', null, 4, 8, null, '1. Stand up tall with your feet shoulder-width apart and place your hands behind the head. 2. Start bending at the hips, push your hips back and bend over to near parallel. 3. Return to the starting position and repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Single Leg Deadlifts','Dumbbells', 4, 8, null, '1. Stand on one leg with your knee slightly bent and hold a dumbbell in each hand. 2. Start bending at the hips and extend your free leg behind you. 3. Lower your torso until you’re parallel to the floor.4 . Return to the starting position and repeat with the opposite leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Step Ups','Dumbbells', 4, 8, null, '1. Place a box or a step in front of you and stand up straight with a dumbbell in each hand. 2. Step onto the box with your left foot and drive your right knee up, keeping your arms at your sides. 3. Step down with your right foot and alternate legs until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Squats','Dumbbells', 4, 8, null, '1. Stand with your feet shoulder-width apart and hold your dumbbells in front of your shoulders. 2. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. 3. Press your heels into the floor to return to the initial position.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Curtsy Lunges','Dumbbells', 4, 8, null, '1. Stand with your feet shoulder-width apart and hold your dumbbells in front of your shoulders. 2. Keeping your weight in your right foot, take a big step back with your left leg, crossing it behind your right leg. 3. Start lowering your body, by bending your knees, until your right thigh is parallel to the floor. 4. Return to the starting position and repeat on the opposite side.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Dumbell Swings','Dumbbells', 4, 8, null, '1. Stand with your feet shoulder-width apart, your toes pointed slightly outward, and hold a dumbbell with both hands. 2. Squat and bring the dumbbell between your legs. 3. Stand up and swing the dumbbell up to about chest height. 4. Return to the squat position and repeat for the duration of the set.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Glute Bridges','Dumbbells', 4, 8, null, '1. Lie on your back with a dumbbell on your hips and your knees bent. 2. Lift your hips off the mat, while keeping your back straight, and pause for 1 second. 3. Return to the starting position and repeat the movement until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Lateral Leg Swings','Dumbbells', 4, 8, null, '1. Stand tall and hold onto a wall with a dumbell on your left hip. 2. Shift your weight to the right leg and swing your left leg out to the side. 3. Repeat the movement with the right leg until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (2, 'Lower Body', 'Reverse Lunge Kickbacks', null, 4, 8, null, '1. Start with your feet hip-width apart, take a step back with your right leg, and lunge. 2. As you come back up, kick your right leg back and squeeze the glutes. 3. Return to the starting position and repeat with the left leg. 4. Keep alternating legs until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Bicycle Crunches', 'mat', 3, 12, null, '1. Lie on your back, lift your shoulders off the mat and raise both legs. 2. Bring one knee and the opposing elbow close to each other by crunching to one side, and fully extend the other leg. 3. Return to the starting position and then crunch to the opposite side. 4. Repeat until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Bird Dogs', 'mat', 3, 12, null, '1. Start on your hands and knees with the hands under the shoulders and the knees under the hips. 2. Extend one leg and the opposite arm at the same time. 3. Pause for 3 to 5 seconds, return to the starting position and switch sides. 4. Continue alternating sides until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Crunches', 'mat', 3, 12, null, '1. Lie down on the mat, keep your knees bent, your back and feet flat, and your hands supporting your head. 2. Lift your shoulders, squeeze your abdominal muscles and hold for 1 to 2 seconds. 3. Slowly return to the starting position and repeat until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Heel Touches', 'mat', 3, 12, null, '1. Lie on your back, keep your knees bent, arms at the sides, and keep your back and feet flat on the mat. 2. Crunch forward and to the left, touching your left heel with your left hand and hold. 3. Return slowly to the starting position and repeat the movement on the right side. 4. Repeat this side to side movement until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Leg Raises', 'mat', 3, 12, null, '1. Lie on your back with your hands by your sides or underneath your glutes. Keep your legs straight or just slightly bent. 2. Raise your legs until your body is in an L shape. 3. Pause, lower both legs slowly and then return to the starting position. 4. Repeat until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Plank', 'mat', null, null, 30, '1. Get into a push up position, with your elbows under your shoulders and your feet hip-width apart. 2. Bend your elbows and rest your weight on your forearms and on your toes, keeping your body in a straight line. 3. Hold for as long as possible.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Plank Hip Dips', 'mat', 3, 12, null, '1. Start in a low plank position with your body in a straight line, your elbows bent and under your shoulders and your feet hip-width apart. 2. Rotate your hips to the right and dip your body almost to the floor. 3. Return to the starting position and repeat on the left side. Keep alternating sides until the set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Dumbbell Side Bends', 'mat', 3, 12, null, '1. Stand up tall with your feet shoulder-width apart. Hold a dumbbell in your right hand with your palm facing your hip and place your left hand behind your head. 2. Bend to your right side, as far as it feels comfortable, and pause. 3. Repeat for the duration of the set, and then switch sides.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Sit Ups', 'mat', 3, 12, null, '1. Lie down on your back, keep your knees bent and your back and feet flat on the mat. 2. Slowly lift your torso and sit up. 3. Return to the starting position by rolling down one vertebrae at a time. 4. Repeat the exercise until set is complete.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (3, 'Abs', 'Suitcases', 'mat', 3, 12, null, '1. Sit down on the mat with your knees bent, your hands hugging your knees and lift your feet off the floor. 2. Open your arms, extend your legs to a 45-degree angle and lean back. 3. Lift your torso, bend your knees, and return to the starting position. 4. Repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Chair Pose', 'mat', null, null, 30, '1. Start in Mountain Pose and, as you inhale, bring your arms up, with the palms facing each other. 2. As you exhale, bend your knees and sit back. 3. Stay in chair pose for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Childs Pose', 'mat', null, null, 30, '1. Get down on your hands and knees. 2. Sit on your heels, separate the knees, lay your torso down and stretch your arms in front of you. 3. Rest your forehead on the mat and relax for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Cobra Pose','mat', null, null, 30, '1. Lie on your belly, place your hands on the floor directly under the shoulders, and keep your elbows close to your torso. 2. Inhale as you straighten the arms and lift your chest off the floor. 3. Stay in cobra pose for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Downward Dog Pose', 'mat', null, null, 30, 'Start in plank pose with your shoulders on top of your wrists and your heels on top of the balls of your feet. 2. Without moving your hands or your feet, lift your hips up and back. 3. Stay in downward facing dog pose for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Eagle Pose', 'mat', null, null, 30, '1. Stand up straight, stretch your arms forward, open your back and cross your left arm on top of the right. 2. Bend your elbows, raise and cross your forearms, so that the palms of your hands are facing each other. 3. Bend your knees and put your weight on the left foot. Pull your right knee toward the chest and then cross your right thigh over the left and hook the right foot behind the left calf. 4. Stay in eagle pose for 30 seconds and then repeat with the arms and legs reversed.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Happy Baby Pose','mat', null, null, 30, '1. Lie on your back, exhale and bend your knees into the belly. 2. Inhale and hold the outside edge of your feet. 3. Open your knees and bring them up toward your armpits. 4. Hold the pose for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Mountain Pose', 'mat', null, null, 30, '1. Stand up tall with your feet together, your spine long and your body soft. 2. Bring your palms together in front of the heart. 3. Stay in mountain pose for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Pigeon Pose', 'mat', null, null, 30, '1. Start on your hands and knees and bring your left knee forward and out to the left side. 2. Slide your right leg back and tuck your right toes under. 3. Spread your left toes, elongate the spine and gaze up. 4. Stay in pigeon pose for 30 seconds, and then repeat with the opposite leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Tree Pose','mat', null, null, 30, '1. Start in mountain pose, transfer your weight to the left foot, bend your right knee and clasp your right ankle. 2. Place the sole of your right foot against the inner left thigh. 3. Lengthen your torso, raise your arms above your head and press your hands together. 4. Hold the pose for 30 seconds, reverse the legs and repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (4, 'Yoga', 'Warrior Pose', 'mat', null, null, 30, '1. Start in mountain pose, step back with your left foot and rotate your back toes, so that they point to the left front corner of the mat. 2. Bend your right knee, keeping it in line with the ankle, and point the toes straight ahead. 3. Bring the arms up and overhead with the palms facing inward. 4. Hold the pose for 30 seconds and then return to mountain pose. 5. Repeat on the opposite side.');


INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Back Stretch', 'mat', null, null, 30, '1. Start on all fours, positioning your hands directly under your shoulders and your knees under your hips. 2. Drop your head and pull the abs in, rounding your back and neck. 3. Hold for 30 seconds. 4. Raise your head and curve your back down toward the floor. 5. Hold for another 30 seconds and repeat.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Bicep Stretch','mat', null, null, 30, '1. Stand straight and clasp your hands behind your back. 2. Straighten your arms and rotate your hands, so that the palms face downward. 3. Raise your arms and hold for 30 seconds.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Calf Stretch', 'mat', null, null, 30, '1. Stand holding onto a wall with your arms extended and your toes pointing forward. 2. Extend your right leg back, keeping your right foot flat on the floor. 3. Lean forward and slowly bend your left knee until you feel the stretch in your back calf. 4. Hold the stretch for 30 seconds and repeat on the left leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Chest Stretch', 'mat', null, null, 30, '1. With the side of your body facing a wall, place your left palm on the wall. 2. Slowly rotate your torso to the right, until you feel the stretch in your chest and in your left shoulder. 3. Hold for 30 seconds and repeat on the right side.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Glute Stretch', 'mat', null, null, 30, '1. Lie flat on your back and bend both knees. 2. Cross the right leg over the left and bring both knees toward your chest. 3. Gently pull the left leg toward you until you feel a stretch in your glutes. 4. Hold the stretch for 30 seconds and repeat with the other leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Hamstring Stretch', 'mat', null, null, 30, '1. Lie on your back and lift your left leg. 2. Gently pull your thigh toward your chest until you feel a stretch in your hamstrings. 3. Hold the stretch for 30 seconds and then repeat with the other leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Hip Flexor Stretch', 'mat', null, null, 30, '1. Kneel on your right leg and bend your left leg in front of you at a 90 degree angle. 2. Shift your weight forward until you feel a stretch in your hip. 3. Switch legs and repeat the stretch.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Quad Stretch', 'mat', null, null, 30, '1. Stand up tall and shift your weight to the right leg. 2. Lift your left foot and grasp it with your left hand. 3. Pull the left foot toward your glutes until you feel the stretch in your quads. 4. Hold the stretch for 30 seconds and repeat with the other leg.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Shoulder Stretch','mat', null, null, 30, '1. Bring one arm across your upper body and hold it straight. 2. Grasp the elbow with the other arm and gently pull toward your chest. 3. Hold for 30 seconds and repeat on the other arm.');

INSERT INTO workouts (workout_id, category, exercise, equipment, rounds, reps, hold, instructions) VALUES (5, 'Stretching', 'Tricep Stretch', 'mat', null, null, 30, '1. Stand straight with your feet hip width apart. Lift and bend one arm until your hand is in the middle of the upper back. 2. Grab the elbow with the other hand and gently pull. 3. Hold for 30 seconds and repeat on the other arm.');






