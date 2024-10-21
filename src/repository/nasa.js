import axios from "axios";
import { NASA_API_TOKEN, NASA_API_URL } from "../config/index.js";
import Exception from "../utils/Exception.js";

export const getNasaData = (startDate, endDate) => {
  return axios.get(`${NASA_API_URL}/neo/rest/v1/feed`, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: NASA_API_TOKEN,
    },
  });
};

export const getLatestRoverImage = async (userApiKey) => {
  const nasaApiUrl = `${NASA_API_URL}/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${userApiKey}`;

  const response = await axios.get(nasaApiUrl);

  if (response.status !== 200 && !response?.data?.latest_photos?.length) {
    throw new Exception(404, "No photos found");
  }

  return response.data.latest_photos[0].img_src;
};
