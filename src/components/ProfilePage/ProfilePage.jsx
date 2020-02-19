import React from 'react';
import { ProfileStyles, ButtonStyles } from '../../styles';

const ProfilePage = props => {
  const { data } = props;
  return (
    <ProfileStyles>
      <h2>Profile Page</h2>
      <div className='Flex-Content'>
        <img src={data.avatar_url} alt={data.name} />
        <p className='UserName'>{data.name}</p>
      </div>
      <p>{data.company}</p>
      <ButtonStyles className='Button' onClick={props.toggleFind}>
        Search Again
      </ButtonStyles>
    </ProfileStyles>
  );
};

export default ProfilePage;
