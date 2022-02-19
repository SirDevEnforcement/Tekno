const Discord = require('discord.js');
const { getMember, formatDate } = require('../../functions.js');


module.exports = {
	name: 'serverinfo',
	description: 'Get serverinfo!',
	run: async(client, interaction, args) => {
		const message = interaction;
		const guild = interaction.guild;
		const roles = `<@&${interaction.guild.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(c => c.id).splice(1, 5).join('>, <@&')}> + ${interaction.guild.roles.cache.map(c => c.id).splice(5).length} more`

		const created = formatDate(message.guild.createdTimestamp);

		const embed = new Discord.MessageEmbed()
		.setTitle(message.guild.name)
		.addField('Server Owner ID', `\`\`\`${message.guild.ownerId}\`\`\``)
		.addField('Server ID', `\`\`\`${guild.id}\`\`\``)
		.addField('Total Members', `\`\`\`${guild.memberCount}\`\`\``, true)
		.addField('Total Humans', `\`\`\`${message.guild.memberCount - guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('Total Bots', `\`\`\`${message.guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('Description', `\`\`\`${message.guild.description ? message.guild.description : 'None'}\`\`\``)
		.addField('Created', `\`\`\`${created}\`\`\`<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>`, true)
		.addField('Roles', `${roles}`)
		.setThumbnail(message.guild.iconURL({dynamic: true}))
		.setColor('#2f3136')

		message.reply({embeds: [embed]})
		
	}
}
       
		