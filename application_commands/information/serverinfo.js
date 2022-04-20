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
		.addField('<:Tekno_Discord:951543783877668976> Server Owner ID', `\`\`\`${message.guild.ownerId}\`\`\``)
		.addField('<:Tekno_Discord:951543783877668976> Server ID', `\`\`\`${guild.id}\`\`\``)
		.addField('<:Tekno_Member:951526699663773888> Total Members', `\`\`\`${guild.memberCount}\`\`\``, true)
		.addField('<:Tekno_Member:951526699663773888> Total Humans', `\`\`\`${message.guild.memberCount - guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('<:Tekno_Robot:951526699634397234> Total Bots', `\`\`\`${message.guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('<:Tekno_lock:951526699588264018> Description', `\`\`\`${message.guild.description ? message.guild.description : 'None'}\`\`\``)
		.addField('<:Tekno_Enter:951526699659579392> Created', `\`\`\`${created}\`\`\`<t:${Math.floor(message.guild.createdTimestamp / 1000)}:R>`, true)
		.addField('<:Tekno_Mention:951526699747663902> Roles', `${roles}`)
		.setThumbnail(message.guild.iconURL({dynamic: true}))
		.setColor('#2f3136')

		message.reply({embeds: [embed]})

		client.modlogs({
			 Member: interaction.user,
			 Action: 'SERVER_INFO (Slash Command)',
		 }, interaction)
		
	}
}
       
		