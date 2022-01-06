import React from 'react';
import { Outlet } from "react-router-dom";

const ProfileContent = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProfileContent;
