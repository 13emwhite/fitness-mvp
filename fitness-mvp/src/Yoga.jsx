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
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


// Yoga poses

 const Yoga = (props) => {

  const useStyles = makeStyles((theme) => ({
    title: {
      textAlign: 'center',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            <strong>Equipment:</strong> {props.info.equipment}
          </Typography>
          <Typography>
          <strong>Time:</strong> {props.info.hold} seconds
          </Typography>
          </CardContent>
          <CardActions>
            <FormControlLabel
              control={<PurpleCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
            />
            <FormControlLabel
              control={<PurpleHeart icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            />
          <IconButton
          className={(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph><strong>Instructions:</strong></Typography>
          <Typography paragraph>{props.info.instructions}</Typography>
          </CardContent>
          </Collapse>
      </Card>
      <br></br>
      </div>
    )
  }
  return <></>;
}


export default Yoga;