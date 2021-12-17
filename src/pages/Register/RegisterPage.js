import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";


import "./RegisterPage.css";
import { userRegister } from "../../redux/action/Register";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      account_type: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("* Name field is required"),
      email: Yup.string().email("Invalid email address").required("* Email field is required"),
      password: Yup.string()
        .required("* Password is required")
        .min(6, "Password is too short - minimum should be 6 characters"),
      account_type: Yup.string().required("* Account type is required"),
    }),
    onSubmit: (values) => {
      try {
        const { name, email, password, account_type } = values;
        dispatch(userRegister({ name, email, password, account_type }))
        navigate("/home");
        formik.resetForm();
      } catch (error) {
        formik.resetForm();
      }
    }
  });
  return (
    <div className="register__container">
      <div className="register__form">
        <h2>Sign Up</h2>
        <form className="register--form__details" onSubmit={formik.handleSubmit}>
          <div className="register--form__data">
            <label>
              Name:
              <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
            </label>
            <span>{formik.errors.name}</span>
          </div>
          <div className="register--form__data">
            <label>
              Email:
              <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            </label>
            <span>{formik.errors.email}</span>
          </div>
          <div className="register--form__data">
            <label>
              Password:
              <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} autoComplete="off" />
            </label>
            <span>{formik.errors.password}</span>
          </div>
          <div className="register__account">
            <select id="account_type" name="account_type" onChange={formik.handleChange} placeholder="Select role">
              <option value="normal_user">Normal User</option>
              <option value="company">Service Provider</option>
            </select>
          </div>
          <div className="register--form__btn">
            <button>Submit</button>
          </div>
          <p>
            Already have an account. Sign In Now!
            <Link to="/login">
              <BsArrowRight />
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
