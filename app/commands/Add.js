const moment = require('moment');

/**
 * Adds event to the database.
 * 
 * @param {string or number} m - The month the event is occuring/due
 * @param {number} day - The day the event is occuring/due
 * @param {number} t - the hour the event is occuring/due
 * @param {string} description - description of the event
 * @param {firebase.database} database the firebase database instance
 * @return {string} returns the formated date inputted
 */
function addTodoEvent(m, d, t, description, database) {
  let eventDate, year, month, day, time;

  if (moment(m, ["M", "MM", "MMM", "MMMM"]).isValid()) {
    month = moment(m, ["M", "MM", "MMM", "MMMM"]).format("MMM");
  } else {
    return "Invalid month";
  }

  if (moment(d, ["D", "DD"]).isValid()) {
    date = moment(d, ["D", "DD"]).format("DD");
  } else {
    return "Invalid Date";
  }

  if (moment(t, ["H", "HH", "h", "hh", "HH:mm","hh:mm a"]).isValid()) {
    time = moment(t, ["H", "HH", "h", "hh", "HH:mm","hh:mm a", "hh a"]).format("HH:mm");
  } else {
    return "invalid time";
  }

  // assumption that if I add a date in december, it will be for the following year
  if (moment().format("MM") === "12") {
    year = parseInt(moment().format("YYYY")) + 1;
  } else {
    year = moment().format("YYYY");
  }

  let dateString = month + "-" + day + "-" + year + " " + time;
  if (moment(dateString, ["MM-DD-YYYY HH:mm", "MM-DD-YYYY"]).isValid()) {
    eventDate = moment(dateString, ["MM-DD-YYYY HH", "MM-DD-YYYY H", "MM-DD-YYYY HH:mm", "MMMM-DD-YYYY HH:mm"]).format("MMM-DD-YYYY HH:mm");
  }

  let sortDate = parseInt(moment(eventDate, "MMM-DD-YYYY HH:mm").format("X"));
  
  database.ref('todo/').push({
    date: eventDate,
    sortDate: sortDate,
    month: month,
    day: day,
    time: moment(time, "HH:mm").format("hh:mma"),
    description: description
  });

  return "Added to the Calendar!";
}



module.exports = addTodoEvent;