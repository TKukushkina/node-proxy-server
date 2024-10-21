import { getLatestRoverImage } from "../../repository/nasa.js";

export const getRoverImage = async (req, res, next) => {
  try {
    const { userApiKey } = req.body;

    const image = await getLatestRoverImage(userApiKey);

    res.render("rover-image.njk", {
      image: image,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoverForm = async (req, res, next) => {
  try {
    res.render("rover-image.njk");
  } catch (error) {
    next(error);
  }
};
