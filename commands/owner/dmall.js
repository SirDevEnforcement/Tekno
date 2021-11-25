module.exports = {
  name: 'dmall',
  run: async(client, message, args) => {
    if(!message.author.id === '815878862075985971') return;

    await message.guild.members.cache.forEach(member => member.user.send({content: `${args.join(" ")}`})).then(() => {
      message.channel.send({content: `Success`})
    })
    
  }
}