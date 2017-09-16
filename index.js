const Discord = require('Discord.js');
const prefix = "sb!"
var bot = new Discord.Client()

bot.on('ready',() => {
	console.log('SpadeBot has joined the server.');
	
bot.user.setStatus('dnd');

bot.user.setGame('sb!help', 'https://twitch.tv/immortal1337');

});	
bot.on('guildMemberAdd', member => {
let channel = member.guild.channels.filter(c => c.type === "text").find("name", "hihi");

	console.log('User ' + member.user.username + ' has joined the server!')
	console.log(member.user.tag)
	
	var role = member.guild.roles.find('name', 'User');
	
	member.addRole(role)
	
    channel.send('**' + member.user.username + '**, has joined the server!');
});
bot.on('guildMemberRemove', member => {
let channel = member.guild.channels.filter(c => c.type === "text").find("name", "hihi");

	console.log('User ' + member.user.username + ' has left the server!')
	console.log(member.user.tag)
	
	channel.send('**' + member.user.username + '**, has left the server!');
});
bot.on('message', async message => {
if(message.author.bot) return;

if (message.content.startsWith(prefix + 'userinfo')) {
    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.members.first() || message.member;
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
        .addField("AvatarURL", `${user.avatarURL}`)
        .addField("Playing", user.presence.game ? user.presence.game.name : 'None')
        .addField("UserStatus", `${user.presence.status}`)
        .addField("Joined Guild", `${guild.joinedAt}`)
        .addField("Joined Discord", `${user.createdAt}`)
        .addField("isBot", `${user.bot}`)
    	.addField("Roles", member.roles.filter(r => r.name !== "@everyone").array(r => r.name).join(','))
        .setFooter("© SpadeBot | UserInfo", bot.user.avatarURL);
        message.channel.sendEmbed(embed);
} else

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
	.setThumbnail(guild.iconURL)
	.setFooter("© SpadeBot | UserInfo", bot.user.avatarURL);

	message.channel.sendEmbed(embed);
} else

if (message.content.startsWith(prefix + 'info')) {
	let embed = new Discord.RichEmbed()

	.setTitle("SpadeBot")
	.addField("Discord.JS Version", "8.2.0")
	.addField("Bot Version", "1.0.0")
	.addField("Node.JS Version", "8.4.0")
	.addField("Lisense", "MIT")
	.addField("Bot Uptime", bot.uptime)
	.addField("Developed By:", 'SpadesCT#2312')
	.addField("Users:", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString());
	
	message.channel.sendEmbed(embed);

} else

if (message.content.startsWith(prefix + 'learnjs')) {
	let embed = new Discord.RichEmbed()
	.setTitle('Learn JavaScript')
	.setColor('428cdf')
	.setDescription('Guide by SpadesCT#2312')
	.addField("Node", "http://nodeschool.io/")
	.addField("http://nodeschool.io/")
	.addField("https://www.codeschool.com/courses/real-time-web-with-node-js")
	.addField("Discord Reference Guides")
	.addField("https://yorkaargh.gitbooks.io/discord-js-bot-guide/content/")
	.addField("https://www.youtube.com/channel/UCvQubaJPD0D-PSokbd5DAiw/videos")
	.addField("https://www.youtube.com/channel/UCLun-hgcYUgNvCCj4sIa-jA/videos")
	.addField("Javascript")
	.addField("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference")
	.addField("https://www.codecademy.com/learn/javascript")
	.addField("http://eloquentjavascript.net/")
	.addField("Discord Documention")
	.addField("https://discord.js.org/#!/docs/")
	.addField("https://discordapp.com/developers/docs/intro");

	message.channel.sendEmbed(embed);
} else
	
if (message.content.startsWith(prefix + 'invite')) {
	let embed = new Discord.RichEmbed()

	.setTitle("Invite Link")
	.setDescription ("https://tinyurl.com/spadebot")
	.setFooter('© SpadeBot | Invite Link')

	message.channel.sendEmbed(embed);
} else

if (message.content.startsWith(prefix + 'ping')) {
const msg = await message.channel.send('Ping!');
      msg.edit(`Pong! (Response time: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
} else 

if (message.content.startsWith(prefix + 'sst')) {
	if (message.author.id !== "258970604005359616")
		return message.reply("You dont have permission to use this command!");
	let embed = new Discord.RichEmbed()

	.setColor('428cdf')
	.setTitle("Bot Token")
	.setDescription("TOKEN")
	.setFooter('© SpadeBot | Bot Token');

	message.channel.sendEmbed(embed);
} else

if (message.content.startsWith(prefix + 'help')) {
	let embed = new Discord.RichEmbed()
	message.channel.send(":page_with_curl: Help is here")
	message.author.send("Heres the Help: :middle_finger:");
	
	message.channel.sendEmbed(embed);
} else

if (message.content.startsWith(prefix + 'roles')) {
	let roles = message.guild.roles.array().join(' | ');
	let embed = new Discord.RichEmbed()
	
	.setAuthor(`${message.author.tag}`)
	.setDescription(roles)
	.setFooter('© SpadeBot | Roles');
	
	message.channel.sendEmbed(embed);
} else

 if (message.content.startsWith(prefix + 'ban')) {
      if(!message.member.permissions.has("BAN_MEMBERS"))
      return message.reply("Sorry, you don't have permissions to use this!");
      let member = message.mentions.members.first();
      if(!member)
      return message.reply("Please mention a valid member of this server");
      if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
      let args = message.content.split(' ').slice(2).join(' ');
      if(!args)
      return message.reply("Please indicate a reason for the ban!");
      await member.ban(args)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
      message.channel.send(`**${member.user.tag}** has been banned by **${message.author.tag}** because: **${reason}**.`);
} else

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

if (message.content.startsWith(prefix + 'say')) {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	let text = args.slice(1).join(" ");
	message.delete();
	message.channel.send(text);
};

if(message.content.toLowerCase().includes('poop'))
	message.react('💩');
});
bot.login(TOKEN);
