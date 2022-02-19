const { Snake } = require('discord-gamecord')
module.exports = {
	name: 'snake',
	description: 'Play the classic "snake", but in Discord!',
	run: async(client, interaction, args) => {

		new Snake({
      message: interaction,
      slash_command: true,
      embed: {
        title: 'Snake Game',
        color: '#2f3136',
        OverTitle: 'Game Over',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();
		
	}
}