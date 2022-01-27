const Discord = require('discord.js');
module.exports = {
  name: "bio",
  description: "Set your profile's bio!",
	options: [{
		name: 'bio',
		description: 'Put in your bio!',
		type: 'STRING',
		required: true
	}],
  run: async(client, interaction, args) => {
		const message = interaction;
    const db = require('quick.db');

        db.set(`description_${message.user.id}`, interaction.options.getString('bio'))
        interaction.reply({content: 'Success!'})

  }
  }