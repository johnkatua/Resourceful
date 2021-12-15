import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const Home = lazy(() => import("../pages/Home/index"));

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          } />
          <Route path="/login" element={
            <Suspense fallback={<>Loading...</>}>
              <LoginPage />
            </Suspense>
          } />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
