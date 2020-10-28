import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WorkoutForm = () => {
  return (
    <Form>
  <Form.Group>
    <Form.Label>Category</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Category" required/>
    <br></br>
  </Form.Group>
  <br></br>
  <Form.Group>
    <Form.Label>Exercise</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Exercise Name" required/>
    <Form.Control type="text" placeholder="Exercise Name" required/>
    <Form.Control type="text" placeholder="Exercise Name" required/>
    <Form.Control type="text" placeholder="Exercise Name"/>
    <Form.Control type="text" placeholder="Exercise Name"/>
  </Form.Group>
  <br></br>
  <Form.Group>
    <Form.Label>Reps</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Number of Reps"/>
  </Form.Group>
  <br></br>
  <Form.Group>
    <Form.Label>Rounds</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Number of Rounds"/>
  </Form.Group>
  <br></br>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )
}

export default WorkoutForm;

