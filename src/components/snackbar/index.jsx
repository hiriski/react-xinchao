import React from 'react';
import MaterialUISnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from 'src/modules/alert/actions';

const Snackbar = () => {
  const { show, message, autoHideDuration, severity } = useSelector(
    (state) => state.alertReducer,
  );
  const dispatch = useDispatch();

  /** close alert */
  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <MaterialUISnackbar
      open={show}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        elevation={8}
        onClose={handleClose}
        severity={severity}
        variant="filled"
      >
        {message}
      </Alert>
    </MaterialUISnackbar>
  );
};

export default Snackbar;
