import React from 'react';
import WorkoutForm from './WorkoutForm.jsx';
import { Button } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  title:{
    textAlign: 'center'
  },
  button: {
    backgroundColor:'#9670ff',
    margin: '5px'
  },
  paper: {
    position: 'absolute',
    width: 1000,
    height: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalWindow = () => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.title}>Create A Workout</h2>
      <WorkoutForm/>
      <br></br>
      <br></br>
        <Button
        type="submit"
        variant="contained"
        size="small"
        className={classes.button}>
        Submit Workout
      </Button>
      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={handleClose}
        className={classes.button}>
        Exit Form
      </Button>
    </div>
  );

  return (
    <div>
      <Button variant="contained" size="small" type="button" onClick={handleOpen} className={classes.button}>
        Add Workout
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default ModalWindow;