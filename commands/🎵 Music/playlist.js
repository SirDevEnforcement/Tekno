const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "playlist",
    category: "🎵 Music",

    async run (client, message, args) {
      if(!args[0]) return message.channel.send('Name a song for me to play!')
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)

        let songs = args[0]
    client.distube.playCustomPlaylist(message, songs, { name: `${message.author.username}'s Playlist` });

    }
}