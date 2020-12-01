import React from 'react';

import Abs from './Abs.jsx';
import LowerBody from './LowerBody.jsx';
import Stretching from './Stretching.jsx';
import UpperBody from './UpperBody.jsx';
import Yoga from './Yoga.jsx';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Workouts = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  var upper = props.workoutList.map(item => {
    return <UpperBody item={(item.workout_id === 1)} info={item} key={item.id}/>
  })

  let lower = props.workoutList.map(item => {
    console.log('item:', item)
    return <LowerBody item={(item.workout_id === 2)} info={item}/>
  })

  let abs = props.workoutList.map(item => {
    console.log('item:', item)
    return <Abs item={(item.workout_id === 3)} info={item}/>
  })

  let yoga = props.workoutList.map(item => {
    console.log('item:', item)
    return <Yoga item={(item.workout_id === 4)} info={item}/>
  })

  let stretch = props.workoutList.map(item => {
    console.log('item:', item)
    return <Stretching item={(item.workout_id === 5)} info={item}/>
  })

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={2}>
         <Grid item xs={2}>
          {upper}
        </Grid>
         <Grid item xs={2}>
          {lower}
        </Grid>
         <Grid item xs={2}>
          {abs}
        </Grid>
         <Grid item xs={2}>
          {yoga}
        </Grid>
         <Grid item xs={2}>
          {stretch}
        </Grid>
      </Grid>
    </div>
  )
}

export default Workouts;