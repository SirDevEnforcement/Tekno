const Discord = require('discord.js')

module.exports = {
   name: "confess",
	 description: "Confess something!",
	 options: [
		 {
		 name: 'public',
		 type: 'STRING',
		 description: 'Yes/No/True/False',
		 required: true,
	   },
		 {
			 name: 'confession',
			 type: 'STRING',
			 description: 'Whats your confession?',
			 required: true
		 }
	 ],
	 run: async(client, interaction) => {

		 const e = interaction.options.getString('public').toLowerCase()

		 if(e === ['false', 'no']) {
			 const anon = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setAuthor('Anonymous Confession', 'https://cdn.discordapp.com/emojis/943484322923561011.png?size=512')
			 .setDescription(interaction.options.getString('confession'))

			 interaction.channel.send({embeds: [anon]})
		 } else if(e === ['true', 'yes']) {
			 const public = new Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setAuthor(interaction.user.username, interaction.user.displayAvatarURL({dynamic: true, format: 'png'}))
			 .setDescription(interaction.options.getString('confession'))

			 interaction.channel.send({embeds: [embed]})
		 }
	
	 }
}