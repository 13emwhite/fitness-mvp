import React from 'react';
import UpperBody from './UpperBody.jsx';
import LowerBody from './LowerBody.jsx';
import Abs from './Abs.jsx';

const Workouts = (props) => {

  var upper = props.workoutList.map(item => {
    return(
      <div>
        <UpperBody item={item}/>
        <LowerBody item={item}/>
        <Abs item={item}/>
      </div>
    )
  })

  return (
    <div>
      {upper}
    </div>
  )
}

export default Workouts;