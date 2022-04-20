const Discord = require('discord.js')

module.exports = {
   name: "usage",
	 description: "Get the command usage!",
	 options: [],
	 run: async(client, interaction) => {

		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setDescription(`\`\`\`${client.db.get('usage')} commands ran\`\`\``)

		 interaction.reply({embeds: [embed]})

		 client.modlogs({
			 Member: interaction.user,
			 Action: 'USAGE (Slash Command)',
		 }, interaction)
	
	 }
}