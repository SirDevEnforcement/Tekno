const { announceMessageCollector } = require('../../functions');

module.exports = {
	name: 'announce',
	description: 'Sends an announcement to the channel',
	run: async (client, message, args) => {
		if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply({ content: 'Sorry you don\'t have manage channels permission to use this command.', allowedMentions: { repliedUser: true } });
		if (!args[0]) return message.reply({ content: `The right syntax is \`t!announce <channel>\`.`, allowedMentions: { repliedUser: true } });

		try {
			await announceMessageCollector(client, message);
		}
		catch (e) {
			console.log(e);
			message.reply({content: `Error: ${e.message}`});
		}
	},
};