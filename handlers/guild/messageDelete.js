const Discord = require('discord.js');
module.exports = async (client) => {
client.on("messageDelete", (message) => {
  client.snipes.set(message.guild.id, {
    content: message.content,
    author: message.author.tag,
    channel: message.channel.name,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})
}