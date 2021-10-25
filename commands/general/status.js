const Discord = require('discord.js');
module.exports = {
  name: "status",
  description: "Get the correct codes for Tekno's status'!",
  run: async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(`Tekno`)
    .setDescription("**Online** - `Fully Functional`\n**Idle** - `Development is going on`\n**Do Not Disturb** - `Major errors in code`\n**Offline** - `So much major errors happening that the bot is offline!`")
    message.reply({embeds: [embed]})

  }
  }