const Discord = require('discord.js')
module.exports = async (client) => {
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(bodyParser.json())
    app.listen(80)
    app.post('/vote', async function(req, res) {
        const body = req.body;
        console.log(body)
        if (body.type !== "vote") return;
        const member = await client.users.fetch(body.user)
        const embed = new Discord.MessageEmbed()
            .setTitle('Thanks for Voting!')
            .setDescription(`\`${member.username}\` just voted on Radar Bot Directory!`)
            .addField('How to vote?', `Head on over to [Radar Bot Directory](https://radarbotdirectory.xyz/bot/888732127586316289/vote) to vote for Tekno!`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png`)
        client.channels.cache.get('894164132553699389').send({
            embeds: [embed]
        })
        res.sendStatus(200);

    })


    app.get('/', function(req, res) {
        res.send(`Servers: ${client.guilds.cache.size}`)
    })

    const {
        AutoPoster
    } = require('topgg-autoposter')


    AutoPoster(process.env['top.gg'], client)
        .on('posted', () => {

            console.log('Posted stats to Top.gg!')
        })
    const Topgg = require('@top-gg/sdk')


    const webhook = new Topgg.Webhook(process.env['top.gg'])

    app.post('/dblwebhook', webhook.listener(vote => {

        const embed = new Discord.MessageEmbed()
            .setTitle('Thanks for Voting!')
            .setDescription(`<@${vote.user}> just voted on Top.gg!`)
            .addField('How to vote?', `Head on over to [top.gg](https://top.gg/bot/888732127586316289/vote) to vote for Tekno!`)
        client.channels.cache.get('894164132553699389').send({
            embeds: [embed]
        })
    }))
}