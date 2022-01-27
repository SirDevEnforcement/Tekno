const Discord = require('discord.js');
module.exports = {
  name: "loop",
  description: "Loop the queue!",
	options: [{
		name: 'choice',
		description: 'Song, Off',
		type: 'STRING',
		required: true
	}],
	run: async(client, interaction, args) => {

    let mode = client.distube.setRepeatMode(interaction, interaction.options.getString('choice'));
		if(interaction.options.getString('choice') === 'Song') mode = 1
		if(interaction.options.getString('choice') === 'Off') mode = 0
        interaction.reply({content: "Set repeat mode to `" + mode + "`"});

  }
  }