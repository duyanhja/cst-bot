const firebase = require('firebase');
const config = require('../auth/config.json');

firebase.initializeApp(config);
var database = firebase.database();

/**
 * Adds event to the database.
 * 
 * @param {*} m - The month the event is occuring/due
 * @param {*} day - The day the event is occuring/due
 * @param {*} t - the hour the event is occuring/due
 * @param {*} description - description of the event
 */
function addTodoEvent(m, day, t, description) {
  let today = new Date(Date.now());
  let year;

  let month = monthToIndex(m);

  if (typeof month !== "string") {
    return month;
  }

  if (month === 12 ) {
    year = today.getFullYear() + 1;
  } else {
    year = today.getFullYear();
  }

  let eventDate = new Date(year, month, day)
  eventDate += time*3600;

  firebase.database().ref('todo/').set({
    date: eventDate,
    description: description
  });

  return true;

}


/**
 * This function takes the string which represents a month, and converts it
 * to its numerical representation. Otherwise it will return a string.
 * (ie September => 9)
 * (ie Dec => 12)
 * 
 * @param {String} monthString strng representation of a month
 * @returns {Number} the numerical representation of a month
 * @returns {String} if the inputted value is invalid
 */
function monthToIndex(monthString) {
  switch(m.toLowerCase()) {
    case "january":
    case "jan":
      month = 1;
      break;
    case "feburary":
    case "feb":
      month = 2;
      break;
    case "april":
    case "apr":
      month = 3;
      break;
    case "march":
    case "mar":
      month = 4;
      break;
    case "may":
      month = 5;
      break;
    case "june":
    case "jun":
      month = 6;
      break;
    case "july":
    case "jul":
      month = 7;
      break;
    case "august":
    case "aug":
      month = 8;
      break;
    case "september":
    case "sept":
      month = 9;
      break;
    case "october":
    case "oct":
      month = 10;
      break;
    case "november":
    case "nov":
      month = 11;
      break;
    case "december":
    case "dec":
      month = 12;
      break;
    default:
      month = "Entered month is invalid";
  }

  return month;

} 

module.exports = addTodoEvent;