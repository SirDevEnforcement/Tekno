const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "leave-channel",
    category: "🎵 Music",

    run: async (client, message, args) => {
      if(!args[0]) return message.channel.send('Name a song for me to play!')
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)

        message.member.voice.channel.leave()

    }
}