const Discord = require('discord.js');
const auth = require('./app/auth/auth.json');
const Help =  require('./app/commands/Help');

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
            description: Help.helpMessage(msg.author)
          }
        });
        break;
      case 'add':
        
        break;
      default:
        msg.channel.send(`Hi ${msg.author}, I haven't learned this yet! Want to teach me?`);
    }
  }
});

bot.login(auth.token);