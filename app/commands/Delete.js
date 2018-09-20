const moment = require('moment');

/**
 * Deletes the Todo item on the database.
 * 
 * @param {*} index the index to be deleted from the database
 * @param {*} msg the Discord Message Object
 * @param {*} firebase the firebase configuration
 */
let deleteToDo = (index, msg, firebase) => {
  console.log("index", index);
  firebase.ref('todo').orderByChild("sortDate").once('value').then((snap) => {
    todo = snap.val();
    console.log("todo", todo);
    snap.forEach((key) => {
      console.log(parseInt(key.val()["index"]), index);
      if (moment().format('X') > key.val()["sortDate"]) {
        console.log('del1');
        firebase.ref('todo/').child(key.key).remove();
      } else if (key.val()["index"] === parseInt(index)) {
        console.log('del2');
        msg.channel.send(`Succesfully deleted item \`\`\`${key.val()["description"]}\`\`\``);
        firebase.ref('todo/').child(key.key).remove();
        return;
      }
    })
  });
}

module.exports = deleteToDo;