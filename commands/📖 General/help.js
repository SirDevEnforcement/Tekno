const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');
const { stripIndents } = require('common-tags');


module.exports = {
  name: 'help',
  aliases: ['h'],
  category: '📖 General',
  run: async (client, message, args) => {
    if (args[0]) {
      return getCMD(client, message, args[0]);
    }
    return getAll(client, message);
  },
};

function getAll(client, message) {
  let prefix = 't!'
  const embed = new MessageEmbed()
    .setAuthor(`Tekno - Help Menu`, client.user.avatarURL())
    .addField(`Links`, `[\` Invite \`](https://tekno-the-bot.repl.co/invite.html)  [\` Website \`](https://tekno-the-bot.repl.co)  [\` Support Server \`](https://discord.gg/keykNcVDn3)`)
    .addField(`Information`, `  \`\`\`Prefix: ${prefix} \nDevelopers: DevEnforcement#9925 & Aidan The Sister#1714\nServers: ${client.guilds.cache.size}\nUsers: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}\`\`\` `)

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

  embed.setDescription(info)
  return message.channel.send(embed);
}

function getCMD(client, message, input) {
	const embed = new MessageEmbed();

	const cmd = client.commands.get(input.toLowerCase())
        || client.commands.get(client.aliases.get(input.toLowerCase()));

	let info = `No information found for command **${input.toLowerCase()}**`;

	if (!cmd) {
		return message.channel.send(embed.setAuthor(`Help Menu`, message.author.displayAvatarURL()).setFooter(message.author.username, message.author.displayAvatarURL()).setDescription(info)
			.setThumbnail(client.user.displayAvatarURL()));
	}

	if (cmd.name) info = `**Command name** : \`${cmd.name}\``;
	if (cmd.aliases) info += `\n**Aliases** : ${cmd.aliases.map((a) => `\`${a}\``).join(', ')}`;
	return message.channel.send(embed.setAuthor(`${message.author.username}`, message.author.displayAvatarURL()).setDescription(info).setFooter(message.author.username, message.author.displayAvatarURL())
		.setThumbnail(client.user.displayAvatarURL()));
}