import axios from "axios";
import { NASA_API_TOKEN, NASA_API_URL } from "../config/index.js";

export const getNasaData = (startDate, endDate) => {
  return axios.get(`${NASA_API_URL}/neo/rest/v1/feed`, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: NASA_API_TOKEN,
    },
  });
};
