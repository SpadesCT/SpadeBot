const Discord = require('Discord.js');
const TOKEN = "censored";
const prefix = "!"
var bot = new Discord.Client();
bot.on('ready',() => {
	console.log('Ready');
});
bot.on('message', message => {
if(message.author.bot) return;

if (message.content.startsWith(prefix + 'ping')) {
  message.reply("Pong!");
};
	
if (message.content.startsWith(prefix + 'test')) {
  message.channel.send("Test");
};
});
bot.login(TOKEN);
