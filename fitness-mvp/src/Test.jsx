import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Table from 'react-bootstrap/Table';
import Favorite from '@material-ui/icons/Favorite';

const Test = () => {
  return (
      <div id='test'>
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
            <th>Weights</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th><Checkbox/></th>
            <td>Bicep</td>
            <td>Description</td>
            <td>10</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
          <th><Checkbox/></th>
            <td>Tricep</td>
            <td>sweat</td>
            <td>10</td>
            <td>3</td>
            <td>8</td>
          </tr>
          <tr>
          <th><Checkbox/></th>
            <td>Sholders</td>
            <td>tears</td>
            <td>10</td>
            <td>3</td>
            <td>8</td>
          </tr>
        </tbody>
      </Table>
      </div>
  )
}

export default Test;