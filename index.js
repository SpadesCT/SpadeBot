const Discord = require('Discord.js');
const TOKEN = "censored";
const prefix = "/"
var bot = new Discord.Client()

bot.on('ready',() => {
	console.log('>>> I am Online');
bot.user.setGame('/help');
});
bot.on('message', async message => {
if(message.author.bot) return;

if (message.content.startsWith(prefix + 'userinfo')) {
	let user = message.mentions.users.first() || message.author;
	let embed = new Discord.RichEmbed()
	
	.setAuthor(message.author.username)
	.setDescription("Users Info")
	.setColor("#428cdf")
	.addField("Username", `${message.author.username}#${message.author.discriminator}`)
	.addField("Nickname", `${message.member.nickname || "None"}`)
	.addField("UserID", message.author.id)
	.addField("AvatarURL", message.author.avatarURL)
	.addField("Playing", user.presence.game ? user.presence.game.name : 'None');

	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'userperms')) {
	message.channel.send('`User Permissions:\n`' +
		JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
};

if (message.content.startsWith(prefix + 'setname')) {
	message.channel.setName(message.content.substr(8));
};
const msg = await message.channel.send('Ping!');
      msg.edit(`Pong! (Response time: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
});
bot.login(TOKEN);
