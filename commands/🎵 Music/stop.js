const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
    name: "stop",
    category: "🎵 Music",

    async run (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`Please join a VC!`)
        let queue = await client.distube.getQueue(message)

        if(queue){
            client.distube.stop(message)
        message.channel.send(`Stopped music!`)
        message.member.voice.channel.leave();
        } else if (!queue){
            message.channel.send(`Nothing in queue`)
            
        }

    }
}
