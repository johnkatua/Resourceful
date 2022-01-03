import React from 'react';
import ProfileContent from './components/ProfileContent';
import ProfileHeader from './components/ProfileHeader';
import ProfileSidebar from './components/ProfileSidebar';
import "./Profile.css";

const Profile = () => {
  return (
    <div className='profile--container'>
      <div className='profile--container__header'>
        <ProfileHeader />
      </div>
      <div className='profile--container__body'>
        <div className="profile--body__sidebar">
          <ProfileSidebar />
        </div>
        <div className="profile--body__content">
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

export default Profile;
