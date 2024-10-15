import { getMeteors } from "../../useCases/getMeteors.js";
import Exception from "../../utils/Exception.js";

export const getMeteorsController = async (req, res, next) => {
  const {
    "were-dangerous-meteors": wereDangerousMeteors,
    count,
    date,
  } = req.query;

  try {
    let meteors = await getMeteors({
      date: date,
      wereDangerousMeteors: wereDangerousMeteors === "true",
    });

    res.render("meteors.njk", {
      meteors: meteors,
      count: count === "true",
    });
  } catch (error) {
    next(new Exception(500, `Error fetching data from NASA: ${error.message}`));
  }
};
