const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "invert",
    description: "Invert your profile picture!", 
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setImage(`https://shit-api.ml/imagegen/invert?key=3YLQ3c8FMSwGPCRV&image=${message.author.avatarURL()}`)
      message.channel.send({ embeds: [embed] });
  
  
}}