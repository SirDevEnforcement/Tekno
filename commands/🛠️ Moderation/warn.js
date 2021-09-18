const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warn",
  category: "🛠️ Moderation",
  run: async (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You do not have the required permissions! ` ADMINISTRATOR `. Do `t!permissions` to view your permissions!")
    }
    
    const user = message.mentions.members.first()
    
     if(!user) {
      return message.channel.send("Mention the person you want to warn.")
    }

    if(user.id === '815878862075985971' || user.id === '585835814743834661') return message.channel.send('You tried to warn the developer, but you cant!');

       if(message.mentions.users.first().bot) {
      return message.channel.send("You cannot warn bots!");
    }

     if(message.author.id === user.id) {
      return message.channel.send("You cannot warn yourself!");
    }

    const reason = args.slice(1).join(" ");

  if(!reason) {
      return message.channel.send("Please provide reason to warn!")
    } else {
      const warnreason = db.get(`warnreason_${message.guild.id}_${user.id}`)
      if(warnreason) {
        db.delete(`warnreason_${message.guild.id}_${user.id}`)
      } else {
        warnreason.set(`${message.guild.id}_${user.id}`, args.slice(1).join(" "))
      }
    }

     let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

     if(warnings === 10) {
      user.kick('Reached maximum amount of warnings [10]')
    }

     if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for \`${reason}\``)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for \`${reason}\``)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for \`${reason}\``)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }
}}