module.exports = {
	name: 'rps',
	description: 'Rock paper scissors!',
	options: [{
		name: 'opponent',
		description: 'Play against someone',
		type: 'MENTION',
		required: true
	}],
	run: async(client, interaction, args) => {
		const { RockPaperScissors } = require('discord-gamecord')
		if(!args[0]) return interaction.channel.send('Mention an opponent!')

new RockPaperScissors({
  message: interaction,
  slash_command: true,
  opponent: interaction.options.getMention('opponent'),
  embed: {
    title: 'Rock Paper Scissors',
    description: 'Press a button below to make a choice!',
    color: '#5865F2',
  },
  buttons: {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors',
  },
  emojis: {
    rock: '🌑',
    paper: '📃',
    scissors: '✂️',
  },
  othersMessage: 'You are not allowed to use buttons for this message!',
  chooseMessage: 'You choose {emoji}!',
  noChangeMessage: 'You cannot change your selection!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
  cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{winner} won the game!',
  gameEndMessage: 'The game went unfinished :(',
}).startGame();
	}
}