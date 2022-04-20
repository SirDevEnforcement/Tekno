const Discord = require('discord.js');
module.exports = {
  name: "slots",
  description: "Feeling lucky? Its worth a try!",
  run: async(client, interaction, args) => {
		const { Slots } = require('discord-gamecord')

new Slots({
    message: interaction,
    slash_command: true,
    embed: {
        title: '🎰 Slot Machine',
        color: '#2f3136'
    }
}).startGame();

		client.modlogs({
			 Member: interaction.user,
			 Action: 'SLOTS (Slash Command)',
		 }, interaction)

  }
  }