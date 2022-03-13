const Discord = require('discord.js');
const db = require('quick.db')
module.exports = {
  name: "messages",
  description: "Check your total message count!",
  run: async(client, interaction, args) => {

    const global = db.get(`globalMessages_${interaction.user.id}`)
    const guild = db.get(`guildMessages_${interaction.guild.id}_${interaction.user.id}`);

    const embed = new Discord.MessageEmbed()
    .addField(`<:Tekno_Messages:951543621897834536> Global Messages`, `\`\`\`${global} messages\`\`\``)
    .addField(`<:Tekno_Messages:951543621897834536> Guild Messages`, `\`\`\`${guild} messages\`\`\``)
		.setColor('#2f3136')

    interaction.reply({embeds: [embed]})

  }
  }