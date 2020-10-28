import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Table from 'react-bootstrap/Table';
import Favorite from '@material-ui/icons/Favorite';

const Workouts = () => {
  return (
    <div id='workout'>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
      />

      <Table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Category</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Rounds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Checkbox/></td>
            <td>Arms</td>
            <td>Bicep Curls</td>
            <td>10</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
  </div>
  )
}

export default Workouts;