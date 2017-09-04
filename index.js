const Discord = require('Discord.js');
const TOKEN = "censored";
const PREFIX = "!"
var bot = new Discord.Client();
cbot.on('ready',() => {
	console.log('Ready');
});
client.on('message', message => {
if(message.author.bot) return;

if (message.content.startsWith(prefix + 'ping')) {
  message.reply("Pong!");
};

});
bot.login(TOKEN);
