const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "invert",
  category: '📷 Image',
  timeout: 5000,
  run: async (client, message, args) => {


    const embed = new MessageEmbed()
    .setImage(`https://shit-api.ml/imagegen/invert?key=3YLQ3c8FMSwGPCRV&image=${message.author.avatarURL()}`)
    message.channel.send(embed)
  
  
}}