import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllServices from "../components/services/AllServices";
import Service from "../components/services/Service";
import ServiceSubCategory from "../components/services/ServiceSubCategories";
import Account from "../pages/Profile/components/Account";
import CreateService from "../pages/Profile/components/CreateService";
import Pricing from "../pages/Profile/components/Pricing";
import ViewService from "../pages/Profile/components/ViewService";
import UploadFile from "../pages/Profile/components/UploadFile";
import UploadService from "../pages/Profile/components/UploadService";

const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const Home = lazy(() => import("../pages/Home/index"));
const ServicesPage = lazy(() => import("../pages/services/index.js"));
const ServicePage = lazy(() => import("../pages/service/components/ServicePage"));
const Profile = lazy(() => import("../pages/Profile/index"));


const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<>Loading...</>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<>Loading...</>}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Profile />
              </Suspense>
            }
          >
            <Route path="" element={<Account />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="createService" element={<UploadFile />} />
            <Route path="viewService" element={<ViewService />} />
          </Route>
          <Route
            path="services"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ServicesPage />
              </Suspense>
            }
          >
            <Route path="" element={<AllServices />} />
            <Route path=":categoryId" element={<ServiceSubCategory />} />
          </Route>
          <Route
            path="service"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ServicePage />
              </Suspense>
            }
          >
            <Route path=":serviceId" element={<Service />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
