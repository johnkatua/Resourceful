import axios from "axios";

export const getSubCategoriesApi = async () => {
  const GET_SUBCATEGORIES_API_ENDPOINT = "http://localhost:5000/getAllServiceSubCategories";
  const { data } = await axios.get(GET_SUBCATEGORIES_API_ENDPOINT);
  return data;
};
