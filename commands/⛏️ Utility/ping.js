const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  timeout: 5000,
  category: "⛏️ Utility",
  run: async (client, message, args) => {
    const msg = await message.channel.send("Waiting . . .");
    if(client.ws.ping < 10) {
      const embed = new MessageEmbed()
        .setTitle('Extremely Good Ping')
        .setDescription(`<:good:881238115660988426> \`${client.ws.ping}\`ms`)

      message.channel.send(embed)
    }
    if (client.ws.ping < 100) {


      const embed = new MessageEmbed()
        .setTitle('Good Ping')
        .setDescription(`<:good:881238115660988426> \`${client.ws.ping}\`ms`)

      message.channel.send(embed)
      const channel = client.channels.cache.get('873519146774695967')
      channel.setName(`🟢 Ping: ${client.ws.ping}`)
    } else if (client.ws.ping < 500) {

      const embed = new MessageEmbed()
        .setTitle('Moderate Ping')
        .setDescription(`<:moderate:881238123290443806> \`${client.ws.ping}\`ms`)
      message.channel.send(embed)
      const channel = client.channels.cache.get('873519146774695967')
      channel.setName(`🟡 Ping: ${client.ws.ping}`)
    } else if (client.ws.ping < 1000) {
      const embed = new MessageEmbed()
        .setTitle('Bad Ping')
        .setDescription(`<:bad:881238132568252467> \`${client.ws.ping}\`ms`)
      message.channel.send(embed)
      const channel = client.channels.cache.get('873519146774695967')
      channel.setName(`🔴 Ping: ${client.ws.ping}`)
    }


  }
};