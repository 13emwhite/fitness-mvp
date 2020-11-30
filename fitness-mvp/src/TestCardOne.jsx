import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { makeStyles } from '@material-ui/core/styles';


// Upper Body workouts
 const TestCardOne = (props) => {
  // console.log('props from workouts file:', props)

  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: 'center',
    }
  }));

  const classes = useStyles();

  const PurpleCheckbox = withStyles({
    root: {
      color: '#9670ff',
      '&$checked': {
        color: '#9670ff',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const PurpleHeart = withStyles({
    root: {
      color: '#9670ff',
      '&$checked': {
        color: '#9670ff',
      },
    },
    spacing: {
      margin: '5px'
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  if (props.item === true) {
    return (
      <div>
      <Card variant="outlined">
        <CardHeader className={classes.title}
          title={props.info.category}
        />
        <CardContent>
          <Typography>
            <strong>Exercise:</strong> {props.info.exercise}
          </Typography>
          <Typography>
            <strong>Equipment:</strong> Dumbbells
          </Typography>
          <Typography>
          <strong>Reps:</strong>  {props.info.reps}
          </Typography>
          <Typography>
          <strong>Rounds:</strong>  {props.info.rounds}
          </Typography>

          <Typography>
          <strong>Instructions:</strong>
            <br></br>
            Stand straight with a dumbbell in each hand, your feet shoulder-width apart and hands by your sides. Squeeze the biceps and lift the dumbbells. Keep the elbows close to your body and the upper arms stationary, only the forearms should move. Once the dumbbells are at shoulder level, slowly lower the arms to the starting position.
          </Typography>
          <CardActions>
          <FormControlLabel
            control={<PurpleCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          />
          <FormControlLabel
            control={<PurpleHeart icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          />
          </CardActions>
        </CardContent>
      </Card>
      <br></br>
      </div>
    )
  }
  return <></>;
}


export default TestCardOne;