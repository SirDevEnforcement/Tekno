const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "changemymind",
  category: '📷 Image',
  timeout: 5000,
  run: async (client, message, args) => {
  const text = args.join(" ")
    if(!text) return message.channel.send(new MessageEmbed().setDescription(`Usage: t!changemymind <message>`))
   const embed = new MessageEmbed()
   .setImage(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`)
   message.channel.send(embed)
  
}}