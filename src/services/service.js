import axios from "axios";
import { baseUrl } from "./baseUrl";

export const get = async (route) => {
  try {
    let token = localStorage.getItem("token");
    let response = await axios.get(baseUrl + route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.error(err.message);
  }
};

export const post = async (route, body) => {
  try {
    let token = localStorage.getItem("token");
    console.log(token);
    let response = await axios.post(baseUrl + route, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.error(err.message);
  }
};
export const remove = async (route) => {
  try {
    let token = localStorage.getItem("token");
    console.log(token);
    let response = await axios.delete(baseUrl + route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.error(err.message);
  }
};
