const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "achievement",
  category: '📷 Image',
  timeout: 5000,
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setImage(`https://api.leoapi.xyz/image/achievement?title=Achievement&text=${args.join("+")}`)
    message.channel.send(embed)
  
  
}}