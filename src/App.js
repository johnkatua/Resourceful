import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from './routes/Routes';
import { userLoginSuccess, userLogout, signIn } from "./redux/action/Authentication";
import "./style.css";


function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authentication);
  console.log(currentUser);

  const checkLogin = () => {
    const user  = JSON.parse(localStorage.getItem("DATA"));
    console.log(user);
    if(!user) {
      dispatch(userLogout());
    } else {
      dispatch(userLoginSuccess(user));
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App;
