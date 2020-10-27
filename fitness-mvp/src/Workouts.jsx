import React from 'react';
import Table from 'react-bootstrap/Table';

import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

const Workouts = () => {
  return (
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Completed</th>
      <th>Exercise</th>
      <th>Description</th>
      <th>Reps</th>
      <th>Rounds</th>
      <th>Weights</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th><Checkbox/></th>
      <td>1</td>
      <td>blood</td>
      <td>10</td>
      <td>3</td>
      <td>8</td>
    </tr>
     <tr>
     <th><Checkbox/></th>
      <td>2</td>
      <td>sweat</td>
      <td>10</td>
      <td>3</td>
      <td>8</td>
    </tr>
     <tr>
     <th><Checkbox/></th>
      <td>3</td>
      <td>tears</td>
      <td>10</td>
      <td>3</td>
      <td>8</td>
    </tr>
  </tbody>
</Table>
  )
}

export default Workouts;