const firebase = require('firebase');
const config = require('../auth/config.json');
const auth = require('../auth/auth.json');
const Discord = require('discord.js');
const moment = require('moment')

// var bot = new Discord.Client();
// bot.login(auth.token);


/**
 * Prints the list of todo items to channel.
 * Firebase sorts the array by chronological order, and deletes all the past todo items. 
 * This is where the index is appended to each todo object. 
 * 
 * @param {*} msg message object passed by discord function
 */
let printToDo = (msg, database) => {
  let todo;
  database.ref('todo').orderByChild("sortDate").once('value').then((snap) => {
    todo = snap.val();
    let output = '';
    let index = 1;
    snap.forEach((key) => {
      if (moment().format('X') > key.val()["sortDate"]) {
        firebase.ref('todo/').child(key.key).remove();
      } else {
        database.ref('todo/').child(key.key).update({index: index});
        output += `${index++}\t${key.val()["month"]} ${key.val()["day"]} @ ${key.val()["time"]} - ${key.val()["description"]}\n`;
      }
    })
    msg.channel.send(`\`\`\`${output}\`\`\``);
  });
};

module.exports = printToDo;