const Discord = require('discord.js');
const { getMember, formatDate } = require('../../functions.js');


module.exports = {
	name: 'whois',
	description: 'Get user info!',
	run: async(client, message, args) => {
		const member = await getMember(message, args.join(' ')) || message.member;
		const joined = formatDate(member.joinedAt);
		const roles = member.roles.cache
			.filter(r => r.id !== message.guild.id)
			.map(r => r).join(' `|` ') || 'None';

		const created = formatDate(member.user.createdTimestamp);

		const embed = new Discord.MessageEmbed()
		.setTitle(member.user.username + "#" + member.user.discriminator)
		.addField('ID', `\`\`\`${member.id}\`\`\``)
		.addField('Name', `\`\`\`${member.user.username}\`\`\``, true)
		.addField('Discriminator', `\`\`\`${member.user.discriminator}\`\`\``, true)
		.addField('Nickname', `\`\`\`${member.nickname ? member.nickname : 'No Nickname'}\`\`\``, true)
		.addField('Server Owner?', `\`\`\`js\n${message.guild.ownerId === member.user.id ? 'true' : 'false'}\`\`\``, true)
		.addField('Bot Account?', `\`\`\`js\n${member.user.bot === true ? 'true' : 'false'}\`\`\``, true)
		.addField('Animated Avatar?', `\`\`\`js\n${member.avatarURL({format: 'gif'}) === true ? 'true' : 'false'}\`\`\``, true)
		.addField('Created At', `\`\`\`${created}\`\`\``, true)
		.addField('Joined', `\`\`\`${joined}\`\`\``, true)
		.addField('Roles', `${roles}`)
		.setThumbnail(member.avatarURL({dynamic: true}))

		message.reply({embeds: [embed]})
		
	}
}