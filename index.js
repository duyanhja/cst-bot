const Discord = require('discord.js');
const auth = require('./app/auth/auth.json');
const Command = require('./app/commands');
const firebase = require('firebase');
const config = require('./app/auth/config.json');

firebase.initializeApp(config);
var database = firebase.database();

var bot = new Discord.Client();
var BOT_PREFIX = '&';


bot.on('ready', () => {

  console.log('Bot is ready');

});

bot.on('message', (msg) => {

  if (msg.content.substring(0, 1) === BOT_PREFIX) {
    var cmd = msg.content.substring(1).split(' ');

    switch (cmd[0]) {

      case 'help':
        msg.channel.send({
          embed: {
            title: 'Command List',
            description: Command.helpMessage(msg.author)
          }
        });
        break;
      case 'add':
        let description = cmd.slice(4).join(" ");
        console.log("day", cmd[2]);
        msg.channel.send(Command.addToDoEvent(cmd[1], cmd[2], cmd[3], description, database));
        Command.todo(msg, database);
        break;
      case 'todo':
        Command.todo(msg, database);
        break;
      case 'delete':
      case 'del':
      case 'rm':
      case 'remove':
      Command.deleteToDo(cmd[1], msg, database);
      break;
      default:
        msg.channel.send(`Hi ${msg.author}, I haven't learned this yet! Want to teach me?`);
    }
  }
});

bot.login(auth.token);