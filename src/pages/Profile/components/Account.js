import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileByAccount } from '../../../redux/action/Profile';


const Account = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.authentication);
  const userId = currentUser.id;

  console.log(profile);

  useEffect(() => {
    dispatch(getProfileByAccount(userId));
  } , [dispatch, userId]);
  return (
    <div>
      {profile.map((profile) => {
        const { about, email, facebook, instagram, linkedIn, location, phone, twitter, website } = profile;
        return (
          <div>
            <p>{about}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Account;
