const Discord = require('discord.js');
module.exports = {
  name: "trivia",
  description: "Are you smart? Give it a try!",
  run: async(client, interaction, args) => {

		const { Trivia } = require('discord-gamecord')

new Trivia({
  message: interaction,
	slashcommand: true,
	embed: {
    title: 'Trivia',
    description: 'You have {time} seconds to respond!',
    color: '#5865F2',
  },
  difficulty: 'medium',
  winMessage: 'GG, Your answer was correct! It was **{answer}**',
  loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
  othersMessage: 'You are not allowed to use buttons for this message!',
}).startGame();

  }
  }