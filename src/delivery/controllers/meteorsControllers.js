import { getMeteors } from "../../useCases/getMeteors.js";

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
    next(`Error fetching data from NASA: ${error.message}`);
  }
};
