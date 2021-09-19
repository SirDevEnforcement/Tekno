const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "messages",
  timeout: 5000,
  category: '📖 General',
  run: async (client, message, args) => {

    let member = message.mentions.members.first() || message.member
    let global = await db.fetch(`globalMessages_${member.id}`)
    let guild = await db.fetch(`guildMessages_${member.guild.id}_${member.id}`)
    const embed = new MessageEmbed()
      .setAuthor(`Total Amount of Messages!`, message.author.avatarURL())
      .addField(` Global Messages `, ` \`\`\`${global}\`\`\` `)
      .addField(` Guild Messages `, ` \`\`\`${guild}\`\`\` `)
    message.channel.send(embed)
  }

}