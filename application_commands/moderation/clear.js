const Discord = require('discord.js')

module.exports = {
   name: "clear",
	 description: "Clear (x) amount of messages! [Up to 100]",
	 options: [
		 {
			 name: 'amount',
			 type: 'NUMBER',
			 description: 'How much messages?', 
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {
		 const { channel, options } = interaction;

		 const amount = options.getNumber("amount");

		 const embed = new client.Discord.MessageEmbed()
		 .setColor(`#2f3136`)

		 
			 await channel.bulkDelete(amount, true).then(messages => {
				 embed.setDescription(`Cleared \`${messages.size}\` messages.`)

				 interaction.reply({embeds: [embed]})
			 })
		 }
	
	 }