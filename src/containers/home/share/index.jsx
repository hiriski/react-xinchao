import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

const HomeShare = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>Share</Typography>
      <Typography variant="h2">Share to your friends.</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default HomeShare;
