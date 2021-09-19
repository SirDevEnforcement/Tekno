const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require('quick.db');


module.exports = {
  name: 'help',
  category: '📖 General',
  run: async (client, message, args) => {
    return getAll(client, message);
  },
};

function getAll(client, message) {
      let prefix = db.get(`prefix_${message.guild.id}`)
       if(!prefix) {
  prefix = 't!'
}
  const embed = new MessageEmbed()
    .setAuthor(`Tekno - Help Menu`, client.user.avatarURL())
    .addField(`Links`, `[\` Invite \`](https://tekno-the-bot.repl.co/invite.html)  [\` Website \`](https://tekno-the-bot.repl.co)  [\` Support Server \`](https://discord.gg/keykNcVDn3)`)
    .addField(`Information`,`  \`\`\`Prefix: ${prefix} \nDeveloper: DevEnforcement#9925 ( 585835814743834661 )\nServers: ${client.guilds.cache.size}\nUsers: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\`\` `)

  const commands = (category) => client.commands
    .filter((cmd) => cmd.category === category)
    .map((cmd) => `\`${cmd.name}\``)
    .join('  ');

  const info = client.categories
    .map(
      (cat) => stripIndents` \n**${cat[0].toUpperCase() + cat.slice(1)}**  \n${commands(
        cat,
      )}`,
    )
    .reduce((string, category) => `${string}\n${category}`);
  embed.setFooter(`There are ${client.commands.size} commands!`, message.author.displayAvatarURL());
  return message.channel.send(embed.setDescription(info));
}