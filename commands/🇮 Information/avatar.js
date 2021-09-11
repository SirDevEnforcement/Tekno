const { MessageEmbed } = require('discord.js');

const { getMember } = require('../../functions');

module.exports = {
	name: 'avatar',
  category: 'Information',
	run: async (client, message, args) => {

		const member = await getMember(message, args.join(' ')) || message.member;

		const embed = new MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
			.setTitle(`${member.user.username}'s Avatar`)
			.setColor('RANDOM')
			.setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
			.setTimestamp()
			.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

		message.reply(embed);
	},
};