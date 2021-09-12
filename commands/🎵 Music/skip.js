const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "skip",
    category: "🎵 Music",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        let queue = await client.distube.getQueue(message)

        if(queue){
            client.distube.skip(message)
        message.channel.send(`Skipped!`)
        } else if (!queue){
            message.channel.send(`Nothing in queue`)
            
        }

    }
}