const Discord = require('discord.js');
module.exports = {
  name: "gender",
  description: "Set your profile's gender!",
	options: [{
		name: 'gender',
		description: 'Put in your gender!',
		type: 'STRING',
		required: true
	}],
  run: async(client, interaction, args) => {
		const message = interaction;
    const db = require('quick.db');

    db.set(`gender_${message.user.id}`, interaction.options.getString('gender'))
        interaction.reply({content: 'Success!'})

  }
  }