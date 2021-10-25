const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
    description: "Check the bots latency!", 
  run: async (client, message, args) => {
    const msg = await message.channel.send({content: "Waiting . . ."});
    if (client.ws.ping < 50) {
      const embed = new MessageEmbed()
        .setTitle('Extremely Good Ping')
        .setDescription(`<:goldping:900038218043490357> \`${client.ws.ping}\`ms`)
  msg.edit({embeds: [embed]})
    } else if (client.ws.ping < 100) {


      const embed = new MessageEmbed()
        .setTitle('Good Ping')
        .setDescription(`<:leo_goodping:892325994596298782> \`${client.ws.ping}\`ms`)
          msg.edit({embeds: [embed]})
    } else if (client.ws.ping < 500) {

      const embed = new MessageEmbed()
        .setTitle('Moderate Ping')
        .setDescription(`<:leo_midping:892326052377034772>  \`${client.ws.ping}\`ms`)
          msg.edit({embeds: [embed]})

    } else if (client.ws.ping < 1000) {
      const embed = new MessageEmbed()
        .setTitle('Bad Ping')
        .setDescription(`<:leo_badping:892326095603507230> \`${client.ws.ping}\`ms`)
          msg.edit({embeds: [embed]})
    }


  }
};