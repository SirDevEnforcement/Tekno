const { ButtonInteraction } = require('discord.js');
const DB = require('../Schemas/SuggestDB');

module.exports = async(client) => {
	client.on('interactionCreate', async interaction => {
		if(!interaction.isButton()) return;

		if(!interaction.user.id === '815878862075985971') return interaction.reply({content: 'Only the Developer can accept/decline suggestions!', ephemeral: true})

		const { guildId, customId, message } = interaction;

		DB.findOne({guildID: guildId, MessageID: message.id}, async(err, data) => {
			if(err) throw err
			if(!data) await DB.create({guildID: guildId, MessageID: message.id})

			const embed = message.embeds[0]
			if(!embed) return;

			switch(customId) {
				case "suggest-accept": {
					embed.fields[2] = {name: 'Status', value: '<:Tekno_ChecklistYes:951549213991399424> Accepted'}
					message.edit({embeds: [embed.setColor('GREEN')], components: []})
					
					interaction.reply({content: 'Suggestion Accepted', ephemeral: true})
					
				} break;
				case "suggest-decline": {
										embed.fields[2] = {name: 'Status', value: '<:Tekno_ChecklistNo:951549213941047346> Declined'}
					message.edit({embeds: [embed.setColor('RED')], components: []})
					interaction.reply({content: 'Suggestion Declined', ephemeral: true})
					
				}
			}
		})
	})
}