module.exports = {
    name: "stats",
    description: "Get the bot's stats!",
    run: async (client, interaction) => {
			const clientCreated = client.user.createdAt.toDateString();
			const applicationOwner = `${client.users.cache.get('815878862075985971').username}#${client.users.cache.get('815878862075985971').discriminator}`;
			const guildCount = client.guilds.cache.size;
			const memberCount = `${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`
			const embed = new client.Discord.MessageEmbed()
			.addField('Guild Count', `\`\`\`${guildCount}\`\`\``)
			.addField('Member Count', `\`\`\`${memberCount}\`\`\``)
			.addField('Bot Created', `\`\`\`${clientCreated}\`\`\``)
			.addField('Bot Owner', `\`\`\`${applicationOwner}\`\`\``)
			.addField('Up Since (Uptime)', `<t:${Math.floor(client.readyTimestamp / 1000)}:R>`)
			interaction.reply({embeds: [embed]})
		}
    }