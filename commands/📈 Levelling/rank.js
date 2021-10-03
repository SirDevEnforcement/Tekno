const Discord = require('discord.js');
const Canvacord = require('canvacord');
const xpfile = require('../../xp.json')

/* if (xpfile[message.author.id].xp > xpfile[message.author.id].reqxp) {
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp
        xpfile[message.author.id].reqxp *= 2
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp)
        xpfile[message.author.id].level += 1
        message.channelsend(message.author.tag + "You are now level **" + xpfile[message.author.id].level + "**!").then(
            msg => msg.delete({ timeout: "10000" })
        )
        */

module.exports = {
  name: "rank",
  category: "📈 Levelling",
  aliases: ['level'],
  run: async (client, message, args) => {

    if (message.author.bot) return;
    const rankcard = new Canvacord.Rank()
      .setAvatar(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
      .setCurrentXP(xpfile[message.author.id].xp)
      .setRequiredXP(xpfile[message.author.id].reqxp)
      .setStatus(message.author.presence.status)
      .setLevel(xpfile[message.author.id].level)
      .setRank(1, 'RANK', false)
      .setProgressBar("#E28611", "COLOR")
      .setOverlay("#242830")
      .setUsername(message.author.username)
      .setDiscriminator(message.author.discriminator)
      .setBackground("COLOR", "#242830")
    rankcard.build()
      .then(data => {
        const atta = new Discord.MessageAttachment(data, "rank.png")
        message.channel.send(atta)
      })


  }
}