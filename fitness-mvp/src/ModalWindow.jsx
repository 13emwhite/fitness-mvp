import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WorkoutForm from './WorkoutForm.jsx';

const ModalWindow= (props) => {
  console.log('props from app:', props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id='modal'>

      <Button variant="primary" onClick={handleShow}>
        Add Workout
      </Button>

      <Modal show={show} onHide={handleClose}
      size="small"
      aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header>
          <Modal.Title>Create Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WorkoutForm
          idValue={props.id}
          categoryValue={props.category}
          exerciseValue={props.exercise}
          repsValue={props.reps}
          roundsValue={props.rounds}
          changeIdValue={props.addWorkoutId}
          changeCategoryValue={props.addWorkoutCategory}
          changeExerciseValue={props.addWorkoutExercise}
          changeRepsValue={props.addWorkoutReps}
          changeRoundsValue={props.addWorkoutRounds}
          submitWorkoutValue={props.submitWorkout}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalWindow;