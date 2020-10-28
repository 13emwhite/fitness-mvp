import './App.css';
// import logo from './logo.svg';

import React from 'react';
import Workouts from './Workouts.jsx';
import Test from './Test.jsx';
import ModalWindow from './ModalWindow.jsx';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class App extends React.Component {
  render() {
    return (
      <Container>
        <h1 className='title'>Emily White MVP</h1>
        <Row>
          <Col sm={6}>
            <Workouts />
          </Col>

          <Col sm={6}>
            <Test />
          </Col>
        </Row>
        <ModalWindow/>
      </Container>
    );
  }
}

export default App;
