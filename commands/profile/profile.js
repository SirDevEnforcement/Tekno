const Discord = require('discord.js');
module.exports = {
  name: "profile",
  description: "View your profile for the bot! (Not whois)",
  run: async(client, message, args) => {
    const db = require('quick.db');

    const description = db.get(`description_${message.author.id}`) || 'None';
    const gender = db.get(`gender_${message.author.id}`) || 'None specified';
    const age = db.get(`age_${message.author.id}`) || 'None specified';

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({format: 'png'}))
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .addField('Bio', description)
    .addField('Gender', gender, true)
    .addField('Age', age, true)

    message.reply({embeds: [embed]})

  }
  }