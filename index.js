const Discord = requirediscord.js');

const TOKEN = "censored";
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
