import './App.css';
// import logo from './logo.svg';

import React from 'react';
import Workouts from './Workouts.jsx';

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


class App extends React.Component {
  render() {
    return (
      <div>
      <h1 class='title'>Emily White MVP</h1>
      <Workouts />
      </div>
    );
  }
}

export default App;
