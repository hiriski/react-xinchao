import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import ProfileCoverImage from 'src/containers/account/profile/profile-cover-image';
import ProfileInfo from 'src/containers/account/profile/profile-info';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  return (
    <React.Fragment>
      {user.cover_photo_url && (
        <ProfileCoverImage photo={user.cover_photo_url} />
      )}
      <ProfileInfo user={user} />
    </React.Fragment>
  );
};

export default ProfilePage;
