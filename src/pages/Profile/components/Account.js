import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoLocation } from 'react-icons/go';

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
          <div className="profile--data">
            <div className='profile--data__container'>
              <div className="profile--data__header">
                <h1>My Profile</h1>
                <span>Edit</span>
              </div>
              <div className="profile--data__body">
                <div className="profile--data__body--about">
                  {about}
                </div>
                <div className="profile--data__body--contact">
                  <span>
                    <MdOutlineEmail />
                  </span>
                  <span>
                    <MdPhone />
                  </span>
                  <span>
                    <BsFacebook />
                  </span>
                  <span>
                    <BsInstagram />
                  </span>
                  <span>
                    <BsLinkedin />
                  </span>
                  <span>
                    <BsTwitter />
                  </span>
                  {website !== 'N/A' ? <span>{website}</span> : null}
                  <span>
                    <GoLocation />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Account;
