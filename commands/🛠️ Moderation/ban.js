const { getMember } = require('../../functions.js');
const Discord = require('discord.js');

module.exports = {
	name: 'ban',
  timout: 60000,
  category: '🛠️ Moderation',
	run: async (client, message, args) => {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('Sorry you don\'t have ban permission to use this command.');
		if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply('I don\'t have ban permission. Please enable it for me to be able to ban members');
		if (!args[0]) return message.reply(`The right syntax is \`t!ban <mention | id | username> [reason]\`.`);

		const member = await getMember(message, args[0]);

		if (!member) return message.reply(`The right syntax is \`t!ban <mention | id | username> [reason]\`.`);
		if (!member.bannable) return message.reply('Seems like I can\'t ban this user. Please make sure my role is higher than any members');
		if (member.user.id === '585835814743834661') return message.reply('Seems like I can\'t ban my owner!');
		if (member.user.id === client.user.id) return message.reply('Seems like I can\'t ban myself');
		if (member.user.id === message.author.id) return message.reply('Seems like you can\'t ban yourself');
		if (member.roles.highest.position > message.member.roles.highest.position && message.guild.owner.user.id !== message.author.id) return message.reply('Please make sure your role is higher than the person you want to ban.');


		const reason = args.slice(1).join(' ');

		let res;
		if (!reason) {
			res = 'no reason given';
		}
		else {
			res = reason;
		}

		member.send(`You have been banned in **${message.guild.name}** for **${res}**`).catch((err) => (console.log(err)));
		await member.ban({ reason: reason, days: 7 }).catch(e => console.log(`[WARN] ${e.message} in ${e.filename} [${e.lineNumber}, ${e.columnNumber}]`));
		message.reply(`Successfully banned **${member.user.username}** for a reason **${res}**, by **${message.author.username}**.`);
			const embed = new Discord.MessageEmbed()
				.setAuthor('Member Banned', member.user.displayAvatarURL({ dynamic: true }))
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setColor('RANDOM')
				.setDescription(`Member: ${member.user.tag}`)
				.addFields(
					{ name: '**Banned by**', value: message.author },
					{ name: '**Reason**', value: res },
				)
				.setTimestamp()
				.setFooter(`ID: ${member.user.id}`);

			message.channel.send(embed)
		
	},
};