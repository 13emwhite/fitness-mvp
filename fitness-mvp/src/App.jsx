import React from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Workouts from './Workouts.jsx';

import axios from 'axios';
import './App.css';

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
      <Header/>
      <Workouts workoutList={this.state.workouts}/>
      <Footer/>
      </div>
    );
  }
}

export default App;
