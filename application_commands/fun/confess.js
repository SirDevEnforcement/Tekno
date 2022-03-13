const Discord = require('discord.js')

module.exports = {
   name: "confess",
	 description: "Whats your confession?",
	 options: [{
		 name: 'confession',
		 description: '👀',
		 type: 'STRING',
		 required: true
	 }],
	 run: async(client, interaction) => {

		 const embed = new Discord.MessageEmbed()
		 .setAuthor('Confession', 'https://cdn.discordapp.com/emojis/943484322923561011.png?size=512')
		 .setDescription(interaction.options.getString('confession'))
		 .setColor('#2f3136')
		 .setFooter('Anonymous Confession')

		 interaction.channel.send({embeds: [embed]})
		 interaction.reply({content: 'Done!', ephemeral: true})
	
	 }
}