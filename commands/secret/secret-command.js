const Discord = require('discord.js')
module.exports = {
  name: "secret-command",
  description: "How the hell did you find this?",
  run: async(client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle('Secret 👀')
    .setDescription('⭐ You are special, and found this! Special in both ways...')

    message.channel.send({embeds: [embed]})

    }}