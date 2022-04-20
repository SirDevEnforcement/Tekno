const akinator = require('discord.js-akinator')

module.exports = {
  name: "akinator",
  description: "Guess a character!",
	options: [
		{
			name: 'child-mode',
			type: 'STRING',
			required: true,
			description: 'Child friendly or not? (The game, not character)',
			choices: [
				{
					name: 'true',
					value: "true",
				},
				{
					name: 'false',
					value: "false",
				}
			]
		}
	],
  run: async (client, interaction, args) => {
let childMode;
		if(interaction.options.getString('child-mode') === 'true') childMode = true
		if(interaction.options.getString('child-mode') === 'false') childMode = false

    akinator(interaction, {
            language: "en",
            childMode: childMode,
            gameType: "character",
            useButtons: true,
            embedColor: "#2f3136" 
        });

		client.modlogs({
			 Member: interaction.user,
			 Action: 'AKINATOR (Slash Command)',
		 }, interaction)

  }
};