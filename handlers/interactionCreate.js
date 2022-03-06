module.exports = async (client) => {
	const db = require('quick.db')
  client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
     const slash_commands = client.slashcommands.get(interaction.commandName);
    if (!slash_commands) return interaction.followUp({ content: "This interaction failed." });

    try {
      slash_commands.run(client, interaction);
			db.add('usage', 1)
			const embed = new client.Discord.MessageEmbed()
			.setTitle('Interaction (/) command ran')
			.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: 'png', dynamic: true}))
			.addField('Interaction Author', `\`\`\`${interaction.user.tag}\`\`\``)
			.addField('Command Name', `\`\`\`${interaction.commandName}\`\`\``)
			.addField('Guild Name', `\`\`\`${interaction.guild.name}\`\`\``)
			.addField('Guild ID', `\`\`\`${interaction.guild.id}\`\`\``)
			.addField('Channel Name', `\`\`\`${interaction.channel.name}\`\`\``)
			.addField('Channel ID', `\`\`\`${interaction.channel.id}\`\`\``)
			.setTimestamp()
			.setColor('#2f3136')
			client.channels.cache.get('894164132704714765').send({embeds: [embed]})
    } catch (e) {
      console.error(e)
    }
  } else return;

  })
}