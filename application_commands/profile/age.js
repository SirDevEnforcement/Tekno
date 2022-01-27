const Discord = require('discord.js');
module.exports = {
  name: "age",
  description: "Set your profile's age!",
	options: [{
		name: 'age',
		description: 'Put in your age!',
		type: 'STRING',
		required: true
	}],
  run: async(client, interaction, args) => {
		const message = interaction;
    const db = require('quick.db');

    db.set(`age_${message.user.id}`, interaction.options.getString('age'))
        interaction.reply({content: 'Success!'})

  }
  }