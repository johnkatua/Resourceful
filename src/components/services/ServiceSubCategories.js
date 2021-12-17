import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getServicesBySubcategory } from "../../redux/action/Services";

import "./Services.css";

import ServiceCard from "./ServiceCard";

const ServiceSubCategory = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { serviceBySubcategories } = useSelector((state) => state.serviceBySubcategories);
  console.log(serviceBySubcategories);

  useEffect(() => {
    dispatch(getServicesBySubcategory(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div className="subcategory__container">
      {serviceBySubcategories.map((service) => {
        return <ServiceCard service={service} />;
      })}
    </div>
  );
};

export default ServiceSubCategory;
