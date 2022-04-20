const Discord = require('discord.js')
	module.exports = {
    name: "ban",
    description: "Ban someone from the server",
	  options: [
			{
				name: 'target',
				description: 'Target to ban',
				type: 'USER',
				required: true
			},
			{
				name: 'reason',
				description: 'Target to ban',
				type: 'STRING',
				required: false
			}
		],


    run: async (client, interaction) => {
			if(!interaction.member.permissions.has('BAN_MEMBERS')) return;
			const target = interaction.options.getMember('target');

			if(target.id === interaction.user.id) return interaction.reply('⛔ You cannot ban yourself!')
			if(target.permissions.has('ADMINISTRATOR')) return interaction.reply('⛔ You cannot ban this user!');

			const reason = interaction.options.getString('reason') || 'None'

			if(reason.length > 512) return interaction.reply('⛔ This reason exceeds 512 characters');
			

			

			const embed = new Discord.MessageEmbed()
				.setTitle('<:Tekno_Moderator:951526699638587422> Member Banned')
				.setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
				.addField(`Member`, `\`\`\`${target.user.tag}\`\`\``)
        .addField('Banned by', `${interaction.user.tag}`)
        .addField('Reason', `\`\`\`${reason}\`\`\``)
				.setTimestamp()
				.setColor('#2f3136')
				.setFooter(`Guild: ${interaction.guild.name}`, target.user.displayAvatarURL({ dynamic: true }));
			  target.send({embeds: [embed]}).catch(e => interaction.reply('⛔ Could not DM user.'))
        target.ban({reason: reason});
			  
			  interaction.reply({ embeds: [embed] })

			client.modlogs({
			 Member: interaction.user,
			 Action: 'BAN (Slash Command)',
		 }, interaction)
			  
    }
}