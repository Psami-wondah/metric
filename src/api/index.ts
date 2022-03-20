import axios from "axios";

//--> Fetch Users from api
export const getMetricData = async () => {
  let response;
  try {
    const { data } = await axios.get("../data/data.json");
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};
