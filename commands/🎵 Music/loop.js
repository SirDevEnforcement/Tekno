const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "loop",
    category: "🎵 Music",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        distube.setRepeatMode(message, parseInt(args[0]));

    }
}