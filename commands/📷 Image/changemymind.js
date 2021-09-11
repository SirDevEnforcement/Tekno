const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
  name: "changemymind",
  category: 'Image',
  timeout: 5000,
  run: async (client, message, args) => {
  const text = args.join(" ")
    if(!text) return message.channel.send(new Discord.MessageEmbed().setDescription(`Usage: t!changemymind <message>`))
   const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`));
           const json = await res.json();
   const embed = new MessageEmbed()
   .setImage(json.message)
   message.channel.send(embed)
  
}}