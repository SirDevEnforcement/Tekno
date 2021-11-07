const Discord = require('discord.js');
const { formatDate } = require('../../functions.js');

module.exports = {
	name: 'serverinfo',
	aliases: ['server'],
	description: 'Returns server information',
	run: async (client, message) => {

		const guild = await client.guilds.fetch(message.guild.id);

		const created = formatDate(message.guild.createdAt);

		const serverembed = new Discord.MessageEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL())
      .addField(` \`\`\`  Server Information 1  \`\`\` `, `>>> Server Name ﹕\`${message.guild.name}\`\nServer ID ﹕\`${message.guild.id}\`\nCreated At ﹕\`${created}\``, true)
      .addField(` \`\`\` Server Information 2  \`\`\` `, `>>> Total Member Count ﹕\`${message.guild.memberCount}\`\nHuman Count ﹕\`${message.guild.memberCount - guild.members.cache.filter(m => m.user.bot).size}\`\nBot Count ﹕\`${message.guild.members.cache.filter(m => m.user.bot).size}\``, true)
      .addField(` \`\`\`   Roles   \`\`\``, `> <@&${message.guild.roles.cache.sort((a, b) => b.rawPosition - a.rawPosition).map(c => c.id).splice(1, 5).join('>, <@&')}> + ${message.guild.roles.cache.map(c => c.id).splice(5).length} more`, true)


		message.reply({ embeds: [serverembed] });
	},
};