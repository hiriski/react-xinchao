import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import ProfileCoverImage from 'src/containers/account/profile/profile-cover-image';
import ProfileInfo from 'src/containers/account/profile/profile-info';

const sampleUser = {
  id: 1,
  name: 'Riski',
  email: 'hi@riski.me',
  username: 'riski',
  photo_url: 'https://apixinchao.riski.me/storage/images/users/4yearsago.jpg',
  cover_photo_url: null,
  social_account: null,
  level: {
    id: 1,
    name: 'Level 1',
    description: null,
  },
  gender: null,
  phone_number: null,
  birthday: null,
  about: null,
  created_at: '2021-05-09T06:02:32.000000Z',
};

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  return (
    <React.Fragment>
      {sampleUser.cover_photo_url && (
        <ProfileCoverImage photo={user.cover_photo_url} />
      )}
      <ProfileInfo
        hasCoverPhoto={Boolean(sampleUser.cover_photo_url)}
        user={user}
      />
    </React.Fragment>
  );
};

export default ProfilePage;
