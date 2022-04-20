module.exports = async(client) => {
  client.on("messageUpdate", (oldMessage, newMessage) => {
  client.editsnipes.set(newMessage.guild.id, {
    oldMessage: oldMessage.content,
    newMessage: newMessage,
    author: newMessage.author.tag,
    channel: newMessage.channel.name,
    member: newMessage.member,
    image: newMessage.attachments.first() ? newMessage.attachments.first().proxyURL : null
  })
})
}