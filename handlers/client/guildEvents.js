module.exports = async(client) => {
	client.on('guildCreate', async guild => {
		client.guilds.cache.get(guild.id).commands.set(client.slasharray)
		const channel = client.channels.cache.get('894164132704714765')
		const embed = new client.Discord.MessageEmbed()
		.setTitle('Joined a Server')
		.addField('Guild Name', `\`\`\`${guild.name}\`\`\``)
		.addField('Guild ID', `\`\`\`${guild.id}\`\`\``)
		.addField('Guild Owner ID', `\`\`\`${guild.ownerId}\`\`\``)
		.addField('Guild Member Count', `\`\`\`${guild.memberCount}\`\`\``)
		.addField('Time Joined', `<t:${Math.floor(guild.joinedTimestamp / 1000)}:R> (<t:${Math.floor(guild.joinedTimestamp / 1000)}:d>)`)
		.setColor('#2f3136')
		channel.send({embeds: [embed]})
	})
}