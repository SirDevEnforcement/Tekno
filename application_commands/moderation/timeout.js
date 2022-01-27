module.exports = {
	name: 'timeout',
	description: 'Timeout someone!',
	options: [
		{
			name: 'target',
			description: 'Who you wanna timeout?',
			type: 'USER',
			required: true
		},
		{
			name: 'time',
			description: 'How much time?',
			type: 'STRING',
			required: true
		}
	],
	run: async (client, interaction, args) => {
		const fetch = require('node-fetch');
		const ms = require('ms');
		const time = interaction.options.getString('time')

		if(!time) return interaction.reply('Please specify the time! E.g. `1m, 1h, 1d`');

		const user = interaction.options.getUser('target')
		const milliseconds = ms(time);

		if(!user) return interaction.reply('No user specified!');
		if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
			return interaction.reply('Invalid time or it isn\'t 10s-28d');
		}

		const iosTime = new Date(Date.now() + milliseconds).toISOString();

		await fetch(`https://discord.com/api/guilds/${interaction.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: iosTime }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});
		interaction.reply(`${user.username} has been timed out for \`${time}\`!`);
	},
};