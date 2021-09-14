const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    name: 'github',
    category: '🔎 Search',
    run: async(client, message, args) => {

        const name = args.join(' ')
        if(!name) return message.channel.send('Please provide a user to search.')
        const url = `https://api.github.com/users/${name}`

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('An Error Occured, Try Again Later.')
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${response.login}`)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'No Bio') 
        .addField('Public Repositories', response.public_repos.toLocaleString())
        .addField('Followers', response.followers.toLocaleString())
        .addField('Following', response.following.toLocaleString()) 
        .addField('Email', response.email ? response.email : 'No Email') 
        .addField('Location', response.location ? response.location : 'No Location')
        message.channel.send(embed)
    }
}