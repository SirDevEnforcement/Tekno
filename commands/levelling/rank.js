const Discord = require('discord.js');
const Canvacord = require('canvacord');
const db = require('quick.db')

module.exports = {
  name: "rank",
      description: "View your rank!", 
  aliases: ['level'],
  run: async (client, message, args) => {

    const xp = db.get(`xp_${message.guild.id}_${message.author.id}`) || 0;
    const reqxp = db.get(`reqxp_${message.guild.id}_${message.author.id}`) || 0;
    const level = db.get(`level_${message.guild.id}_${message.author.id}`) || 1;

    if (message.author.bot) return;
    const rankcard = new Canvacord.Rank()
      .setAvatar(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setCurrentXP(xp)
      .setRequiredXP(reqxp)
      .setStatus('online')
      .setLevel(level)
      .setRank(1, 'RANK', false)
      .setProgressBar("#E28611", "COLOR")
      .setOverlay("#242830")
      .setUsername(message.author.username)
      .setDiscriminator(message.author.discriminator)
      .setBackground("COLOR", "#242830")
    rankcard.build()
      .then(data => {
        const atta = new Discord.MessageAttachment(data, "rank.png")
        message.channel.send({files: [atta]})
      })


  }
}