import axios from "axios";

export const getSingleServiceApi = async (id) => {
  const GET_SINGLE_SERVICE_API_ENDPOINT = `http://localhost:5000/getSingleService/${id}`;
  const { data } = await axios.get(GET_SINGLE_SERVICE_API_ENDPOINT);
  return data;
};

export const getServicesApi = async () => {
  const GET_SERVICES_API_ENDPOINT = "http://localhost:5000/getAllServices";
  const { data } = await axios.get(GET_SERVICES_API_ENDPOINT);
  return data;
};

export const getServicesBySubcategoryApi = async (id) => {
  const GET_SERVICE_BY_SUBCATEGORY_API_ENDPOINT = `http://localhost:5000/getServicesBySubCategories/${id}`;
  const { data } = await axios.get(GET_SERVICE_BY_SUBCATEGORY_API_ENDPOINT);
  console.log("subcategoryapi", data);
  return data;
};

export const getServicesByAccountApi = async (id) => {
  const GET_SERVICE_BY_ACCOUNT_API_ENDPOINT = `http://localhost:5000/getServicesByAccount/${id}`;
  const { data } = await axios.get(GET_SERVICE_BY_ACCOUNT_API_ENDPOINT);
  console.log("accountapi", data);
  return data;                                                                                                                                                                                                    
};

export const deleteServiceApi = async (id) => {
  const DELETE_SERVICE_API_ENDPOINT = `http://localhost:5000/deleteService/${id}`;
  const { data } = await axios.get(DELETE_SERVICE_API_ENDPOINT);
  console.log("delete", data);
  return data;
}
