const Discord = require('discord.js');
module.exports = {
  name: "volume",
  description: "Change the volume!",
	options: [{
		name: 'number',
		description: 'Volume amount',
		type: 'STRING',
		required: true
	}],
  run: async(client, interaction, args) => {

        let amount = interaction.options.getString('number');
		if(isNaN(amount)) return interaction.reply({content: 'Choose a number!', ephemeral: true})
    let queue = client.distube.getQueue(interaction.guild.id);
    queue.setVolume(amount);
    interaction.reply(`>>> Volume set to ${amount}`);

  }
  }