import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

import { getAllSubCategories } from "../../../redux/action/SubCategories";
import { createService, createServiceSuccess, createServiceFailure } from "../../../redux/action/CreateService";
import { postService } from "../../../redux/action/CreateService";

const url = "http://localhost:5000/createService";

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

const UploadFile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const { currentUser } = useSelector((state) => state.authentication);
  const [photo, setPhoto] = useState("");
  console.log("photo", photo);
  const [photoName, setPhotoName] = useState("");
  const [formData, setFormData] = useState({
    account_id: currentUser.id,
  });
  const { subCategories } = useSelector((state) => state.subCategories);

  console.log(formData);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const saveFile = (e) => {
    setPhoto(e.target.files[0]);
    setPhotoName(e.target.files[0].name);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const uploadService = (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("photo", photo);
    console.log(photo);
    payload.append("delivery_point", formData.delivery_point);
    payload.append("consumer_count", formData.consumer_count);
    payload.append("service_readiness", formData.service_readiness);
    payload.append("support_team", formData.support_team);
    payload.append("support_language", formData.support_language);
    payload.append("service_duration", formData.service_duration);
    payload.append("price", formData.price);
    payload.append("account_id", formData.account_id);
    payload.append("service_sub_categories_id", formData.service_sub_categories_id);

    console.log(payload);

    dispatch(postService(payload, navigate));
  }

  useEffect(() => {
    dispatch(getAllSubCategories());
  }, [dispatch]);

  return (
    <form onSubmit={uploadService}>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Service name">
            <Form.Control
              {...register("name")}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{errors.name?.message}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Provider name">
            <Form.Control type="text" name="account_id" value={currentUser.name} onChange={handleChange} placeholder="null" />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="g-1 m-1">
        <Col md>
          <FloatingLabel controlId="floatingTextarea" label="description">
            <Form.Control
              {...register("description")}
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{errors.description?.message}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Delivery point">
            <Form.Select
              {...register("delivery_point")}
              id="delivery_point"
              name="delivery_point"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="physical">Physical</option>
              <option value="online">Online</option>
            </Form.Select>
          </FloatingLabel>
          <span>{errors.delivery_point?.message}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Consumer count">
            <Form.Control
              {...register("consumer_count")}
              type="integer"
              min="1"
              step="any"
              name="consumer_count"
              value={formData.consumer_count}
              onChange={handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{errors.consumer_count?.message}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service readiness">
            <Form.Select
              {...register("service_readiness")}
              id="service_readiness"
              name="service_readiness"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="book">Book</option>
              <option value="readilyAvailable">Readily available</option>
            </Form.Select>
          </FloatingLabel>
          <span>{errors.service_readiness?.message}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Service duration">
            <Form.Select
              {...register("service_duration")}
              id="service_duration"
              name="service_duration"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="24hrs">24 hrs</option>
              <option value="48hrs">48 hrs</option>
              <option value="72hrs">72 hrs</option>
              <option value="96hrs">96 hrs</option>
              <option value="120hrs">120 hrs</option>
            </Form.Select>
          </FloatingLabel>
          <span>{errors.service_duration?.message}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support team">
            <Form.Select 
              {...register("support_team")} 
              id="support_team" 
              name="support_team" 
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Select>
          </FloatingLabel>
          <span>{errors.support_team?.message}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Support language">
            <Form.Select
              {...register("support_language")}
              id="support_language"
              name="support_language"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="English">English</option>
              <option value="Kiswahili">Kiswahili</option>
              <option value="Amharic">Amharic</option>
            </Form.Select>
          </FloatingLabel>
          <span>{errors.support_language?.message}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingFormFile">
            <Form.Control
              {...register("photo")}
              type="file"
              accept="image/*"
              encType="multipart/form-data"
              name="photo"
              onChange={saveFile} 
            />
          </FloatingLabel>
          <span>{errors.photo?.message}</span>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Price">
            <Form.Control
              {...register("price")}
              type="integer"
              min="1"
              step="any"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="null"
            />
          </FloatingLabel>
          <span>{errors.price?.message}</span>
        </Col>
      </Row>
      <Row className="g-2 m-1">
        <Col md>
          <FloatingLabel controlId="floatingSelect" label="Category">
            <Form.Select
              {...register("service_sub_categories_id")}
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
        <span>{errors.serviceSubCategoriesId?.message}</span>
      </Row>
      <Button variant="primary" type="submit" className="m-2" disabled={isValid}>
        Submit
      </Button>
    </form>
  );
};

export default UploadFile;
