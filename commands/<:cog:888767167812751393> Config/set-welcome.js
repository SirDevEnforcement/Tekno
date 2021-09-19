const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
  name: "set-welcome",
  category: "<:cog:888767167812751393> Config",
  run: async (client, message, args) => {

    if(!message.member.hasPermission(`MANAGE_CHANNELS`)) return message.channel.send("You need the `MANAGE_CHANNELS` permission!")

    try {
      if(!args[0]) {
        message.channel.send('Mention the channel\'s ID (Not mention)')
      }

      db.set(`welcomechannel_${message.guild.id}`, args[0])
      message.channel.send(`Set your welcome channel to: <#${args[0]}>`)
    } catch(e) {
      console.log(e)
    }
  
  
}}