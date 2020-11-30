import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const WorkoutForm = () => {

  const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor:'#9670ff'
    },
    }
  ));

  const classes = useStyles();

  return (
    <form>
    <TextField
      required
      type="text"
      label="Workout Category"
      variant="outlined"
      size="small"
    />
    <TextField
      required
      label="Exercise Name"
      variant="outlined"
      size="small"
    />
    <TextField
      required
      label="Equipment Needed"
      variant="outlined"
      size="small"
    />
    <TextField
      required
      type="number"
      defaultValue="8"
      label="Number of Reps"
      variant="outlined"
      size="small"
    />
    <TextField
      required
      type="number"
      defaultValue="3"
      label="Number of Rounds"
      variant="outlined"
      size="small"
    />
    <TextField
      required
      label="Exercise Instructions"
      multiline
      rows={4}
      variant="outlined"
      size="small"
    />
  </form>
  )
}

export default WorkoutForm;