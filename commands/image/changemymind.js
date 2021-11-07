const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "changemymind",
    description: "Change my mind", 
  run: async (client, message, args) => {
  const text = args.join("%20")
    if(!text) return message.channel.send(new MessageEmbed().setDescription(`Usage: t!changemymind <message>`))
   const embed = new MessageEmbed()
   .setImage(`https://api.leoapi.xyz/image/changemymind?text=${args.join("%20")}`)
     message.channel.send({ embeds: [embed] });
  
}}