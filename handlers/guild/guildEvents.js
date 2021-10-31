const Discord = require('discord.js');
const db = require('quick.db');
module.exports = async (client) => {
    client.on('guildCreate', async guild => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${guild.name} added me!`)
            .setDescription(`Owner: \`${guild.ownerId}\`\nID: \`${guild.id}\`\nMembers: ${guild.memberCount}`)
            .setThumbnail(guild.iconURL())

        client.channels.cache.get('894164132704714765').send({
            embeds: [embed]
        })
        const channel2 = client.channels.cache.get('863650833531011092')
        channel2.setName(`📚 Servers: ${client.guilds.cache.size}`)

    })

    client.on('guildDelete', async guild => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${guild.name} removed me!`)
            .setDescription(`Owner: \`${guild.ownerId}\`\nID: \`${guild.id}\`\nMembers: ${guild.memberCount}`)
            .setThumbnail(guild.iconURL())

        client.channels.cache.get('894164132704714765').send({
            embeds: [embed]
        })
        const channel2 = client.channels.cache.get('863650833531011092')
        channel2.setName(`📚 Servers: ${client.guilds.cache.size}`)

    })
}