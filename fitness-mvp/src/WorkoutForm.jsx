import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WorkoutForm = (props) => {
  console.log('props from ModalWindow:', props);
  return (
    <Form onSubmit={props.submitWorkoutValue}>
      <Form.Group controlId="exerciseOne">
      <Form.Label>Workout ID</Form.Label>
        <Form.Control
        type="text"
        placeholder="Workout ID Name"
        value={props.idValue}
        onChange={props.changeIdValue}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
        type="text"
        placeholder="Category Name"
        value={props.categoryValue}
        onChange={props.changeCategoryValue}
        />
        <Form.Label>Exercise</Form.Label>
        <Form.Control
        type="text"
        placeholder="Exercise Name"
        value={props.exerciseValue}
        onChange={props.changeExerciseValue}
        />
        <Form.Label>Reps</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Reps"
         value={props.repsValue}
         onChange={props.changeRepsValue}
        />
        <Form.Label>Rounds</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Rounds"
         value={props.roundsValue}
         onChange={props.changeRoundsValue}/>
      </Form.Group>
      <br></br>
      <Form.Group controlId="exerciseTwo">
      <Form.Label>Workout ID</Form.Label>
        <Form.Control
        type="text"
        placeholder="Workout ID Name"
        value={props.idValue}
        onChange={props.changeIdValue}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
        type="text"
        placeholder="Category Name"
        value={props.categoryValue}
        onChange={props.changeCategoryValue}
        />
        <Form.Label>Exercise</Form.Label>
        <Form.Control
        type="text"
        placeholder="Exercise Name"
        value={props.exerciseValue}
        onChange={props.changeExerciseValue}
        />
        <Form.Label>Reps</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Reps"
         value={props.repsValue}
         onChange={props.changeRepsValue}
        />
        <Form.Label>Rounds</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Rounds"
         value={props.roundsValue}
         onChange={props.changeRoundsValue}/>
      </Form.Group>
      <br></br>
      <Form.Group controlId="exerciseThree">
      <Form.Label>Workout ID</Form.Label>
        <Form.Control
        type="text"
        placeholder="Workout ID Name"
        value={props.idValue}
        onChange={props.changeIdValue}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
        type="text"
        placeholder="Category Name"
        value={props.categoryValue}
        onChange={props.changeCategoryValue}
        />
        <Form.Label>Exercise</Form.Label>
        <Form.Control
        type="text"
        placeholder="Exercise Name"
        value={props.exerciseValue}
        onChange={props.changeExerciseValue}
        />
        <Form.Label>Reps</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Reps"
         value={props.repsValue}
         onChange={props.changeRepsValue}
        />
        <Form.Label>Rounds</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Rounds"
         value={props.roundsValue}
         onChange={props.changeRoundsValue}/>
      </Form.Group>
      <br></br>
      <Form.Group controlId="exerciseFour">
      <Form.Label>Workout ID</Form.Label>
        <Form.Control
        type="text"
        placeholder="Workout ID Name"
        value={props.idValue}
        onChange={props.changeIdValue}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
        type="text"
        placeholder="Category Name"
        value={props.categoryValue}
        onChange={props.changeCategoryValue}
        />
        <Form.Label>Exercise</Form.Label>
        <Form.Control
        type="text"
        placeholder="Exercise Name"
        value={props.exerciseValue}
        onChange={props.changeExerciseValue}
        />
        <Form.Label>Reps</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Reps"
         value={props.repsValue}
         onChange={props.changeRepsValue}
        />
        <Form.Label>Rounds</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Rounds"
         value={props.roundsValue}
         onChange={props.changeRoundsValue}/>
      </Form.Group>
      <br></br>
      <Form.Group controlId="exerciseFive">
      <Form.Label>Workout ID</Form.Label>
        <Form.Control
        type="text"
        placeholder="Workout ID Name"
        value={props.idValue}
        onChange={props.changeIdValue}
        />
        <Form.Label>Category</Form.Label>
        <Form.Control
        type="text"
        placeholder="Category Name"
        value={props.categoryValue}
        onChange={props.changeCategoryValue}
        />
        <Form.Label>Exercise</Form.Label>
        <Form.Control
        type="text"
        placeholder="Exercise Name"
        value={props.exerciseValue}
        onChange={props.changeExerciseValue}
        />
        <Form.Label>Reps</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Reps"
         value={props.repsValue}
         onChange={props.changeRepsValue}
        />
        <Form.Label>Rounds</Form.Label>
         <Form.Control
         type="text"
         placeholder="Total Rounds"
         value={props.roundsValue}
         onChange={props.changeRoundsValue}/>
      </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default WorkoutForm;

