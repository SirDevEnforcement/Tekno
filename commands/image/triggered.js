const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "triggered",
    description: "I am VERY ANGRYYY", 
  run: async (client, message, args) => {
   const embed = new MessageEmbed()
   .setImage(`https://api.leoapi.xyz/image/triggered?image=${message.author.displayAvatarURL()}`)
     message.channel.send({ embeds: [embed] });
  
}}