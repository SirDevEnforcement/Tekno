const { EightBall } = require('discord-gamecord')

module.exports = {
  name: "8ball",
  description: "I may or may not insult you",
	options: [
		{
			name: 'question',
			description: 'Submit a question',
			type: 'STRING',
			required: true
		}
	],
  run: async(client, interaction, args) => {

new EightBall({
    message: interaction,
    question: interaction.options.getString('question'),
    slash_command: true,
    embed: {
        title: '🎱 8Ball',
        color: '#2f3136'
    }
}).startGame();
	}}