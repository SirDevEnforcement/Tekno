const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "play",
    category: "🎵 Music",

    run: async(client, message, args) => {
      if(!args[0]) return message.channel.send('Name a song for me to play!')
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        const music = args.join(" ");
        client.distube.play(message, music)

    }
}