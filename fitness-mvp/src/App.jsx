import React from 'react';
import axios from 'axios';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import ModalWindow from './ModalWindow.jsx';
import Workouts from './Workouts.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
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

  // addWorkouts() {
  //   axios.post('http://localhost:3003/workouts', {
  //     workout_id: this.state.workout_id,
  //     category: this.state.category,
  //     exercise: this.state.exercise,
  //     reps: this.state.reps,
  //     rounds: this.state.rounds
  //   })
  //   .then(results => {
  //     console.log('results from post:', results)
  //     // this.getWorkouts();
  //   })
  //   .catch(error => {
  //     console.log('error adding workout')
  //   })
  // }

  render() {
    return (
      <div>
      <Header/>
      <br></br>
      <Workouts workoutList={this.state.workouts}/>
      <ModalWindow />
      <br></br>
      <Footer/>
      </div>
    );
  }
}

export default App;
