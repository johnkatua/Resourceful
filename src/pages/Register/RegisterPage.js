import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


import "./RegisterPage.css";
import { userRegister, userRegisterFail, userRegisterSuccess } from "../../redux/action/Register";

const signUpUrl = "http://localhost:5000/createAccount";


const RegisterPage = () => {
  const [success, setSuccess] = useState(false);
  const [successNotification, setSuccessNotification] = useState("");
  const [failNotification, setFailNotification] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register);
  console.log(register)

  const signUp = (user, navigate) => {
    return function (dispatch) {
      dispatch(userRegister());
      axios({
        method: "POST",
        url: signUpUrl,
        data: user
      })
      .then((response) => {
        console.log(response);
        const { data } = response.data;
        dispatch(userRegisterSuccess(data));
        formik.resetForm();
        setTimeout(() => {
          setSuccessNotification(response.data.message);
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        dispatch(userRegisterFail(error));
        formik.resetForm();
        setTimeout(() => {
          setFailNotification(error.response.data.message);
          setSuccess(false);
        }, 3000);
      })
    }
  };
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
      const { name, email, password, account_type } = values;
      dispatch(signUp({ name, email, password, account_type }, navigate));
    }
  });


  return (
    <div className="register__container">
      <div className="register__form">
        <h2>Sign Up</h2>
        {success ? <p>{successNotification}</p> : <p>{failNotification}</p>}
        <form className="register--form__details" onSubmit={formik.handleSubmit}>
          <div className="register--form__data">
            <label>
              Name:
              <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} autoComplete="off" />
            </label>
            <span>{formik.errors.name}</span>
          </div>
          <div className="register--form__data">
            <label>
              Email:
              <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} autoComplete="off" />
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
            <button type="submit" disabled={!formik.isValid}>Submit</button>
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
