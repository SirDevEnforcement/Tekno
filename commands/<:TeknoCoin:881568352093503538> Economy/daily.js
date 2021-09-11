const { MessageEmbed } = require('discord.js');
const db = require('quick.db');


module.exports = {
  name: "daily",
  category: '<:TeknoCoin:881568352093503538> Economy',
  timeout: 8.64e+7,
  run: async (client, message, args) => {

    db.add(`balance_${message.author.id}`, 5000)

    const embed = new MessageEmbed()
    .setTitle('Daily!')
    .setDescription(`You earned your daily <:TeknoCoin:881568352093503538>\`5000\``)
    message.channel.send(embed)
    


  
  
}}