import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ROUTES } from 'src/config';
import { resetAuthState, revokeToken } from 'src/modules/auth/actions';

const ProfilePage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isLoggedOut } = useSelector((state) => state.authReducer);

  const handleClickLogout = () => {
    dispatch(revokeToken());
  };

  // React.useEffect(() => {
  //   if (isLoggedOut) {
  //     navigate(ROUTES.LOGGEDOUT);
  //     dispatch(resetAuthState());
  //   }
  // }, [isLoggedOut]);

  return (
    <React.Fragment>
      <h1>Profile page</h1>
      <Button
        onClick={handleClickLogout}
        disableElevation
        color="primary"
        variant="contained"
        to="/"
      >
        Sign out
      </Button>
    </React.Fragment>
  );
};

export default ProfilePage;
