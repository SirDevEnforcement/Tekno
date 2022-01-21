module.exports = {
	name: 'timeout',
	aliases: [],
	run: async (client, message, args) => {
		const fetch = require('node-fetch');
		const ms = require('ms');
		const time = args.slice(1).join(' ');

		if(!time) return message.channel.send('Please specify the time! E.g. `1m, 1h, 1d`');

		const user = message.mentions.users.first() || args[0];
		const milliseconds = ms(time);

		if(!user) return message.channel.send('No user specified!');
		if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
			return message.channel.send('Invalid time or it isn\'t 10s-28d');
		}

		const iosTime = new Date(Date.now() + milliseconds).toISOString();

		await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: iosTime }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});
		message.channel.send(`${user.username} has been timed out for \`${time}\`!`);
	},
};