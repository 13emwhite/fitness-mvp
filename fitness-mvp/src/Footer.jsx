import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      backgroundColor:'#9670ff'
    },
    }
  ));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" size="small" className={classes.button}>
        <FacebookIcon/>
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <InstagramIcon/>
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <TwitterIcon/>
      </Button>
    </div>
  )
}

export default Footer;