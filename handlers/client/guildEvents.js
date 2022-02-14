module.exports = async(client) => {
	client.on('guildCreate', async guild => {
		guild.commands.set(client.slasharray);
		const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
		const embed = new client.Discord.MessageEmbed()
		.setTitle('👋 Heya!')
		.setDescription(`I'm \`Tekno\`, the only bot you will ever need!\nTo start, run this simple command: \`/help\`!`)
		channel.send({embeds: [embed]})
	})
}