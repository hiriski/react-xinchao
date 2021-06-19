import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from 'src/config';

const PhrasebookListHeader = ({ title, color, phrases_count, Icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <Container className={classes.container}>
        <Box className={classes.phrasebookInfo}>
          <Box className={classes.icon} mr={2} style={{ color }}>
            {Icon}
          </Box>
          <Box className={classes.textContainer}>
            <Typography component="h1" variant="h1" className={classes.title}>
              {title}
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              className={classes.phrases_count}
            >
              {phrases_count} phrases
            </Typography>
          </Box>
        </Box>
        <Button
          component={RouterLink}
          to={ROUTES.PREFIX + ROUTES.CREATE_PHRASE}
          variant="contained"
          color="default"
          className={classes.button}
        >
          Add Phrase
        </Button>
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

PhrasebookListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  phrases_count: PropTypes.number.isRequired,
  color: PropTypes.string,
  Icon: PropTypes.any,
};

export default PhrasebookListHeader;
