const { getMember } = require('../../functions.js');
const Discord = require('discord.js');

module.exports = {
	name: 'ban',
    description: "Ban someone!", 
	run: async (client, message, args) => {

		const member = await getMember(message, args[0]);

    
    		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('Sorry you don\'t have ban permission to use this command.');
		if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply('I don\'t have ban permission. Please enable it for me to be able to ban members');
		if (!args[0]) return message.reply(`The right syntax is \`t!ban <mention | id | username> [reason]\`.`);


		if (!member) return message.reply({content: `The right syntax is \`t!ban <mention | id | username> [reason]\`.`});
		if (!member.bannable) return message.reply({content: 'Seems like I can\'t ban this user. Please make sure my role is higher than any members'});
		if (member.user.id === '815878862075985971') return message.reply({content: 'Seems like I can\'t ban my owner!'});
		if (member.user.id === client.user.id) return message.reply({content: 'Seems like I can\'t ban myself'});
		if (member.user.id === message.author.id) return message.reply({content: 'Seems like you can\'t ban yourself'});
		if (member.roles.highest.position > message.member.roles.highest.position && message.guild.owner.user.id !== message.author.id) return message.reply({content: 'Please make sure your role is higher than the person you want to ban.'});


		const reason = args.slice(1).join(' ');

		let res;
		if (!reason) {
			res = 'no reason specified';
		}
		else {
			res = reason;
		}

		member.send({content: `You have been banned in **${message.guild.name}** for **${res}**`}).catch((err) => (console.log(err)));
		await member.ban({ reason: reason }).catch(e => console.log(`[WARN] ${e.message} in ${e.filename} [${e.lineNumber}, ${e.columnNumber}]`));
			const embed = new Discord.MessageEmbed()
				.setAuthor('Member Banned', '')
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setColor('RANDOM')
				.addField(`Member`, `\`\`\`${member.user.tag}\`\`\``)
        .addField('Banned by', `${message.author}`)
        .addField('Reason', `\`\`\`${res}\`\`\``)
				.setTimestamp()
				.setFooter(`ID: ${member.user.id}`, member.user.displayAvatarURL({ dynamic: true }));

			  message.channel.send({ embeds: [embed] });
		
	},
};