const Discord = require('Discord.js');
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
	let arg = message.content.split(' ');
	if (message.mentions.users.size < 1) return message.reply('You must mention someone to get their information!').catch(console.error);
	let guild = message.guild;
	let embed = new Discord.RichEmbed()
	
	.setAuthor(message.author.username)
	.setThumbnail(user.displayAvatarURL)
	.setColor("#428cdf")
	.addField("Username", `${user.username}#${user.discriminator}`)
	.addField("Nickname", `${user.nickname || "None"}`)
	.addField("UserID", `${user.id}`)
	.addField("AvatarURL", `${message.author.avatarURL}`)
	.addField("Playing", user.presence.game ? user.presence.game.name : 'None')
	.addField("Roles", message.member.roles.array(r => r.name).join(' '))
	.addField("UserStatus", `${user.presence.status}`)
	.addField("Joined Guild", `${guild.joinedAt}`)
	.addField("Joined Discord", `${user.createdAt}`)
	.addField("isBot", `${user.bot}`)
	.setFooter('© 2017 (Created by SpadesCT#2312)');
	

	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'serverinfo')) {
	let guild = message.guild;
	let embed = new Discord.RichEmbed()

	.setTitle(`${message.guild.name}`)
	.setColor('428cdf')
	.setDescription(`ID: ${guild.id}`)
	.addField("Verification Level:", guild.verificationLevel)
	.addField("Server Owner", guild.owner.user.tag)
	.addField("Region", guild.region)
	.addField("Server Created", guild.createdAt)
	.addField("Roles", guild.roles.size)
	.addField("Channels", guild.channels.size)
	.addField(`Members: (${guild.memberCount})`, `${guild.members.filter(m => m.user.presence.status === "online").size} online`)
	.addField("Members Offline: ", `${guild.members.filter(m => m.user.presence.status === "offline").size}`)
	.setThumbnail(guild.iconURL);

	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'info')) {
	let embed = new Discord.RichEmbed()

	.setTitle(`${bot.user}`)
	.addField("Bot Uptime", bot.uptime)
	.setFooter("© SpadeBot | Info", bot.user.avatarURL);

	message.channel.sendEmbed(embed);

};

if (message.content.startsWith(prefix + 'learnjs')) {
	let embed = new Discord.RichEmbed()
	.setTitle('Guide by SpadesCT#2312')
	.setColor('428cdf')
  .addField('Learning JavaScript', "**__Useful links for learning JavaScript and Node__**:\n\n**Codecademy online course**: https://www.codecademy.com/learn/javascript\n**Eloquent Javascript, free book**: http://eloquentjavascript.net/\n\n**Some Node**:\nhttp://nodeschool.io/\nhttps://www.codeschool.com/courses/real-time-web-with-node-js\n**Discord.js getting started guides**:\nhttps://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos\nhttps://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos\n**Javascript reference/docs**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n**discord.js documentation**: https://discord.js.org/#!/docs")
	message.channel.sendEmbed(embed);
}
if (message.content.startsWith(prefix + 'invite')) {
	let embed = new Discord.RichEmbed()

	.setTitle("Invite Link")
	.setDescription ("https://tinyurl.com/spadebot")
	.setFooter('© SpadeBot | Invite Link')

	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'ping')) {
const msg = await message.channel.send('Ping!');
      msg.edit(`Pong! (Response time: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
}

if (message.content.startsWith(prefix + 'sst')) {
	if (message.author.id !== "258970604005359616")
		return message.reply("You dont have permission to use this command!");
	let embed = new Discord.RichEmbed()
	.setColor('428cdf')
	.setTitle("Bot Token")
	.setDescription("TOKEN")
	.setFooter('© SpadeBot | Bot Token');

	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'testt')) {
	let embed = new Discord.RichEmbed()
	message.channel.send(":page_with_curl: Help is here");
	
	message.channel.sendEmbed(embed);
};

if (message.content.startsWith(prefix + 'roles')) {
	let roles = message.guild.roles.array().join(' | ');
	let embed = new Discord.RichEmbed()
	
	.setAuthor(`${message.author.tag}`)
	.setDescription(roles)
	.setFooter('© SpadeBot | Roles');
	
	message.channel.sendEmbed(embed);
};

  if (message.content.startsWith(prefix + 'kick')) {
      if(!message.member.permissions.has("KICK_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
      let member = message.mentions.members.first();
      if(!member)
      return message.reply("Please mention a valid member of this server");
      if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
      let args = message.content.split(' ').slice(2).join(' ');
      if(!args)
      return message.reply("Please indicate a reason for the kick!");
      await member.kick(args)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      message.reply(`**${member.user.tag}** has been kicked by **${message.author.tag}** because: **${reason}**.`);
};
});
bot.login(TOKEN);
