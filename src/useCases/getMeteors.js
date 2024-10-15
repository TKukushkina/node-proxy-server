import { getNasaData } from "../repository/nasa.js";
import { mapMeteorData } from "../utils/meteors.utils.js";
import { getLastMondayAndFriday } from "../utils/meteors.utils.js";

export const getMeteors = async ({ date, wereDangerousMeteors }) => {
  let { startDate, endDate } = getLastMondayAndFriday(date);

  const response = await getNasaData(startDate, endDate);

  const data = response.data.near_earth_objects;
  const meteors = Object.values(data).reduce(
    (acc, meteor) => [...acc, ...meteor.map(mapMeteorData)],
    []
  );

  if (wereDangerousMeteors) {
    return meteors.filter((meteor) => meteor.is_potentially_hazardous_asteroid);
  }

  return meteors;
};
