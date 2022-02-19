module.exports = {
	name: 'guessthepokemon',
	description: 'Are you a pokemon nerd? Lets see!',
	run: async(client, interaction, args) => {

const { GuessThePokemon } = require('discord-gamecord')

new GuessThePokemon({
  message: interaction,
  slash_command: true,
  embed: {
    title: 'Who\'s This Pokemon?',
    footer: 'You have only 1 chance',
    color: '#2f3136',
  },
  time: 60000,
  thinkMessage: '**Thinking...**',
  winMessage: 'Nice! The pokemon was **{pokemon}**',
  stopMessage: 'Better luck next time! It was a **{pokemon}**',
  incorrectMessage: 'Nope! The pokemon was **{pokemon}**',
}).startGame();
	}
}
