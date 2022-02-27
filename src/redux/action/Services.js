import {
  GET_SERVICES,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAIL,
  GET_SERVICE_BY_SUBCATEGORY,
  GET_SERVICE_BY_SUBCATEGORY_SUCCESS,
  GET_SERVICE_BY_SUBCATEGORY_FAIL,
  GET_SINGLE_SERVICE,
  GET_SINGLE_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAIL,
  GET_SERVICE_BY_ACCOUNT,
  GET_SERVICE_BY_ACCOUNT_FAIL,
  GET_SERVICE_BY_ACCOUNT_SUCCESS,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
} from "../types/Types";

// get single service
export const getSingleService = (id) => {
  return {
    type: GET_SINGLE_SERVICE,
    id,
  };
};

export const getSingleServiceSuccess = (service) => {
  return {
    type: GET_SINGLE_SERVICE_SUCCESS,
    service,
  };
};

export const getSingleServiceFail = (error) => {
  return {
    type: GET_SINGLE_SERVICE_FAIL,
    error,
  };
};

// get all services
export const getServices = (serviceId) => ({
  type: GET_SERVICES,
  serviceId,
});

export const getServicesSuccess = (services) => ({
  type: GET_SERVICES_SUCCESS,
  services,
});

export const getServicesFail = (error) => ({
  type: GET_SERVICES_FAIL,
  error,
});

// get services by subcategories
export const getServicesBySubcategory = (id) => {
  return {
    type: GET_SERVICE_BY_SUBCATEGORY,
    id,
  };
};

export const getServicesBySubcategorySuccess = (serviceBySubcategories) => {
  console.log("action", serviceBySubcategories);
  return {
    type: GET_SERVICE_BY_SUBCATEGORY_SUCCESS,
    serviceBySubcategories,
  };
};

export const getServicesBySubcategoryFail = (error) => {
  return {
    type: GET_SERVICE_BY_SUBCATEGORY_FAIL,
    error,
  };
};

// get services by acccount
export const getServicesByAccount = (id) => {
  console.log("id", id);
  return {
    type: GET_SERVICE_BY_ACCOUNT,
    id,
  };
};

export const getServicesByAccountSuccess = (servicesByAccount) => {
  console.log("action", servicesByAccount);
  return {
    type: GET_SERVICE_BY_ACCOUNT_SUCCESS,
    servicesByAccount,
  };
};

export const getServicesByAccountFail = (error) => {
  return {
    type: GET_SERVICE_BY_ACCOUNT_FAIL,
    error,
  };
};

// delete service
export const deleteService = (id) => {
  return {
    type: DELETE_SERVICE,
    id,
  };
};

export const deleteServiceSuccess = (service) => {
  return {
    type: DELETE_SERVICE_SUCCESS,
    service,
  };
};

export const deleteServiceFail = (error) => {
  return {
    type: DELETE_SERVICE_FAIL,
    error,
  };
};