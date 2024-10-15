import { startOfWeek, endOfWeek, format, subDays, addDays } from "date-fns";

const formatDate = (date) => format(date, "yyyy-MM-dd");

export const getLastMondayAndFriday = (date) => {
  if (date) {
    return {
      startDate: date,
      endDate: date,
    };
  }

  const today = new Date();
  const dayOfWeek = today.getDay();

  let lastMonday, lastFriday;

  if (dayOfWeek === "6" || dayOfWeek === "0") {
    lastMonday = startOfWeek(today, { weekStartsOn: 1 });
    lastFriday = endOfWeek(lastMonday, { weekStartsOn: 1 });
  } else {
    lastMonday = subDays(today, dayOfWeek + 6);
    lastFriday = addDays(lastMonday, 4);
  }

  return { startDate: formatDate(lastMonday), endDate: formatDate(lastFriday) };
};

export const mapMeteorData = ({
  id,
  name,
  estimated_diameter,
  is_potentially_hazardous_asteroid,
  close_approach_data,
}) => {
  const { close_approach_date_full, relative_velocity } =
    close_approach_data[0];

  return {
    id: id,
    name: name,
    diameter: estimated_diameter.meters.estimated_diameter_max,
    is_potentially_hazardous_asteroid: is_potentially_hazardous_asteroid,
    close_approach_date_full: close_approach_date_full,
    relative_velocity: relative_velocity.kilometers_per_second,
  };
};
