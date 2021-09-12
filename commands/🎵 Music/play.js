const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "play",
    category: "🎵 Music",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        const music = args.join(" ");
        client.distube.play(message, music)

    }
}