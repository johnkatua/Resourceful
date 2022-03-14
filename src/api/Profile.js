import axios from "axios";

export const getProfileByAccountApi = async (id) => {
  const GET_PROFILE_BY_ACCOUNT_API_ENDPOINT = `http://localhost:5000/getProfileByAccount/${id}`;
  const { data } = await axios.get(GET_PROFILE_BY_ACCOUNT_API_ENDPOINT);
  console.log(data);
  return data.profile;
};

export const getProfileByServiceApi = async (id) => {
  const GET_PROFILE_BY_SERVICE_API_ENDPOINT = `http://localhost:5000/getProfileByService/${id}`;
  const { data } = await axios.get(GET_PROFILE_BY_SERVICE_API_ENDPOINT);
  console.log(data);
  return data.serviceProfile;
};

export const editProfileApi = async (id, profile) => {
  const EDIT_PROFILE_API_ENDPOINT = `http://localhost:5000/updateProfile/${id}`;
  const { data } = await axios.post(EDIT_PROFILE_API_ENDPOINT, profile);
  console.log(data);
  return data.profile;
}