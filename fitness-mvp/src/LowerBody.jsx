import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import Table from 'react-bootstrap/Table';

const LowerBody = (props) => {

  const LowerBodyOne = () => {
    if (props.item.category === 'Lower Body' && props.item.workout_id === 3) {
      return (
        <div>
           <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          />
          <Table>
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
                <td>{props.item.rounds}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    } else {
      return null;
    }
  }

  const LowerBodyTwo= () => {
    if (props.item.category === 'Lower Body' && props.item.workout_id === 4) {
      return (
        <div>
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
                <td>{props.item.rounds}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )
    } else {
      return null;
    }
  }
    return (
      <div id='lower_workout'>
        {LowerBodyOne()}
        {LowerBodyTwo()}
      </div>
    )
  }

export default LowerBody;