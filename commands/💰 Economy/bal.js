const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "bal",
  category: '💰 Economy',
  run: async (client, message, args) => {

    const money = db.get(`balance_${message.author.id}`);

    if (message.author.id === '815878862075985971' || message.author.id === '585835814743834661') {


      const embed = new MessageEmbed()
        .setTitle(`${message.author.username}'s balance`)
        .setDescription(` \`\`\`Use t!daily to earn more money!\`\`\` `)
        .addField(`Balance`, `<:TeknoCoin:881568352093503538>\`∞\``)


      message.channel.send(embed)

    } else {



      const embed = new MessageEmbed()
        .setTitle(`${message.author.username}'s balance`)
        .setDescription(` \`\`\`Use t!daily to earn more money!\`\`\` `)
        .addField(`Balance`, `<:TeknoCoin:881568352093503538>\`${money}\``)


      message.channel.send(embed)
    }



  }
}