import React from 'react';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const Header = () => {
  return (
    <div>
      <h1 className='title'><FitnessCenterIcon/> <strong>Fitness Improvement Training</strong> <FitnessCenterIcon/></h1>
      <h3 className='title'>Welcome to FIT, an online platform for all of your workout needs!</h3>
    </div>
  )
}

export default Header;