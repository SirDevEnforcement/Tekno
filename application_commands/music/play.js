const Discord = require('discord.js');
module.exports = {
  name: "play",
  description: "Play some music!",
	options: [{
		name: 'search',
		description: 'Search some music to play!',
		required: true,
		type: 'STRING'
	}],
  run: async(client, interaction, args) => {

    let search = interaction.options.getString('search')
    let queue = client.distube.getQueue(interaction.guildId);

    client.distube.play(interaction, search);



  }
  }