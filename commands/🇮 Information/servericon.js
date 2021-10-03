const Discord = require('discord.js');

module.exports = {
	name: 'servericon',
  category: '🇮 Information',
  aliases: ['si'],
	run: (client, message) => {
		const embeduser = new Discord.MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
			.setTitle('Server Icon')
			.setColor('RANDOM')
			.setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
			.setTimestamp()
			.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

		return message.reply(embeduser);
	},
};