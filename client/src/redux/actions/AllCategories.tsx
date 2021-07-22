import axios from "axios"
import { getAllCategories } from "../serverReducer";

export const getCategories = () => {
  return async (dispatch: any) => {
    const response = await axios.get('http://localhost:5000/category');
    dispatch(getAllCategories(response.data))
  }
}