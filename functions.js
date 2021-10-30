const Discord = require('discord.js')
module.exports = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.cache.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.cache.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    },

    announceMessageCollector: async (client, message) => {
		const channel = message.mentions.channels.first();

		if (!message.guild.me.permissionsIn(channel.id).has('SEND_MESSAGES')) return message.reply({ content: 'I do not have a permission to send a message in that channel', allowedMentions: { repliedUser: true } });
		if (!channel || !message.guild.channels.cache.get(channel.id) || channel.type !== 'GUILD_TEXT') return message.reply({ content: 'Please mention a valid #channel.', allowedMentions: { repliedUser: true } });

		const embed = new Discord.MessageEmbed();

		embed.setColor('RANDOM');

		await message.reply('An example where the certain slot will be placed');

		const example = new Discord.MessageEmbed()
			.setAuthor('Author', 'https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png')
			.setThumbnail('https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png')
			.setColor('RANDOM')
			.setImage('https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png')
			.setTitle('Title')
			.setDescription('Description')
			.setFooter('Footer', 'https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png');

		await message.reply({ embeds: [example] });

		let authorText;
		let footerText;

		const filter = m => m.author.id === message.author.id;

		await setTimeout(function() {
			message.reply('Limit: 256 characters\nTime: 30 seconds\nPlease provide a text for `author` slot. `skip` if you want to skip.');
		}, 1000);

		const author = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 30000,
		});

		if (!author.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (author.first().content.toLowerCase() === 'skip') {
			message.reply('skipped');
		}
		else {
			authorText = author.first().content;

			if (authorText.length > 256) return message.reply('The character is exceeding 256 characters. Command stopped.');

			await message.reply('Please type what the `author icon` would be.\n`Server Icon`, `Tekno Avatar`, `User Avatar` or you can attach any `attachment` (picture)?\n\nType `Skip` to skip.');

			const authorIcon = await message.channel.awaitMessages({
				filter,
				max: 1,
				time: 30000,
			});

			if (!authorIcon.size) {
				return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
			}

			if (authorIcon.first().attachments.first()) {
				embed.setAuthor(authorText, authorIcon.first().attachments.first().url);
			}
			else if (authorIcon.first().content.toLowerCase() === 'server icon') {
				embed.setAuthor(authorText, message.guild.iconURL());
			}
			else if (authorIcon.first().content.toLowerCase() === 'tekno avatar') {
				embed.setAuthor(authorText, client.user.avatarURL());
			}
			else if (authorIcon.first().content.toLowerCase() === 'user avatar') {
				embed.setAuthor(authorText, message.author.displayAvatarURL({ dynamic: true }));
			}
			else if (authorIcon.first().content.toLowerCase() === 'skip') {
				embed.setAuthor(authorText);
			}
			else {
				return message.reply('Incorrect input. Stopped.');
			}
		}

		await message.reply('Limit: 256 characters\nTime: 30 seconds\nPlease provide a text for `title` slot. `skip` if you want to skip.');

		const title = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 30000,
		});

		if (!title.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (title.first().content.toLowerCase() === 'skip') {
			message.reply('skipped');
		}
		else {
			if (title.first().content.length > 256) return message.reply('The character is exceeding 256 characters. Command stopped.');

			await message.reply('any link you want to put? please send a link or type `skip` if you want to skip');

			const url = await message.channel.awaitMessages({
				filter,
				max: 1,
				time: 30000,
			});

			if (!url.size) {
				return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
			}

			if (url.first().content.toLowerCase() === 'skip') {
				embed.setTitle(title.first().content);

				message.reply('skipped');
			}
			else {
				embed.setTitle(title.first().content);
				try {
					embed.setURL(url.first().content);
				}
				catch {
					message.reply('invalid URL');
				}
			}
		}

		await message.reply('Limit: 2048 characters\nTime: 5 minutes\nPlease provide a text for `description` slot. `skip` if you want to skip.');

		const description = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 300000,
		});

		if (!description.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (description.first().content === 'skip') {
			message.reply('skipped');
		}
		else {
			if (description.first().content.length > 2048) return message.reply('The character is exceeding 2048 characters. Command stopped.');

			embed.setDescription(description.first().content);
		}

		await message.reply({ embeds: [embed] });
		await message.reply('Limit: 2048 characters\nTime: 30 seconds\nPlease provide a text for `footer` slot. `skip` if you want to skip.');

		const footer = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 30000,
		});

		if (!footer.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (footer.first().content.toLowerCase() === 'skip') {
			message.reply('skipped');
		}
		else {
			footerText = footer.first().content;

			if (footerText .length > 2048) return message.reply('The character is exceeding 2048 characters. Command stopped.');

			await message.reply('Please type what the `footer icon` would be.\n`Server Icon`, `Tekno Avatar`, `User Avatar` or you can attach any `attachment` (picture)?\n\nType `Skip` to skip.');

			const footerIcon = await message.channel.awaitMessages({
				filter,
				max: 1,
				time: 30000,
			});

			if (!footerIcon.size) {
				return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
			}

			if (footerIcon.first().attachments.first()) {
				embed.setFooter(footerText, footerIcon.first().attachments.first().url);
			}
			else if (footerIcon.first().content.toLowerCase() === 'server icon') {
				embed.setFooter(footerText, message.guild.iconURL());
			}
			else if (footerIcon.first().content.toLowerCase() === 'tekno avatar') {
				embed.setFooter(footerText, client.user.avatarURL());
			}
			else if (footerIcon.first().content.toLowerCase() === 'user avatar') {
				embed.setFooter(footerText, message.author.displayAvatarURL({ dynamic: true }));
			}
			else if (footerIcon.first().content.toLowerCase() === 'skip') {
				embed.setFooter(footerText);
			}
			else {
				return message.reply('Incorrect input. Stopped.');
			}
		}

		await message.reply({ embeds: [embed] });
		await message.reply('What image on the `thumbnail` would be?\n`Server Icon`, `Tekno Avatar`, `User Icon` or you can send any attachment (picture)\n `skip` if you want to skip.');

		const thumbnail = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 90000,
		});

		if (!thumbnail.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (thumbnail.first().attachments.first()) {
			embed.setThumbnail(thumbnail.first().attachments.first().url);
		}
		else if (thumbnail.first().content.toLowerCase() === 'server icon') {
			embed.setThumbnail(message.guild.iconURL());
		}
		else if (thumbnail.first().content.toLowerCase() === 'tekno avatar') {
			embed.setThumbnail(client.user.avatarURL());
		}
		else if (thumbnail.first().content.toLowerCase() === 'user avatar') {
			embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
		}
		else if (thumbnail.first().content.toLowerCase() === 'skip') {
			message.reply('skipped');
		}
		else {
			return message.reply('Incorrect input. Stopped.');
		}

		await message.reply({ embeds: [embed] });
		await message.reply('What image you want to put?\nAttach an attachment to set it or `skip` if you want to skip.');

		const image = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 90000,
		});

		if (!image.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (image.first().attachments.first()) {
			embed.setImage(image.first().attachments.first().url);
		}
		else if (image.first().content.toLowerCase() === 'skip') {
			message.reply('skipped');
		}
		else {
			return message.reply('Incorrect input. stopped.');
		}

		await message.reply({ embeds: [embed] });
		await message.reply('This is okay? (yes) (no)');

		const confirm = await message.channel.awaitMessages({
			filter,
			max: 1,
			time: 30000,
		});

		if (!confirm.size) {
			return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
		}

		if (confirm.first().content.toLowerCase() === 'yes') {
			message.reply('Alright');

			channel.send({ embeds: [embed] }).catch(() => message.reply('I can\'t send a message to that channel.'));
		}
		else if (confirm.first().content.toLowerCase() === 'no') {
			message.reply('Deleted.');
		}
		else {
			await message.reply('Last Attempt. This is okay? (yes) (no)');

			const confirm2 = await message.channel.awaitMessages({
				filter,
				max: 1,
				time: 30000,
			});

			if (!confirm2.size) {
				return message.reply({ content: 'Time is up.', allowedMentions: { repliedUser: true } });
			}

			if (confirm2.first().content.toLowerCase() === 'yes') {
				message.reply(`Alright. Sending it to ${channel}.`);

				channel.send({ embeds: [embed] }).catch(() => message.reply('I can\'t send a message to that channel.'));
			}
			else if (confirm2.first().content.toLowerCase() === 'no') {
				message.reply('Deleted.');
			}
			else {
				message.reply('Deleted.');
			}
		}
	},

    promptMessage: async function (message, author, time, validReactions) {

        time *= 1000;


        for (const reaction of validReactions) await message.react(reaction);

        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;


        return message
            .awaitReactions(filter, { max: 1, time: time})
            .then(collected => collected.first() && collected.first().emoji.name);
    }
};