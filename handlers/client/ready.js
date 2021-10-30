const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Route } = require('discord-api-types/v9')
const chalk = require('chalk')
module.exports = async (client) => {
    client.on('ready', async () => {
        const status = [
            `t!help ・ ${client.guilds.cache.size} servers!`,
            `t!help ・ ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)} users!`,
            `t!help ・ ${client.channels.cache.size} channels!`,
        ]
        const multi = Math.floor(Math.random() * status.length);
        const activity = status[multi]
        client.user.setActivity(activity, {
            type: 'LISTENING'
        })

        const channel = client.channels.cache.get('894255857674649691')
        channel.setName(`👤 Total Users: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)

        const channel2 = client.channels.cache.get('894255835432247336')
        channel2.setName(`📚 Total Servers: ${client.guilds.cache.size}`)

        console.log(`                Connected to ${chalk.green(client.user.username + '#' + client.user.discriminator)}`)
        console.log(`Watching ${chalk.magenta(`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)} users and ${chalk.magenta(client.guilds.cache.size)} servers!`)
        console.log(chalk.green(`\n                  [ ﹕Statistics ﹕]\n`))
        console.log(`Prefix: ${chalk.magenta(`t!`)} || Commands: ${chalk.magenta(client.commands.size)} || Categories: ${chalk.magenta(client.categories.length)}\n`)
    })

    const axios = require('axios')
    axios({
        method: 'post',
        url: 'https://radarbotdirectory.xyz/api/bot/888732127586316289/stats',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': "vCZq5UzphpC5JhwyQ3PBGQhkIQmZjSAaPpeQjBx2D6clYK5SuI",
        },
        data: {
            guilds: client.guilds.cache.size,
        },
    })

const API = require('leoapi.xyz');
const leo = new API();


    client.on('ready', () => {
    setInterval(() => {
        leo.fun('meme', {}).then(data => {
            const embed = new client.Discord.MessageEmbed()
            .setTitle(data.title)
            .setURL(data.subreddit)
            .setImage(data.image)
            .setFooter(`👍 ${data.upvotes} | 💬 ${data.comments}`)
            .setColor('RANDOM')
            client.channels.cache.get('898854590068424715').send({embeds: [embed]})
        })
    }, 36000)
})
    
    
    
    }