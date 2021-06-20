import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const ProfileCoverImage = ({ photo }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container disableGutters>
      <Box
        className={classes.root}
        width="100%"
        style={{ backgroundImage: `url(${photo})` }}
      ></Box>
    </Container>
  );
};

const IMAGE_HEIGHT = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: IMAGE_HEIGHT,
    maxHeight: IMAGE_HEIGHT,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));

ProfileCoverImage.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default ProfileCoverImage;
