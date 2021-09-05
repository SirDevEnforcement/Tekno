const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "bal",
  run: async (client, message, args) => {

    const money = db.get(`balance_${message.author.id}`);



    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}'s balance`)
      .setDescription(` \`\`\`Use t!daily to earn more money!\`\`\` `)
      .addField(`Balance`, `<:TeknoCoin:881568352093503538>\`${money}\``)


    message.channel.send(embed)


  }
}