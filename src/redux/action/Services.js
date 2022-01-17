import axios from "axios";
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
  CREATE_SERVICE,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
} from "../types/Types";

const serviceAbilityUrl = "http://localhost:5000/createService";

// create service
export const createService = () => {
  return {
    type: CREATE_SERVICE,
  }
};

export const createServiceSuccess = (service) => {
  return {
    type: CREATE_SERVICE_SUCCESS,
    payload: {
      service,
    },
  }
}

export const createServiceFail = (error) => {
  return {
    type: CREATE_SERVICE_FAIL,
    payload: {
      error,
    }
  }
};

export const serviceAbility = (payload) => {
  return function(dispatch) {
    dispatch(createService());
    axios({
      method: 'POST',
      url: serviceAbilityUrl,
      data: payload
    })
    .then((response) => {
      const { service } = response.data;
      dispatch(createServiceSuccess(service));
    })
  }
}

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
}