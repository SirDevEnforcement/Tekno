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
		 if(!interaction.member.permissions.has('MANAGE_MESSAGES')) {
			 const embed = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription('<:Tekno_StickerSad:951526699626012702> Only members with the **MANAGE_MESSAGES** permission can run this command!')

			 interaction.reply({embeds: [embed]})
		 }

		 const amount = options.getNumber("amount");

		 const embed = new client.Discord.MessageEmbed()
		 .setColor(`#2f3136`)

		 
			 await channel.bulkDelete(amount, true).then(messages => {
				 embed.setDescription(`<:Tekno_Messages:951543621897834536> Cleared \`${messages.size}\` messages.`)

				 interaction.reply({embeds: [embed]})

				 client.modlogs({
			 Member: interaction.user,
			 Action: 'CLEAR (Slash Command)',
		 }, interaction)
			 })
		 }
	
	 }