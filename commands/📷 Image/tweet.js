const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = {
  name: "tweet",
  timeout: 5000,
  category: '📷 Image',
  run: async (client, message, args) => {

  const text = args.join(" ")
    if(!text) return message.channel.send(new Discord.MessageEmbed().setDescription(`Usage: t!tweet <message>`))
   const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`));
           const json = await res.json();
   const embed = new MessageEmbed()
   .setImage(json.message)
   message.channel.send(embed)
  
}} 