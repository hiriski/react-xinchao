import React from 'react';
import { Favorite } from '@material-ui/icons';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Logo from 'src/components/logo';
import clsx from 'clsx';
import { APP_NAME } from 'src/config';

const FooterContainer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Box textAlign="center" mb={3}>
          <Logo logoStyle={clsx(classes.logoImg)} />
          <Typography className={clsx(classes.textLogo)} component="h3" noWrap>
            {APP_NAME}
          </Typography>
        </Box>
        <Box mb={1} className={classes.boxBuildWith}>
          <Typography className={classes.textBuildWith} component="p">
            <Typography variant="subtitle2" component="span">
              Crafted with
            </Typography>
            <Favorite />
            <Typography variant="subtitle2" component="span">
              at the Beach
            </Typography>
          </Typography>
          <Box textAlign="center">
            <Typography variant="subtitle2" component="p">
              Indonesia - Vietnam
            </Typography>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0, 4, 0),
  },
  logoImg: {
    width: 32,
  },
  textLogo: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
  },
  boxBuildWith: {
    '& svg': {
      color: 'red',
      fontSize: 18,
      margin: '0 6px',
    },
  },
  textBuildWith: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default FooterContainer;
