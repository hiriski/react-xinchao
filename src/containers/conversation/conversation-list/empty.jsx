import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookIcon from '@material-ui/icons/Book';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/config';

const EmptyConversation = ({ text, category }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES.PREFIX + ROUTES.CREATE_PHRASE);
  };

  return (
    <div className={classes.root}>
      <Box mb={1} className={classes.icon}>
        <BookIcon />
      </Box>
      <Typography
        color="inherit"
        className={classes.text}
        variant="h3"
        component="h3"
      >
        {text}
      </Typography>

      <Box className={classes.buttonContainer} textAlign="center" mt={3}>
        <Button
          onClick={handleButtonClick}
          variant="outlined"
          color="secondary"
        >
          Add Phrase
        </Button>
        <Box mt={1}>
          <Typography color="inherit" variant="subtitle2" component="p">
            Add new phrase to category {category}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    minHeight: 120,
    flexDirection: 'column',
    padding: theme.spacing(4, 0),
    color: theme.palette.text.disabled,
  },
  buttonContainer: {
    // textAlign: 'center',
  },
  icon: {
    '& svg': {
      fontSize: 52,
    },
  },
  text: {
    fontSize: 18,
  },
}));

EmptyConversation.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default EmptyConversation;
