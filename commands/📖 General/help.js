const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
  name: 'help',
  category: '📖 General',
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setAuthor('Help Menu')
      .setDescription(` \`\`\`Prefix: t! \nDeveloper: DevEnforcement#0001\`\`\` \n Do \`t!commands\` for all the commands!`)
      .addField(`Statistics`, `Servers: \`${client.guilds.cache.size}\`\nUsers: \`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\nChannels: \`${client.channels.cache.size}\``)
      message.channel.send(embed)
  }
}