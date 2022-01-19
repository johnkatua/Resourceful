import React from "react";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { getAllSubCategories } from "../../../redux/action/SubCategories";
import { postService } from "../../../redux/action/CreateService";




const CreateService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.authentication);
  const { subCategories } = useSelector((state) => state.subCategories);
  const { postedService, error } = useSelector((state) => state.createServiceReducer);

  console.log(postedService);
  console.log('err', error);

  React.useEffect(() => {
    dispatch(getAllSubCategories()); 
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: Yup.object({
      name: Yup.string().required("* Name field is required"),
      description: Yup.string().required("* Description field is required"),
      photo: Yup.mixed().required("* Photo field is required"),
      delivery_point: Yup.string().required("* Delivery point field is required"),
      consumer_count: Yup.string()
        .required("* Consumer count field is required")
        .test("Is Positive", "* Customer should be greater than 0", (value) => (value) > 0),
      service_readiness: Yup.string().required("* Service readiness field is required"),
      support_team: Yup.string().required("* Support team field is required"),
      support_language: Yup.string().required("* Support language field is required"),
      service_duration: Yup.string().required("* Service duration field is required"),
      price: Yup.string()
        .required("* Price field is required")
        .test("Is Positive", "Price should be greater than 0", (value) => (value) > 0),
      account_id: Yup.string().required("* Provider name field is required"),
      service_sub_categories_id: Yup.string().required("* Category field is required"),
    }),
    onSubmit: (values) => {
      const {
        name,
        description,
        photo,
        delivery_point,
        consumer_count,
        service_readiness,
        support_team,
        support_language,
        service_duration,
        price,
        account_id,
        service_sub_categories_id,
      } = values;
      console.log(values);
      dispatch(
        postService({
          name,
          description,
          photo,
          delivery_point,
          consumer_count,
          service_readiness,
          support_team,
          support_language,
          service_duration,
          price,
          account_id,
          service_sub_categories_id,
        }, navigate)
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Service name">
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Hello"
            />
          </FloatingLabel>
          <span>{formik.errors.name}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Provider name">
            <Form.Control
              type="text"
              name="account_id"
              value={currentUser.name}
              onChange={formik.handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{formik.errors.account_id}</span>
        </Col>
      </Row>
      <Row className="g-1 m-1">
        <Col md>
          <FloatingLabel controlId="floatingTextarea" label="description">
            <Form.Control
              as="textarea"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{formik.errors.description}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Delivery point">
            <Form.Select id="delivery_point" name="delivery_point" onChange={formik.handleChange}>
              <option>Select</option>
              <option value="physical">Physical</option>
              <option value="online">Online</option>
            </Form.Select>
          </FloatingLabel>
          <span>{formik.errors.delivery_point}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Consumer count">
            <Form.Control
              type="integer"
              min="1"
              step="any"
              name="consumer_count"
              value={formik.values.consumer_count}
              onChange={formik.handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{formik.errors.consumer_count}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service readiness">
            <Form.Select id="service_readiness" name="service_readiness" onChange={formik.handleChange}>
              <option>Select</option>
              <option value="book">Book</option>
              <option value="readilyAvailable">Readily available</option>
            </Form.Select>
          </FloatingLabel>
          <span>{formik.errors.service_readiness}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service duration">
            <Form.Select id="service_duration" name="service_duration" onChange={formik.handleChange}>
              <option>Select</option>
              <option value="24hrs">24 hrs</option>
              <option value="48hrs">48 hrs</option>
              <option value="72hrs">72 hrs</option>
              <option value="96hrs">96 hrs</option>
              <option value="120hrs">120 hrs</option>
            </Form.Select>
          </FloatingLabel>
          <span>{formik.errors.service_duration}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support team">
            <Form.Select id="support_team" name="support_team" onChange={formik.handleChange}>
              <option>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </FloatingLabel>
          <span>{formik.errors.support_team}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support language">
            <Form.Select id="support_language" name="support_language" onChange={formik.handleChange}>
              <option>Select</option>
              <option value="English">English</option>
              <option value="Kiswahili">Kiswahili</option>
              <option value="Amharic">Amharic</option>
            </Form.Select>
          </FloatingLabel>
          <span>{formik.errors.support_language}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingFormFile">
            <Form.Control
              type="file"
              className=""
              name="photo"
              value={formik.values.photo}
              onChange={formik.handleChange}
            />
          </FloatingLabel>
          <span>{formik.errors.photo}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Price">
            <Form.Control
              type="integer"
              min="1"
              step="any"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{formik.errors.price}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Category">
            <Form.Select id="service_sub_categories_id" name="service_sub_categories_id" onChange={formik.handleChange}>
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
        <span>{formik.errors.service_sub_categories_id}</span>
      </Row>
      <Button variant="primary" type="submit" className="m-2" disabled={!formik.isValid}>
        Submit
      </Button>
    </form>
  );
};

export default CreateService;
