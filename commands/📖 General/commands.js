const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
	name: 'commands',
  category: '📖 General',
	run: async (client, message, args) => {
		if (!args[0]) return getAll(client, message);
	},
};

function getAll(client, message) {
	const embed = new MessageEmbed()
  .setDescription()

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