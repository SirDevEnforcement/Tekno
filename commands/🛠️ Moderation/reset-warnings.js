const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "reset-warnings",
  category: "🛠️ Moderation",
  run: async (client, message, args) => {
  
   if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You do not have the required permissions! ` ADMINISTRATOR `. Do `t!permissions` to view your permissions!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Please mention the person whose warnings you want to reset!")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bots are not allowed to have warnings!")
    }

    if(message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your own warnings!")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

     if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} does not have any warnings!`)
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings have been reset by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reset all warnings of ${message.mentions.users.first().username}`)
    
    
}}   