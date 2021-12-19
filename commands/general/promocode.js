const codes = ["christmas2021", "devissexy"];
const Discord = require('discord.js');
module.exports = {
  name: "promocode",
  description: "Redeem a promocode!",
  run: async(client, message, args) => {
    if(!args[0]) return message.channel.send('Send a promocode!')


    if(codes.include(args[0])) {
      const embed = new Discord.MessageEmbed()
      .setTitle('Promocode Redeemed')
      .setDescription(`Enjoy, you just earned yourself premium! (server)`)
      message.channel.send({embeds: [embed]})
    }

  }
  }