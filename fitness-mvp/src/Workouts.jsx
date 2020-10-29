import React from 'react';
import UpperBody from './UpperBody.jsx';
import LowerBody from './LowerBody.jsx';
import Abs from './Abs.jsx';

const Workouts = (props) => {
  // console.log('props from app:', props);

  var upper = props.workoutList.map(item => {
    return(
      <div>
        <UpperBody item={item} id="upper"/>
        <LowerBody item={item} id="lower"/>
        <Abs item={item} id="abs"/>
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