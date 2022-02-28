import axios from "axios";
import { DELETE_SERVICE, DELETE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL } from "../types/Types";


export const deleteService = (id) => {
  return {
    type: DELETE_SERVICE,
    payload: id,
  };
};

export const deleteServiceSuccess = (message) => {
  return {
    type: DELETE_SERVICE_SUCCESS,
    message,
  };
};

export const deleteServiceFailure = (error) => {
  return {
    type: DELETE_SERVICE_FAIL,
    payload: error,
  };
};


export const deleteServiceRequest = (id) => {
  return function (dispatch) {
    dispatch(deleteService(id));
    axios({
      method: "DELETE",
      url: `http://localhost:5000/deleteService/${id}`,
    })
      .then((response) => {
        console.log("response", response);
        const { message } = response.data;
        dispatch(deleteServiceSuccess(message));
        window.location.reload(false);
      })
      .catch((error) => {
        dispatch(deleteServiceFailure(error));
      });
  };
}
