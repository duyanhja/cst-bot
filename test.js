const firebase = require('firebase');
const moment = require('moment');
const config = require('./app/auth/config.json');

firebase.initializeApp(config);
var todoDB = firebase.database().ref('todo/');

// todoDB.on('value', (snap) => {
//   console.log(snap.val());
// })

console.log(moment().format("X"));
console.log(moment("Sep-1-2018", "MM-DD-YYYY").format("X"))
console.log(moment("Nov-1-2018", "MM-DD-YYYY").format("X"));
console.log(moment("Nov-1-2018", "MMM-DD-YYYY").format("MM-DD-YYYY"));