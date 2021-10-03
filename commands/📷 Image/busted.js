const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "busted",
  category: '📷 Image',
  timeout: 5000,
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/busted?image=https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
    message.channel.send(embed)
  
  
}}