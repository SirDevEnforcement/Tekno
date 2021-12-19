module.exports = async(client) => {
	client.on('guildMemberAdd', member => {
		if(member.guild.id !== '894164132100730880') return;

		const embed = new client.Discord.MessageEmbed()
		.setAuthor(`${member.user.username}#${member.user.discriminator}`, member.displayAvatarURL({dynamic: true}))
		.setDescription(`Welcome <@${member.id}> to ${member.guild.name}! You are our \`#${member.guild.memberCount}\` member!\n<:replycontinue:919665500198408233> Read the rules in **<#911569613861568612>**.\n<:replycontinue:919665500198408233> View announcements and bot updates in **<#894164132385935396>**.\n<:reply:919553027768193055> Chat in **<#894164132553699392>**!`)
		.setTimestamp()

		client.channels.cache.get('894164132553699392').send({embeds: [embed], content: '<@&920030045634961418>'});

	})
}