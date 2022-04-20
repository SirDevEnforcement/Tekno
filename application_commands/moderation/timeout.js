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

		if(!interaction.member.permissions.has('MODERATE_MEMBERS')) {
			 const embed = new client.Discord.MessageEmbed()
			 .setColor('#2f3136')
			 .setDescription('<:Tekno_StickerSad:951526699626012702> Only members with the **MODERATE_MEMBERS** permission can run this command!')

			 interaction.reply({embeds: [embed]})
		 }
		
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

		const embed = new client.Discord.MessageEmbed()
		.setColor('#2f3136')
		.setTitle(`<:Tekno_Timeout:951555055767650375> ${user.username} has been timed-out`)
		.addField('Moderator', `\`\`\`${interaction.user.tag}\`\`\``)
		.addField('Time', `\`\`\`${time}\`\`\``)

		interaction.reply({embeds: [embed]})
		client.modlogs({
			 Member: interaction.user,
			 Action: 'TIMEOUT (Slash Command)',
		 }, interaction)
	}
};