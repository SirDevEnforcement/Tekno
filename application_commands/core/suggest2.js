const { MessageEmbed, MessageActionRow, MessageButton, Discord } = require('discord.js')
const DB = require('../../Schemas/SuggestDB');

module.exports = {
	name: 'suggest2',
	description: 'null',
	options: [
		{
			name: 'suggestion',
			description: 'Whats your suggestion?',
			type: 'STRING',
			required: true
		},
		{
			name: 'type',
			description: 'Whats the type?',
			type: 'STRING',
			required: true,
			choices: [
				{
				name: 'Server Suggestion',
				value: 'Server',
			  },
				{
					name: 'Bot Suggestion',
					value: 'Bot'
				}
			]
		}
	],
	run: async(client, interaction) => {
		const { options, guildId, member, user } = interaction;

		const type = options.getString('type')
		const suggestion = options.getString('suggestion')

		const embed = new client.Discord.MessageEmbed()
		.setColor('#2f3136')
		.setAuthor(user.tag, user.displayAvatarURL({dynamic: false, format: 'png'}))
		.addField('Type', type)
		.addField('Suggestion', suggestion)
		.addField('Status', '<:Tekno_Clock:951526699697311755> Pending')
		.setTimestamp();

		const buttons = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setCustomId('suggest-accept')
			.setLabel('Accept')
			.setEmoji('✅')
			.setStyle('PRIMARY'),
			new MessageButton()
			.setCustomId('suggest-decline')
			.setLabel('Decline')
			.setEmoji('❎')
			.setStyle('DANGER')
			
		)

		try {
			const msg = client.channels.cache.get('894164132553699390').send({embeds: [embed], components: [buttons], fetchReply: true})

			await DB.create({GuildID: guildId, MessageID: msg.id, Details: [
				{
					MemberID: member.id,
					Type: type,
					Suggestion: suggestion
				}
			]})
			
		} catch(e) {
			console.log(e)
		}
		
	}
}