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
		 .setEmoji('<:link:943484322894184458>')

		 const button2 = new MessageButton()
		 .setLabel('Support Server')
		 .setStyle('LINK')
		 .setURL('https://discord.gg/eJQvFcAbK5')
		 .setEmoji('<:discord:943484322923561011>')

		 const button3 = new MessageButton()
		 .setLabel('Website')
		 .setStyle('LINK')
		 .setURL('https://tekno-the-bot.repl.co')
		 .setEmoji('<:compass:943484322852266095>')

		 const button4 = new MessageButton()
		 .setLabel('Made with Discord.JS')
		 .setStyle('PRIMARY')
		 .setEmoji('<:djs:851461487498493952>')
		 .setDisabled(true)
		 .setCustomId('button_4')

		 const row = new MessageActionRow()
		 .addComponents([button1, button2, button3, button4])

		 interaction.reply({embeds: [embed], components: [row]})
	
	 }
}