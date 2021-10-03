const { getMember } = require('../../functions');
const Discord = require('discord.js');

module.exports = {
	name: 'kick',
  category: '🛠️ Moderation',
  run: async (client, message, args) => {
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('Sorry you don\'t have kick members permission to use this command.');
		if (!message.guild.me.permissions.has('KICK_MEMBERS')) return message.reply('I don\'t have kick members permission. Please enable it for me to be able to kick members');
		if (!args[0]) return message.reply(`The right syntax is \`t!kick <mention | id | username> [reason]\`.`);

		const member = await getMember(message, args[0]);

		if (!member) return message.reply(`The right syntax is \`t!kick <mention | id | username> [reason]\`.`);
		if (!member.kickable) return message.reply('Seems like I can\'t kick that user');
		if (member.user.id === '275989071774351360') return message.reply('Seems like I can\'t kick my owner!');
		if (member.user.id === message.author.id) return message.reply('Seems like you can\'t kick yourself');
		if (member.user.id === client.user.id) return message.reply('Seems like I can\'t kick myself');
		if (member.roles.highest.position > message.member.roles.highest.position && message.guild.owner.user.id !== message.author.id) return message.reply('Please make sure your role is higher than the person you want to kick.');

		if (!logsetting[message.guild.id]) {
			logsetting[message.guild.id] = {
				checker: 1,
			};
		}
		const values = logsetting[message.guild.id].checker;


		const reason = args.slice(1).join(' ');

		let res;
		if (!reason) {
			res = 'no reason given';
		}
		else {
			res = reason;
		}

		member.send(`Hi there, you have been kicked from **${message.guild.name}** for **${res}**`);
		await member.kick(reason).catch(e => console.log(`[WARN] ${e.message} in ${e.filename} [${e.lineNumber}, ${e.columnNumber}]`));
		message.reply(`Successfully kicked **${member.user.username}** for a reason **${res}**, by **${message.author.username}**.`);

		if (values === undefined) return;
		if (values === 0) return;
		if (values === 1) {


			const embed = new Discord.MessageEmbed()
				.setAuthor('<:hx_ba:862059080301805628> Member Kicked', member.user.displayAvatarURL({ dynamic: true }))
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setColor('RANDOM')
				.setDescription(`Member: ${member.user.tag}`)
				.addFields(
					{ name: '**Kicked By**', value: message.author },
					{ name: '**Reason**', value: res },
				)
				.setTimestamp()
				.setFooter(`ID: ${member.user.id}`);

			message.channel.send(embed)
		}
	},
};