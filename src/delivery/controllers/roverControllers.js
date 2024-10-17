import axios from "axios";
import { NASA_API_URL } from "../../config/index.js";
import Exception from "../../utils/Exception.js";

export const getRoverImage = async (req, res, next) => {
  try {
    const { userApiKey } = req.body;

    const nasaApiUrl = `${NASA_API_URL}/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${userApiKey}`;

    const response = await axios.get(nasaApiUrl);

    if (response.status !== 200 && !response?.data?.latest_photos?.length) {
      return res.status(404).json({ message: "No photos found" });
    }

    res.render("rover-image.njk", {
      image: response.data.latest_photos[0].img_src,
    });
  } catch (error) {
    next(
      new Exception(500, `Error fetching data from rover: ${error.message}`)
    );
  }
};

export const getRoverForm = async (req, res, next) => {
  try {
    res.render("rover-image.njk");
  } catch (error) {
    next(new Exception(500, `Error from rover form: ${error.message}`));
  }
};
