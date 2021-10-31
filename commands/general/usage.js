const Discord = require('discord.js');
module.exports = {
  name: "usage",
  description: "How many commands have been used! (Number)",
  run: async(client, message, args) => {
    const db = require('quick.db')

    let usage = db.get(`usage`)

    const embed = new Discord.MessageEmbed()
    .setTitle(`Commands used`)
    .setDescription(`\`\`\`    ${usage || 0}\`\`\`  `)

    message.reply({embeds: [embed]})



  }
  }