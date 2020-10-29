import React from 'react';
import axios from 'axios';
import Workouts from './Workouts.jsx';
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
      workouts: [],
      // workoutGroup: [],
      // category: []
    }

    this.getWorkouts = this.getWorkouts.bind(this);
    // this.getWorkout = this.getWorkout.bind(this);
    // this.getCategory = this.getCategory.bind(this);
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


  // getWorkout(id) {
  //   axios.get(`http://localhost:3003/workouts/:${id}`)
  //   .then(results => {
  //     this.setState({workoutGroup: results.data}, () => {
  //       console.log('new workoutGroup state:', this.state.workoutGroup)
  //     })
  //   })
  //   .catch(error => {
  //     console.log('error getting all workouts')
  //   })
  // }

  // getCategory(category) {
  //   axios.get(`http://localhost:3003/workouts/:${category}`)
  //   .then(results => {
  //     this.setState({category: results.data}, () => {
  //       console.log('new category state:', this.state.category)
  //     })
  //   })
  //   .catch(error => {
  //     console.log('error getting all workouts')
  //   })
  // }

  render() {
    return (
      <div>
        <h1 className='title'><FitnessCenterIcon/> Fitness Improvement Training <FitnessCenterIcon/></h1>
        {/* <h3>Upper Body</h3> */}
        <Workouts workoutList={this.state.workouts}/>
        {/* <h3>Lower Body</h3> */}
        {/* <h3>Abs</h3> */}
        <ModalWindow/>
      </div>
    );
  }

}

export default App;
