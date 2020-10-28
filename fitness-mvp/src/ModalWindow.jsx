import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WorkoutForm from './WorkoutForm.jsx';

const ModalWindow= () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id='modal'>

      <Button variant="primary" onClick={handleShow}>
        Add Workout
      </Button>

      <Modal show={show} onHide={handleClose} size="medium"
      aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header>
          <Modal.Title>Workout Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WorkoutForm/>
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