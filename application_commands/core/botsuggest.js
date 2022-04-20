const Discord = require('discord.js')

module.exports = {
   name: "botsuggest",
	 description: "Suggest something for the bot!",
	 options: [
		 {
			 name: 'suggestion',
			 description: 'Whats your amazing idea?',
			 type: 'STRING',
			 required: true
		 },
		 {
			 name: 'purpose',
			 description: 'Why?',
			 type: 'STRING',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const { options } = interaction;

		 const suggestion = options.getString('suggestion')
		 const purpose = options.getString('purpose');

		 const embed = new Discord.MessageEmbed()
		 .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: 'png', dynamic: true}))
		 .setColor('#2f3136')
		 .setDescription('<:Tekno_Tick:951526699386961994> - Yes\n<:Tekno_Cross:951526699663761529> - No')
		 .addField('Suggestion', suggestion.toString(), true)
		 .addField('Purpose', purpose.toString(), true)

		 const channel = client.channels.cache.get('894164132553699390')

		 const msg = await channel.send({embeds: [embed]})
		 msg.react('<:Tekno_Tick:951526699386961994>')
		 msg.react('<:Tekno_Cross:951526699663761529>')

		 interaction.reply('Sent to the discord server: https://discord.gg/eJQvFcAbK5')

		 client.modlogs({
			 Member: interaction.user,
			 Action: 'SUGGEST (Slash Command)',
		 }, interaction)
		 

		 
	 }
}