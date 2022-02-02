import React, { useEffect, useState } from 'react';
import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";
import  { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import axios from "axios";

import { getAllSubCategories } from "../../../redux/action/SubCategories";
import { postService } from "../../../redux/action/CreateService";
import { createService, createServiceSuccess, createServiceFailure } from "../../../redux/action/CreateService";
const url = "http://localhost:5000/createService";

const UploadService = () => {
  const [photo, setPhoto] = useState(null);
  const [fileName, setFileName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subCategories } = useSelector(state => state.subCategories);
  const { currentUser } = useSelector(state => state.authentication);

  const initValues = {
    name: "",
    description: "",
    photo: "",
    delivery_point: "",
    consumer_count: "",
    service_readiness: "",
    support_team: "",
    support_language: "",
    service_duration: "",
    price: "",
    account_id: currentUser.id,
    service_sub_categories_id: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("* Name field is required"),
    description: Yup.string().required("* Description field is required"),
    photo: Yup.mixed().required("* Photo field is required"),
    delivery_point: Yup.string().required("* Delivery point field is required"),
    consumer_count: Yup.string()
      .required("* Consumer count field is required")
      .test("Is Positive", "* Customer should be greater than 0", (value) => value > 0),
    service_readiness: Yup.string().required("* Service readiness field is required"),
    support_team: Yup.string().required("* Support team field is required"),
    support_language: Yup.string().required("* Support language field is required"),
    service_duration: Yup.string().required("* Service duration field is required"),
    price: Yup.string()
      .required("* Price field is required")
      .test("Is Positive", "Price should be greater than 0", (value) => value > 0),
    account_id: Yup.string().required("* Provider name field is required"),
    service_sub_categories_id: Yup.string().required("* Category field is required"),
  });

  // const handleSubmit = async (values) => {
  //   console.log(values);
  //   const isValid = await schema.validate(values);
  //   if(!isValid) {
  //     return;
  //   } try {
  //     const formData = new FormData();
  //     formData.append("name", values.name);
  //     formData.set("description", values.description);
  //     formData.append("photo", photo);
  //     formData.set("delivery_point", values.delivery_point);
  //     formData.set("consumer_count", values.consumer_count);
  //     formData.set("service_readiness", values.service_readiness);
  //     formData.set("support_team", values.support_team);
  //     formData.set("support_language", values.support_language);
  //     formData.set("service_duration", values.service_duration);
  //     formData.set("price", values.price);
  //     formData.set("account_id", currentUser.id);
  //     formData.set("service_sub_categories_id", values.service_sub_categories_id);
  //     console.log(formData);
  //     await dispatch(postService({formData}, navigate));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (values) => {
    const { name, description, photo, delivery_point, consumer_count, service_readiness, support_team, support_language, service_duration, price, account_id, service_sub_categories_id } = values;
    dispatch(createService());
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("photo", photo);
    formData.append("delivery_point", delivery_point);
    formData.append("consumer_count", consumer_count);
    formData.append("service_readiness", service_readiness);
    formData.append("support_team", support_team);
    formData.append("support_language", support_language);
    formData.append("service_duration", service_duration);
    formData.append("price", price);
    formData.append("account_id", account_id);
    formData.append("service_sub_categories_id", service_sub_categories_id);
    try {
      const res = await axios.post(url, formData);
      dispatch(createServiceSuccess(res.data));
      navigate("/profile/viewService");
    } catch (err) {
      dispatch(createServiceFailure(err.response.data));
    }
  };

  const savePhoto = (e) => {
    setPhoto(e.currentTarget.files[0]);
    setFileName(e.currentTarget.files[0].name);
  }

  useEffect(() => {
    dispatch(getAllSubCategories());
  }, [dispatch]);

  return (
    <Formik initialValues={initValues} validationSchema={schema} onSubmit={handleSubmit}>
      {({ errors, touched, isValid, values, handleChange, setFieldValue, setFieldTouched, isSubmitting }) => (
        <Form noValidate>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Service name">
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={setFieldTouched}
                  placeholder="Hello"
                />
              </FloatingLabel>
              {errors.name && touched.name ? (<span>{errors.name}</span>) : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Provider name">
                <Form.Control
                  type="text"
                  name="account_id"
                  value={currentUser.name}
                  onChange={handleChange}
                  placeholder="null"
                />
              </FloatingLabel>
              {errors.account_id && touched.account_id ? (<span>{errors.account_id}</span>) : null}
            </Col>
          </Row>
          <Row className="g-1 m-1">
            <Col md>
              <FloatingLabel controlId="floatingTextarea" label="description">
                <Form.Control
                  as="textarea"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  placeholder="null"
                />
              </FloatingLabel>
              {errors.description && touched.description ? (<span>{errors.description}</span>) : null}
            </Col>
          </Row>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Delivery point">
                <Form.Select id="delivery_point" name="delivery_point" onChange={handleChange}>
                  <option>Select</option>
                  <option value="physical">Physical</option>
                  <option value="online">Online</option>
                </Form.Select>
              </FloatingLabel>
              {errors.delivery_point && touched.delivery_point ? (<span>{errors.delivery_point}</span>) : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Consumer count">
                <Form.Control
                  type="integer"
                  min="1"
                  step="any"
                  name="consumer_count"
                  value={values.consumer_count}
                  onChange={handleChange}
                  placeholder="null"
                />
              </FloatingLabel>
              {errors.consumer_count && touched.consumer_count ? (<span>{errors.consumer_count}</span>) : null}
            </Col>
          </Row>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Service readiness">
                <Form.Select id="service_readiness" name="service_readiness" onChange={handleChange}>
                  <option>Select</option>
                  <option value="book">Book</option>
                  <option value="readilyAvailable">Readily available</option>
                </Form.Select>
              </FloatingLabel>
              {errors.service_readiness && touched.service_readiness ? (<span>{errors.service_readiness}</span>) : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Service duration">
                <Form.Select id="service_duration" name="service_duration" onChange={handleChange}>
                  <option>Select</option>
                  <option value="24hrs">24 hrs</option>
                  <option value="48hrs">48 hrs</option>
                  <option value="72hrs">72 hrs</option>
                  <option value="96hrs">96 hrs</option>
                  <option value="120hrs">120 hrs</option>
                </Form.Select>
              </FloatingLabel>
              {errors.service_duration && touched.service_duration ? (<span>{errors.service_duration}</span>) : null}
            </Col>
          </Row>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Support team">
                <Form.Select id="support_team" name="support_team" onChange={handleChange}>
                  <option>Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </FloatingLabel>
              {errors.support_team && touched.support_team ? (<span>{errors.support_team}</span>) : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Support language">
                <Form.Select id="support_language" name="support_language" onChange={handleChange}>
                  <option>Select</option>
                  <option value="English">English</option>
                  <option value="Kiswahili">Kiswahili</option>
                  <option value="Amharic">Amharic</option>
                </Form.Select>
              </FloatingLabel>
              {errors.support_language && touched.support_language ? (<span>{errors.support_language}</span>) : null}
            </Col>
          </Row>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingFormFile">
                <Form.Control
                  type="file"
                  accept="image/*"
                  enctype="multipart/form-data"
                  name="photo"
                  onChange={savePhoto}
                />
              </FloatingLabel>
              {errors.photo && touched.photo ? (<span>{errors.photo}</span>) : null}
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Price">
                <Form.Control
                  type="integer"
                  min="1"
                  step="any"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  placeholder="null"
                />
              </FloatingLabel>
              {errors.price && touched.price ? (<span>{errors.price}</span>) : null}
            </Col>
          </Row>
          <Row className="g-2 m-1">
            <Col md>
              <FloatingLabel controlId="floatingSelect" label="Category">
                <Form.Select
                  id="service_sub_categories_id"
                  name="service_sub_categories_id"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  {subCategories.map((subCategory) => {
                    return (
                      <option key={subCategory.id} value={subCategory.id}>
                        {subCategory.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            {errors.service_sub_categories_id && touched.service_sub_categories_id ? (<span>{errors.service_sub_categories_id}</span>) : null}
          </Row>
          <Button variant="primary" type="submit" className="m-2" disabled={isSubmitting || errors}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UploadService;
