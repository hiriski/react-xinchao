import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { openDialogAddNewPhrase } from 'src/modules/common/actions';

const FloatingButtonAddPhrase = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isOpenDialogAddNewPhrase } = useSelector(
    (state) => state.commonReducer,
  );

  const handleClick = () => {
    dispatch(openDialogAddNewPhrase());
  };

  return (
    <React.Fragment>
      {!isOpenDialogAddNewPhrase ? (
        <div className={classes.root}>
          <Fab
            color="secondary"
            aria-label="Add phrase"
            size="medium"
            onClick={handleClick}
            // component={RouterLink}
            // to={ROUTES.PREFIX + ROUTES.CREATE_PHRASE}
          >
            <AddIcon />
          </Fab>
        </div>
      ) : null}
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(5),
    zIndex: theme.zIndex.tooltip,
  },
}));

export default FloatingButtonAddPhrase;
