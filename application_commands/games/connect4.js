const { Connect4 } = require('discord-gamecord')
module.exports = {
	name: 'connect4',
	description: 'Play connect 4 in discord!',
	options: [{
		name: 'opponent',
		description: 'Mention an opponent',
		type: 'USER',
		required: true
	}],
	run: async(client, interaction, args) => {
		

new Connect4({
  message: interaction,
  slash_command: true,
  opponent: interaction.options.getUser('opponent'),
  embed: {
    title: 'Connect 4',
    color: '#2f3136',
  },
  emojis: {
    player1: '🔵',
    player2: '🟡'
  },
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its turn of player **{player}**.',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
  drawMessage: 'It was a draw!',
  othersMessage: 'You are not allowed to use buttons for this message!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
  cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
}).startGame()

		client.modlogs({
			 Member: interaction.user,
			 Action: 'CONNECT4 (Slash Command)',
		 }, interaction)
	}
}