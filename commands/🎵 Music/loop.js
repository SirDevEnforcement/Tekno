const Discord = require('discord.js')
module.exports = {
    name: "loop",
    category: "🎵 Music",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        client.distube.setRepeatMode(message, parseInt(args[0]));
        message.channel.send(`Set autoplay mode to \`${mode ? "On" : "Off"} + \``)

    }
}