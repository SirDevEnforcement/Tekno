//db.add(`globalMessages_${message.author.id}`, 1)

  // db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)
const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {
  name: "messages",
  description: "Check your total message count!",
  run: async(client, message, args) => {

    const global = db.get(`globalMessages_${message.author.id}`)
    const guild = db.get(`guildMessages_${message.guild.id}_${message.author.id}`);

    const embed = new Discord.MessageEmbed()
    .setTitle('Message Stats!')
    .addField(`Global Messages`, `\`\`\`${global} messages\`\`\``)
    .addField(`Guild Messages`, `\`\`\`${guild} messages\`\`\``)

    message.channel.send({embeds: [embed]})

  }
  }