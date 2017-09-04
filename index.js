const Discord = requirediscord.js');

const TOKEN = "MzUzOTgxMjA2NjM2Nzg5NzYw.DI5BzQ.e70YgX4nHc3qzrXZUQLtPp2X35w";
const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
	console.log("Ready");
});

bot.on("message", function(message) {
	if message.author.equals(bot.user)) return;
	
	if (!message.content.startswith(PREFIX) return;
	
	var args = message.content.substring(PREFIX.length).split("");
	
	switch (args[0]) {
		case "ping"
			message.channel.sendMessage("Pong!");
			break;
	}
});

bot.login(TOKEN);