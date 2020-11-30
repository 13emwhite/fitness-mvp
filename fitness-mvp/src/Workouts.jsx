import React from 'react';
import TestCardOne from './TestCardOne.jsx';
import TestCardTwo from './TestCardTwo.jsx';
import TestCardThree from './TestCardThree.jsx';
import TestCardFour from './TestCardFour.jsx';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const Workouts = (props) => {
  console.log('props from app:', props)

  let testOne = props.workoutList.map(item => {
    console.log('item:', item)
    return <TestCardOne item={(item.workout_id === 1)} info={item}/>
  })

  let testTwo = props.workoutList.map(item => {
    console.log('item:', item)
    return <TestCardTwo item={(item.workout_id === 2)} info={item}/>
  })

  let testThree = props.workoutList.map(item => {
    console.log('item:', item)
    return <TestCardThree item={(item.workout_id === 3)} info={item}/>
  })

  let testFour = props.workoutList.map(item => {
    console.log('item:', item)
    return <TestCardFour item={(item.workout_id === 3)} info={item}/>
  })

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {testOne}
        </Grid>
        <Grid item xs={3}>
          {testTwo}
        </Grid>
        <Grid item xs={3}>
          {testThree}
        </Grid>
        <Grid item xs={3}>
          {testFour}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Workouts;