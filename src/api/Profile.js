import axios from "axios";

export const getProfileByAccountApi = async (id) => {
  const GET_PROFILE_BY_ACCOUNT_API_ENDPOINT = `http://localhost:5000/getProfileByAccount/${id}`;
  const { data } = await axios.get(GET_PROFILE_BY_ACCOUNT_API_ENDPOINT);
  return data.profile;
}