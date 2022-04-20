const Discord = require('discord.js')

module.exports = {
   name: "warm",
	 description: "Warm a user (fake warn)",
	 options: [
		 {
			 name: 'user',
			 description: 'User to warm',
			 required: true,
			 type: 'USER'
		 },
		 {
			 name: 'reason',
			 description: 'Reason of the warm',
			 required: false,
			 type: 'STRING'
		 }
	 ],
	 run: async(client, interaction) => {
		 const { options, user } = interaction;

		 const embed = new Discord.MessageEmbed()
		 .setTitle('User warmed')
		 .addField('User', `\`\`\`${options.getUser('user').tag}\`\`\``)
		 .addField('Moderator', `\`\`\`${user.tag}\`\`\``)
		 .addField('Reason', `\`\`\`${options.getString('reason') || 'No Reason Specified'}\`\`\``)
		 .setColor('#2f3136')

		 interaction.reply({embeds: [embed]})
		 
	 }
}