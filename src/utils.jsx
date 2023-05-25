export const minutesToHoursMinutes = (minutes) => {
  var hours = Math.floor(minutes / 60);
  var remainingMinutes = minutes % 60;
  var output = `${hours > 0 ? `${hours}h` : ``} ${
    remainingMinutes > 0 ? `${remainingMinutes}m` : ``
  }`;
  return output;
};
