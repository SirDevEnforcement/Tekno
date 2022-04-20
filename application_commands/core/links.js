const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = Discord;

module.exports = {
   name: "links",
	 description: "Get the links for all things Tekno!",
	 run: async(client, interaction) => {

		 const embed = new Discord.MessageEmbed()
		 .setDescription('🔗')
		 .setColor('#2f3136')

		 const button1 = new MessageButton()
		 .setLabel('Invite')
		 .setStyle('LINK')
		 .setURL('https://tekno-the-bot.repl.co/invite')
		 .setEmoji('<:Tekno_Plus:951526700066406491>')

		 const button2 = new MessageButton()
		 .setLabel('Support Server')
		 .setStyle('LINK')
		 .setURL('https://discord.gg/eJQvFcAbK5')
		 .setEmoji('<:Tekno_Discord:951543783877668976>')

		 const button3 = new MessageButton()
		 .setLabel('Website')
		 .setStyle('LINK')
		 .setURL('https://tekno-the-bot.repl.co')
		 .setEmoji('<:Tekno_Desktop:959764498032496661>')

		 const row = new MessageActionRow()
		 .addComponents([button1, button2, button3])

		 interaction.reply({embeds: [embed], components: [row]})
		 client.modlogs({
			 Member: interaction.user,
			 Action: 'LINKS (Slash Command)',
		 }, interaction)
	
	 }
}