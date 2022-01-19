import axios from "axios";

import { CREATE_SERVICE, CREATE_SERVICE_SUCCESS, CREATE_SERVICE_FAIL } from "../types/Types";

const createServiceUrl = "http://localhost:5000/createService";
console.log(createServiceUrl);

export const createService = () => {
  console.log('hello');
  return {
    type: CREATE_SERVICE,
  }
};

export const createServiceSuccess = (service) => {
  console.log(service)
  return {
    type: CREATE_SERVICE_SUCCESS,
    payload: {
      service,
    },
  }
};

export const createServiceFailure = (error) => {
  return {
    type: CREATE_SERVICE_FAIL,
    payload: error,
  }
};

export const postService = (payload, navigate) => {
  return function(dispatch) {
    dispatch(createService());
    axios({
      method: 'POST',
      url: createServiceUrl,
      data: payload
    })
    .then((response) => {
      const { service } = response.data;
      console.log(response.data);
      dispatch(createServiceSuccess(service));
      navigate('/profile/viewService');
    })
    .catch((error) => {
      dispatch(createServiceFailure(error));
    })
  }
}