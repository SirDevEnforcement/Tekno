const Discord = require('discord.js')

module.exports = {
   name: "credits",
	 description: "Credits for everyone who has contributed to the bot!",
	 run: async(client, interaction) => {

     const embed = new Discord.MessageEmbed()
     .setTitle('<:Tekno_HypesquadEvents:951541161317777418> Credits')
     .addField('Scorprian / Vetrilox', 'Allowing me to borrow certain commands, such as CFU ')

     interaction.reply({embeds: [embed]})
	
	 }
}