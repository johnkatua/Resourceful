import axios from "axios";

export const registerUserApi = async (user) => {
  const REGISTER_API_ENDPOINT = "http://localhost:5000/createAccount";
  const { data } = await axios.post(REGISTER_API_ENDPOINT, user);
  console.log(data);
  return data;
};

export const loginUserApi = async (user) => {
  const LOGIN_API_ENDPOINT = "http://localhost:5000/login";
  const {
    data: { name, id, email, token },
  } = await axios.post(LOGIN_API_ENDPOINT, user);
  localStorage.setItem("token", token);
  return { name, id, email, token };
};
