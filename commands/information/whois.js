const { MessageEmbed, MessageAttachment } = require('discord.js');
const { getMember, formatDate } = require('../../functions.js');




module.exports = {
	name: 'whois',
	aliases: ['who', 'user'],
  description: 'Returns user information',
	run: async (client, message, args) => {
		const member = await getMember(message, args.join(' ')) || message.member;
  // --
		const premiumSince = formatDate(member.premiumSince);
		const joined = formatDate(member.joinedAt);
		const roles = member.roles.cache
			.filter(r => r.id !== message.guild.id)
			.map(r => r).join(' `|` ') || 'None';

		const created = formatDate(member.user.createdTimestamp);

		const embed = new MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL({format: 'png'}))
    .addField(` \`\`\`   User Information   \`\`\``, `> **Username** ﹕\`${member.user.username}\`\n> **Discriminator** ﹕\`${member.user.discriminator}\`\n> **ID** ﹕\`${member.user.id}\`\n> **Tag** ﹕${member.user}\n> **Account Type** ﹕\`${member.user.bot ? "Bot" : "Human"}\``, true)
    .addField(` \`\`\`   Member Information   \`\`\` `, `> **Nickname** ﹕\`${member.nickname ? member.nickname : "None"}\`\n> **Hex Color** ﹕\`${member.displayHexColor.toUpperCase()}\`\n> **Nitro Booster** ﹕\`${member.premiumSince === null ? 'False' : `True`}\`\n> **Joined At** ﹕\`${joined}\``, true)
    .addField(`\`\`\`   Roles   \`\`\``, `> ${roles}`, true)
    .setColor(member.displayHexColor.toUpperCase())
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))

		message.reply({ embeds: [embed] });
	},
};