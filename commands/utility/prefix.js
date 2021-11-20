const Discord = require('discord.js');
module.exports = {
  name: "prefix",
  description: "Change your servers prefix",
  run: async(client, message, args) => {

    const noperms = new Discord.MessageEmbed()
    .setTitle('<:administrator:909142407180849193> No Permissions')

    if(!message.member.has.permissions('MANAGE_SERVER'))  {
      return message.channel.send({embeds: [noperms]})
      } else {
      if(!args[0]) {return message.channel.send({content: `Send a message to set your prefix as!`})}
       else {
        db.set(`prefix_${message.guild.id}`, args[0])
        message.channel.send({content: `<:moderator:909142178096373780> Success!`})
      }
    }


  }
  }