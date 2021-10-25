const Discord = require('discord.js');
const simplydjs = require('simply-djs')

module.exports = {
    name: "rps",
    description: "Play Rock Paper Scissors!",
    aliases: ['rps'],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
      simplydjs.rps(message, {
            embedColor: "RANDOM", // default: #075FFF
            timeoutEmbedColor: "#c90000", // default: #c90000
            drawEmbedColor: "#075FFF", // default: #075FFF
            winEmbedColor: "#06bd00", // default: #06bd00
            embedFooter: "A game of RPS",
            rockColor: "SECONDARY",
            paperColor: "SECONDARY",
            scissorsColor: "SECONDARY",
        })
    }
}
