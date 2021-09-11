import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialogConfirmLogout } from 'src/modules/common/actions';
import { revokeToken } from 'src/modules/auth/actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogConfirmLogout = () => {
  const dispatch = useDispatch();
  const { isOpenDialogConfirmLogout } = useSelector(
    (state) => state.commonReducer,
  );
  const { isLoggedOut } = useSelector((state) => state.authReducer);

  const handleClose = () => {
    closeDialog();
  };

  const closeDialog = () => {
    dispatch(closeDialogConfirmLogout());
  };

  const handleClickYes = () => {
    dispatch(revokeToken());
  };

  React.useEffect(() => {
    if (isLoggedOut) {
      closeDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedOut]);

  return (
    <Dialog
      maxWidth="sm"
      open={isOpenDialogConfirmLogout}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Want to log out ?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Hei, Are you sure want to Logout ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button color="secondary" onClick={handleClickYes}>
          Yes, of course
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirmLogout;
