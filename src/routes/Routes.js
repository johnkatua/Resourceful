import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllServices from "../components/services/AllServices";
import ServiceSubCategory from "../components/services/ServiceSubCategories";

const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const Home = lazy(() => import("../pages/Home/index"));
const ServicesPage = lazy(() => import("../pages/services/index.js"))

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
          <Route path="services" element={
            <Suspense fallback={<>Loading...</>}>
              <ServicesPage />
            </Suspense>
          }>
            <Route path="" element={<AllServices />} />
            <Route path=":categoryId" element={<ServiceSubCategory />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
