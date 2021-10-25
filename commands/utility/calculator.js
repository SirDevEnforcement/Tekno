const Discord = require('discord.js');
const simplydjs = require('simply-djs');
module.exports = {
  name: "calculator",
  description: "Calculate something!",
  run: async(client, message, args) => {
simplydjs.calculator(message, {
    embedColor: 'RANDOM',
    embedFoot: 'Tekno'
})
  }
  }
