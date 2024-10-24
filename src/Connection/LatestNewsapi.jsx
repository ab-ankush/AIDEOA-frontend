import axios from "axios";
export const postLatestNewsData = async (data) => {
  try {
    return axios.post("");
  } catch (error) {
    console.log(
      `error in LatestNewsapi.jsx in postLatestNewsData func ${error}`
    );
  }
};
