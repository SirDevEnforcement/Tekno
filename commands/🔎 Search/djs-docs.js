const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'djs-docs',
    category: '🔎 Search',
    run: async(client, message, args) => {
    
        const query = args.slice().join(' ')
        if(!query) return message.reply('Please Provide A Query To Search For.')
        const url = 'https://djsdocs.sorta.moe/v2/embed?src=stable&q=' + query

        let response
        try {
            response = await fetch(url).then(res => res.json())
        }
        catch (e) {
            return message.reply('An Error Occured, Try Again Later.')    
        }

        const pkg = response
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(pkg.author.icon_url)
        .setAuthor(pkg.author.name, pkg.author.icon_url)
        .setDescription(pkg.description)
        .setTimestamp()
        if(pkg.fields) {embed.addFields(pkg.fields)}
        if(pkg.title) {embed.setTitle(pkg.title)}
        message.channel.send(embed)
    }
}