import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Table from 'react-bootstrap/Table';

const Test = (props) => {
  console.log('props from workouts:', props);
  return (
      <div id='test'>
        
        {/* <p>{props.item.workout_id}</p>
        <p>{props.item.category}</p>
        <p>{props.item.exercise}</p>
        <p>{props.item.reps}</p>
        <p>{props.item.rounds}</p> */}

        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        />

        <Table bordered>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Rounds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Checkbox/></td>
            <td>{props.item.exercise}</td>
            <td>{props.item.reps}</td>
            <td>{props.item.reps}</td>
          </tr>
        </tbody>
      </Table>
      </div>
  )
}

export default Test;