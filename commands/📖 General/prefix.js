const { MessageEmbed } = require('discord.js');


module.exports = {
  name: "prefix",
  category: "📖 General", 
  run: async (client, message, args) => {
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (!prefix) {
      prefix = 't!'
    }
    if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.channel.send('You do not have the `MANAGE_MESSAGES` permission!')

    if (!args[0]) {
      const embed = new MessageEmbed()
        .setDescription(`You current prefix is: \`${prefix}\``)
      message.channel.send(embed)
    } else {
      db.set(`prefix_${message.guild.id}`, args[0])
      const embed = new MessageEmbed()
        .setDescription(`Set your prefix to: \`${args[0]}\``)
      message.channel.send(embed)
    }




  }
}