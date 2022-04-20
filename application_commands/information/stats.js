const { connection } = require('mongoose')
module.exports = {
    name: "stats",
    description: "Get the bot's stats!",
    run: async (client, interaction) => {
			const clientCreated = client.user.createdAt.toDateString();
			const applicationOwner = `${client.users.cache.get('815878862075985971').username}#${client.users.cache.get('815878862075985971').discriminator}`;
			const guildCount = client.guilds.cache.size;
			const memberCount = `${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`
			const embed = new client.Discord.MessageEmbed()
			.addField('Guild Count', `\`\`\`${guildCount}\`\`\``, true)
			.addField('Member Count', `\`\`\`${memberCount}\`\`\``, true)
			.addField('Bot Created', `\`\`\`${clientCreated}\`\`\``)
			.addField('Bot Owner', `\`\`\`${applicationOwner}\`\`\``)
			.addField('MongoDB Status', `\`\`\`${switchTo(connection.readyState)}\`\`\``)
			.addField('Up Since (Uptime)', `<t:${Math.floor(client.readyTimestamp / 1000)}:R>`)
			.setColor('#2f3136')
			interaction.reply({embeds: [embed]})

			function switchTo(val) {
				var status = " "

				switch(val) {
					case 0 : status = '🔴 Disconnected'
						break;
					case 1 : status = '🟢 Connected'
						break;
					case 2 : status = '🟠 Connecting'
						break;
					case 3 : status = '🟣 Disconnecting'
						break;
				}
				return status;
			}

			client.modlogs({
			 Member: interaction.user,
			 Action: 'STATS (Slash Command)',
		 }, interaction)
		}
    }