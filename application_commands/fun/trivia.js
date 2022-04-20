const Discord = require('discord.js');
const suggy = require('suggy')

module.exports = {
   name: "trivia",
	 description: "Are you nerdy, or just dumb? Try it out!",
	 run: async(client, interaction) => {

		 suggy.trivia(interaction, {
  type: "BUTTON",
  time: 60,
  blockmsg: '{user} can only use these buttons'
      })

		 client.modlogs({
			 Member: interaction.user,
			 Action: 'TRIVIA (Slash Command)',
		 }, interaction)
		 
	
	 }
}