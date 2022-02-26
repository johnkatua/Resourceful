import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProfileByAccount } from "../../../redux/action/Profile";

const ProfileSidebar = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.authentication);
  const userId = currentUser.id;
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const photo = profile.map((item) => {
    return item.photo;
  });


  useEffect(() => {
    dispatch(getProfileByAccount(userId));
  } , [dispatch, userId]);

  const navigateToAccount = (e) => {
    e.preventDefault();
    navigate('/profile');
  }

  const navigateToPricing = (e) => {
    e.preventDefault();
    navigate(`/profile/pricing`)
  }

  const navigateToCreateService = (e) => {
    e.preventDefault();
    navigate(`/profile/createService`)
  }

  const navigateToViewService = (e) => {
    e.preventDefault();
    navigate(`/profile/viewService`)
  }
  
  return (
    <div className="profile--sidebar__container">
      <div className="profile--sidebar__avatar">
        <span>
          <img src={photo} alt="avatar" className="img" />
        </span>
      </div>
      <div className="profile--sidebar__links">
        <div className="profile--sidebar__account">
          <span>Profile</span>
          <p onClick={navigateToAccount}>Account</p>
        </div>
        <div className="profile--sidebar__application">
          <span>Application</span>
          <p onClick={navigateToCreateService} className={location.includes("createService") ? "tab--active" : "tab"}>
            Create Service
          </p>
          <p onClick={navigateToViewService} className={location.includes("viewService") ? "tab--active" : "tab"}>
            My Services
          </p>
        </div>
        <div className="profile--sidebar__pages">
          <span>Pages</span>
          <p onClick={navigateToPricing} className={location.includes("pricing") ? "tab--active" : "tab"}>
            Pricing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
