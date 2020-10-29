import React from 'react';
import axios from 'axios';
import Workouts from './Workouts.jsx';
import ModalWindow from './ModalWindow.jsx';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      workout_id: "",
      category: "",
      exercise: "",
      reps: "",
      rounds: ""
    }

    this.getWorkouts = this.getWorkouts.bind(this);

    this.addWorkouts = this.addWorkouts.bind(this);
    this.addWorkoutCategory = this.addWorkoutCategory.bind(this);
    this.addWorkoutExercise = this.addWorkoutExercise.bind(this);
    this.addWorkoutReps = this.addWorkoutReps.bind(this);
    this.addWorkoutRounds = this.addWorkoutRounds.bind(this);

    this.submitNewWorkout = this.submitNewWorkout.bind(this);
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

  addWorkouts() {
    axios.post('http://localhost:3003/workouts', {
      workout_id: this.state.workout_id,
      category: this.state.category,
      exercise: this.state.exercise,
      reps: this.state.reps,
      rounds: this.state.rounds
    })
    .then(results => {
      console.log('results from post:', results)
      // this.getWorkouts();
    })
    .catch(error => {
      console.log('error adding workout')
    })
  }

  submitNewWorkout(event) {
    event.preventDefault();
    this.addWorkouts();
  }

  addWorkoutId(event) {
    event.preventDefault();
    this.setState({workout_id: event.target.value})
  }

  addWorkoutCategory(event) {
    event.preventDefault();
    this.setState({category: event.target.value})
  }

  addWorkoutExercise(event) {
    event.preventDefault();
    this.setState({exercise: event.target.value})
  }

  addWorkoutReps(event) {
    event.preventDefault();
    this.setState({reps: event.target.value})
  }

  addWorkoutRounds(event) {
    event.preventDefault();
    this.setState({rounds: event.target.value})
  }

  render() {
    return (
      <div>
        <h1 className='title'><FitnessCenterIcon/><strong>Fitness Improvement Training</strong> <FitnessCenterIcon/></h1>
        <p className='title'>Welcome to FIT, an online platform for all of your workout needs!</p>
        <br></br>
        <div id="nav">
          <strong><p id="home">Home</p></strong>
          <strong><p id="upper">Upper Body</p></strong>
          <strong><p id="lower">Lower Body</p></strong>
          <strong><p id="abs">Abs</p></strong>
        </div>
        <Workouts workoutList={this.state.workouts}/>
        <ModalWindow
          id={this.state.workout_id}
          category={this.state.category}
          exercise={this.state.exercise}
          reps={this.state.reps}
          rounds={this.state.rounds}
          changeId={this.addWorkoutId}
          changeCategory={this.addWorkoutCategory}
          changeExercise={this.addWorkoutExercise}
          changeReps={this.addWorkoutReps}
          changeRounds={this.addWorkoutRounds}
          submitWorkout={this.submitNewWorkout}
        />
      </div>
    );
  }

}

export default App;
