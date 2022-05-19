const DB = require('../Schemas/ModLogsDB')
module.exports = async(client) => {
	client.on('ready', async() => {
	client.modlogs = async function({ Client, Action }, interaction) {
	const data = await DB.findOne({GuildID: interaction.guild.id})
	if(!data) return;

	const channel = interaction.guild.channels.cache.get(data.ChannelID);
	const embed = new client.Discord.MessageEmbed()
	.setColor('#2f3136')
	.addField('Instigator', `\`\`\`${interaction.user.username} (${interaction.id})\`\`\``)
	.addField('Action', `\`\`\`${Action}\`\`\``)
	.setTimestamp()
	channel?.send({embeds: [embed]})
}
}
						)
}