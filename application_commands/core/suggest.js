const Discord = require('discord.js')

module.exports = {
   name: "suggest",
	 description: "Suggest something for the bot!",
	 options: [
		 {
			 name: 'suggestion',
			 description: 'Whats your amazing idea?',
			 type: 'STRING',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const channel = client.channels.cache.get('894164132553699390')
		 const suggest = interaction.options.getString('suggestion');

		 const embed = new Discord.MessageEmbed()
		 .setColor('#2f3136')
		 .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: 'png', dynamnic: true}))
		 .setDesciption(suggest ? suggest : 'null')

		 channel.send({embeds: [embed]})
		 interaction.reply({content: 'Your suggestion has been submitted! View it here:\nhttps://discord.gg/6AAXQnTkyR', ephemeral: true})
	 }
}