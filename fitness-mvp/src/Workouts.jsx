import React from 'react';
import Test from './Test.jsx';

const Workouts = (props) => {
  console.log('props from app:', props);

  var test = props.workoutList.map(item => {
    return <Test item={item}/>
  })

  return (
    <div id='workout'>
      {test}
    </div>
  )
}

export default Workouts;