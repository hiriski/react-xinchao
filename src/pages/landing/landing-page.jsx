import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography component="h1" variant="h2">
        Xin Chào
      </Typography>
      <Typography component="p" variant="subtitle2">
        Speak Vietnamese with confident
      </Typography>
      <Box mt={2}>
        <Button
          color="primary"
          variant="contained"
          component={RouterLink}
          disableElevation
          to="/app"
        >
          Go to app
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
