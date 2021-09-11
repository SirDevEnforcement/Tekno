const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "snipe",
  /**
   * 
   * @param {Client} client
   * @param {Message} message
   * @param {string []} args
   */
  run: async (client, message, args) => {

    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send('Nothing to snipe!')

    const embed = new MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    .setFooter(`Get sniped!`)


    message.channel.send(embed)
  
  
}}