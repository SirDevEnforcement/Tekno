const Discord = require('discord.js');
let msgs = [];
module.exports = {
  name: "guild-vote",
  description: "Start a vote!",
  run: async(client, message, args) => {
  
  if (!message.member.permissions.has(`MANAGE_MESSAGES`)) return message.reply(`You dont have perms to execute this command`);
  if (!message.guild.me.permissions.has(`MANAGE_MESSAGES`)) return message.channel.send(`I dont have perms to execute this command!`)
  

    const filter = m => m.author.id == message.author.id;
    let embed = new Discord.MessageEmbed()
    .setFooter(`Vote by ${message.author.tag}`)
    .setColor("#39138b")
    .setThumbnail(message.guild.iconURL())
    .setTimestamp();

    message.delete()
    message.channel.send('<:help:913104163372662825> **What will be the title of voting?**').then(async msg => {
    try {
     
      let msg = await message.channel.awaitMessages({filter,  max: 1, time: 15000, errors: ['time'] });
      embed.setTitle(msg.first().content);
   
    } catch (err) {
      console.log(err);
      msg.edit(`You ran out of time be faster next time. Re-run the command`); return
    }



 
    msg.edit('<:help:913104163372662825> **What will be the first vote?**');
    try {
   
      let msg = await message.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] });
      embed.addField(`:one: First Option`, msg.first().content);
    
    
    } catch (err) {
      console.log(err);
      msg.edit(`You ran out of time be faster next time. Re-run the command`); return
    }




    msg.edit('<:help:913104163372662825> **What will be the Second vote?**')
    try {
    
      let msg = await message.channel.awaitMessages({filter, max: 1, time: 15000, errors: ['time'] });
      embed.addField(`:two: Second Option`, msg.first().content);
     
    } catch (err) {
      console.log(err);
      msg.edit(`You ran out of time be faster next time. Re-run the command`); return
    }

    await message.channel.send({embeds: [embed]}).then(sentMessage => sentMessage.react('1️⃣')).then(reaction => reaction.message.react('2️⃣'))
  })

  }
  }