const Discord = require('discord.js')

module.exports = {
   name: "bam",
	 description: "Bam a user (fake ban)",
	 options: [
		 {
			 name: 'user',
			 description: 'User to bam',
			 required: true,
			 type: 'USER'
		 },
		 {
			 name: 'reason',
			 description: 'Reason of the bam',
			 required: false,
			 type: 'STRING'
		 }
	 ],
	 run: async(client, interaction) => {
		 const { options, user } = interaction;

		 const embed = new Discord.MessageEmbed()
		 .setTitle('User bammed')
		 .addField('User', `\`\`\`${options.getUser('user').tag}\`\`\``)
		 .addField('Moderator', `\`\`\`${user.tag}\`\`\``)
		 .addField('Reason', `\`\`\`${options.getString('reason') || 'No Reason Specified'}\`\`\``)
		 .setColor('#2f3136')

		 interaction.reply({embeds: [embed]})
		 
	 }
}