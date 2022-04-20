const Discord = require('discord.js')
	module.exports = {
    name: "kick",
    description: "Kick someone from the server",
	  options: [
			{
				name: 'target',
				description: 'Target to kick',
				type: 'USER',
				required: true
			},
			{
				name: 'reason',
				description: 'Target to kick',
				type: 'STRING',
				required: false
			}
		],


    run: async (client, interaction) => {
			const target = interaction.options.getMember('target');

			if(target.id === interaction.user.id) return interaction.reply('⛔ You cannot kick yourself!')
			if(target.permissions.has('ADMINISTRATOR')) return interaction.reply('⛔ You cannot kick this user!');

			const reason = interaction.options.getString('reason');

			if(reason.length > 512) return interaction.reply('⛔ This reason exceeds 512 characters');
			

			

			const embed = new Discord.MessageEmbed()
				.setTitle('<:Tekno_Moderator:951526699638587422> Member Kicked')
				.setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
				.setColor('RANDOM')
				.addField(`Member`, `\`\`\`${target.user.tag}\`\`\``)
        .addField('Kicked by', `${interaction.user.tag}`)
        .addField('Reason', `\`\`\`${reason}\`\`\``)
				.setTimestamp()
				.setColor('#2f3136')
				.setFooter(`Guild: ${interaction.guild.name}`, target.user.displayAvatarURL({ dynamic: true }));
			  target.send({embeds: [embed]}).catch(e => interaction.reply('⛔ Could not DM user.'))
        target.ban({reason: reason});
			  
			  interaction.reply({ embeds: [embed] })

			client.modlogs({
			 Member: interaction.user,
			 Action: 'KICK (Slash Command)',
		 }, interaction)
			  
    }
}