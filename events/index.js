module.exports = async(client) => {

	// GuildMember events (excluding guildMemberUpdate)
	client.on('guildMemberAdd', async member => {
		const channelToSend = member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
		if(!channelToSend) return;
		const welcomeembed = new client.Discord.MessageEmbed()
    .setAuthor('Member Joined!', 'https://cdn.discordapp.com/emojis/926839973171302400.png?size=512')
    .setColor('GREEN')
    .setThumbnail(member.displayAvatarURL())
    .setDescription(`👋 Welcome ${member.user.tag} to **${member.guild.name}**!\nMake sure to read the rules of the server!\n\nHave a __great__ day!`)
    .setFooter(`User No. ${member.guild.memberCount}; User ID: ${member.id}`)    .setTimestamp()
		channelToSend.send({embeds: [welcomeembed]})
		
	})

	client.on('guildMemberRemove', async member => {
		const channelToSend = member.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
		if(!channelToSend) return;
			const welcomeembed = new client.Discord.MessageEmbed()
    .setAuthor('Member Left!', 'https://cdn.discordapp.com/emojis/926839973171302400.png?size=512')
    .setColor('RED')
    .setThumbnail(member.displayAvatarURL())
    .setDescription(`👋 Goodbye ${member.user.tag}!\nHave a __great__ day!`)
    .setFooter(`User No. ${member.guild.memberCount}; User ID: ${member.id}`)    .setTimestamp()
		channelToSend.send({embeds: [welcomeembed]})
		
	})

	// Emoji

	client.on('emojiCreate', async emoji => {
		const channelToSend = emoji.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
		if(!channelToSend) return;
		const embed = new client.Discord.MessageEmbed()
		.setTitle(`<:staff:926838334788083793> Emoji Created`, emoji.guild.iconURL())
		.setColor('GREEN')
		.addField('Emoji Name', `${emoji.name}`, true)
		.setTimestamp()
		.setThumbnail(emoji.link())

		channelToSend.send({embeds: [embed]})
	})

	client.on('emojiDelete', async emoji => {
		const channelToSend = emoji.guild.channels.cache.find(channel => channel.name.includes('tekno-logs'))
		if(!channelToSend) return;
		const embed = new client.Discord.MessageEmbed()
		.setTitle(`<:staff:926838334788083793> Emoji Deleted`, emoji.guild.iconURL())
		.setColor('RED')
		.addField('Emoji Name', `${emoji.name}`, true)
		.setTimestamp()
		.setThumbnail(emoji.link())

		channelToSend.send({embeds: [embed]})
	})

	
}