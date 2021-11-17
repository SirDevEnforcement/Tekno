const Discord = require('discord.js');
const premium = require('../../premium.json')
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

client.on("messageDelete", async(message) => {
  if(premium.includes(message.guild.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
    .setTitle('Message Deleted')
    .setDescription(message.content)
    .setFooter('Premium Auto-Snipe')
    message.channel.send({embeds: [embed]})
  }
})
}