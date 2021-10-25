const Discord = require('discord.js');
const simplydjs = require('simply-djs');
module.exports = {
  name: "tictactoe",
  description: "Play tictactoe!",
  aliases: ['ttt'],
  run: async(client, message, args) => {

    simplydjs.tictactoe(client, message, {
    xEmoji: '❌',
    oEmoji: '⭕',
    idleEmoji: '➖',
    embedColor: 'RANDOM',
    embedFoot: 'Make sure to win'
})

  }
  }


