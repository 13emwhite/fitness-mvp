import React from 'react';
import axios from 'axios';
import Workouts from './Workouts.jsx';
// import Test from './Test.jsx';
import ModalWindow from './ModalWindow.jsx';

import './App.css';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: []
    }

    this.getWorkouts = this.getWorkouts.bind(this);
  }

  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts() {
    axios.get('http://localhost:3003/workouts')
    .then(results => {
      this.setState({workouts: results.data}, () => {
        console.log('new workouts state:', this.state.workouts)
      })
    })
    .catch(error => {
      console.log('error getting all workouts')
    })
  }

  render() {
    return (
      <div>
        <h1 className='title'><FitnessCenterIcon/> Fitness Improvement Training <FitnessCenterIcon/></h1>
        <Workouts workoutList={this.state.workouts}/>
        <ModalWindow/>
      </div>
    );
  }
}

export default App;
