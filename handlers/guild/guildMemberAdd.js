module.exports = async(client) => {
	client.on('guildMemberAdd', async member => {
		if(member.guild.id !== '894164132100730880') return;

		const embed = new client.Discord.MessageEmbed()
		.setAuthor(`${member.user.username}#${member.user.discriminator}`, member.displayAvatarURL({dynamic: true}))
		.setDescription(`Welcome <@${member.id}> to ${member.guild.name}! You are our \`#${member.guild.memberCount}\` member!\n> <:replycont:943486573524172800> Read the rules in **<#911569613861568612>**.\n> <:replycont:943486573524172800> View announcements and bot updates in **<#894164132385935396>**.\n> <:reply:943486573360599060> Chat in **<#894164132553699392>**!`)
			.setColor('#2f3136')
		.setTimestamp()

		const webhookClient = new client.Discord.WebhookClient({url: process.env['welcwebhook']});

		webhookClient.send({embeds: [embed], content: '<@&920030045634961418>'});
		let msg = await client.channels.cache.get('911569613861568612').send(`<@${member.id}>`)
		setTimeout(() => {
			msg.delete()
		}, 1000)
		

	})
}