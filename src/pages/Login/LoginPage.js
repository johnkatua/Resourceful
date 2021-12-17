import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { userLogin } from "../../redux/action/Login";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("* Email is required"),
      password: Yup.string()
        .required("* Password is required")
        .min(6, "Password is too short - minimum should be 6 characters"),
    }),
    onSubmit: (values) => {
      try {
        const { email, password } = values;
        dispatch(userLogin({ email, password}));
        navigate("/home");
        formik.resetForm();
      } catch (error) {
        formik.resetForm();
      }
    }
  });
  return (
    <div className="login__container">
      <div className="login__form">
        <h2>Sign In</h2>
        <form className="login--form__details" onSubmit={formik.handleSubmit}>
          <div className="login--form__data">
            <label>
              Name:
              <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            </label>
            <span>{formik.errors.email}</span>
          </div>
          <div className="login--form__data">
            <label>
              Password:
              <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
            </label>
            <span>{formik.errors.password}</span>
          </div>
          <div className="login--form__btn">
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </div>
          <p>
            I do not have an account. Sign Up Now!
            <Link to="/register">
              <BsArrowRight />
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
