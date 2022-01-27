const Discord = require('discord.js');
module.exports = {
  name: "profile",
  description: "View your profile for the bot! (Not whois)",
  run: async(client, interaction, args) => {
    const db = require('quick.db');
		const message = interaction;

    const description = db.get(`description_${message.user.id}`) || 'None';
    const gender = db.get(`gender_${message.user.id}`) || 'None specified';
    const age = db.get(`age_${message.user.id}`) || 'None specified';

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.user.username, message.user.avatarURL({format: 'png'}))
    .setThumbnail(message.user.avatarURL({dynamic: true}))
    .addField('Bio', description)
    .addField('Gender', gender, true)
    .addField('Age', age, true)

    message.reply({embeds: [embed]})

  }
  }