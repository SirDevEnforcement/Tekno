const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
  name: "tweet",
    description: "Do a tweet!", 
  run: async (client, message, args) => {

  const text = args.join("+")
    if(!text) return message.channel.send(new Discord.MessageEmbed().setDescription(`Usage: t!tweet <message>`))
   const embed = new MessageEmbed()
   .setImage(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
   message.channel.send({ embeds: [embed] });
  
}} 