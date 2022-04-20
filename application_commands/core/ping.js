module.exports = {
    name: "ping",
    description: "Test the bot's latency",
	  timeout: 2000,
    run: async (client, interaction) => {
			const embed = new client.Discord.MessageEmbed()
			.setColor('#2f3136')
			.setDescription('Wait a moment...')
				const mesg = await interaction.reply({embeds: [embed], fetchReply: true})
				
			const ping = mesg.createdTimestamp - interaction.createdTimestamp;
				const embed2 = new client.Discord.MessageEmbed()
					.setColor('#2f3136')
					.setTitle('🏓 Ping!')
					.addField(`Message Latency`, `\`\`\`${ping}ms\`\`\``)
					.addField(`Client Latency`, `\`\`\`${client.ws.ping}ms\`\`\``)

					interaction.editReply({embeds: [embed2]})
			client.modlogs({
			 Member: interaction.user,
			 Action: 'PING (Slash Command)',
		 }, interaction)
			
    }
}