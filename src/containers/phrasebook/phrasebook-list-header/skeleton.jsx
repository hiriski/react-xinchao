import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { Skeleton } from '@material-ui/lab';

const PhrasebookListHeaderSkeleton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.phrasebookInfo}>
          <Box className={classes.textContainer}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

const HEADER_HEIGHT = 160;
const ICON_WIDTH = 46;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: HEADER_HEIGHT - theme.spacing(2),
    backgroundColor: theme.palette.text.disabled,
    [theme.breakpoints.up('sm')]: {
      height: HEADER_HEIGHT,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEADER_HEIGHT - theme.spacing(6),
  },
  phrasebookInfo: {
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'inherit',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 24,
    },
  },
  icon: {
    width: ICON_WIDTH - 6,
    height: ICON_WIDTH - 6,
    borderRadius: ICON_WIDTH - 6,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      width: ICON_WIDTH,
      height: ICON_WIDTH,
      borderRadius: ICON_WIDTH,
    },
    '& svg': {
      fontSize: 22,
      [theme.breakpoints.up('sm')]: {
        fontSize: 26,
      },
    },
  },
}));

export default PhrasebookListHeaderSkeleton;
