const Discord = require('discord.js');

module.exports = {
        name: 'emojify',
        description: 'Emojifies your text message',
	options: [{
		name: 'text',
		description: 'Specify text',
		required: true,
		type: 'STRING',
	}],
    run: async (client, interaction, args) => {

		const specialChars = {
			'0': ':zero:',
			'1': ':one:',
			'2': ':two:',
			'3': ':three:',
			'4': ':four:',
			'5': ':five:',
			'6': ':six:',
			'7': ':seven:',
			'8': ':eight:',
			'9': ':nine:',
			'#': ':hash:',
			'*': ':asterisk:',
			'?': ':grey_question:',
			'!': ':grey_exclamation:',
			' ': '   ',
		};

		const emojified = `${interaction.options.getString('text')}`.toLowerCase().split('').map(letter => {
			if (/[a-z]/g.test(letter)) {
				return `:regional_indicator_${letter}: `;
			}
			else if (specialChars[letter]) {
				return `${specialChars[letter]} `;
			}
			return letter;
		}).join('');

		if(emojified.length > 2000) {
			return interaction.reply(`:x: The emojified message exceeds 2000 characters.`);
		}

		interaction.reply(emojified);

			client.modlogs({
			 Member: interaction.user,
			 Action: 'EMOJIFY (Slash Command)',
		 }, interaction)

    }
};