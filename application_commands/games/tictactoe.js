const Discord = require('discord.js');
module.exports = {
  name: "ttt",
  description: "Play tictactoe!",
	options: [{
		name: 'opponent',
		description: 'Play against someone!',
		type: 'MENTION',
		required: true
	}],
  run: async(client, interaction, args) => {
		const { TicTacToe } = require('discord-gamecord')

new TicTacToe({
  message: interaction,
  slash_command: true,
  opponent: interaction.options.getMention('opponent'),
  embed: {
    title: 'Tic Tac Toe',
    overTitle: 'Game Over',
    color: '#5865F2',
  },
  oEmoji: '🔵',
  xEmoji: '❌',
  blankEmoji: '➖',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its now **{player}** turn!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
  cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
}).startGame();

  }
  }