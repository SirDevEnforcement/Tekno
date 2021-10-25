const Discord = require('discord.js');
const simplydjs = require('simply-djs')
module.exports = {
  name: "steal-emoji",
  description: "Steal an emoji!",
  run: async(client, message, args) => {
simplydjs.stealEmoji(message, args, {
    embedTitle: 'Emoji Stolen!', 
    embedColor: 'RANDOM',
    embedFoot: 'Tekno',
    failedMsg: 'Emoji not found!'
})
  }
  }