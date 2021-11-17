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
        client.users.get(member.id).send({embeds: [embed]})
        res.sendStatus(200);

    })


    app.get('/', function(req, res) {
        res.send(`Servers: ${client.guilds.cache.size}`)
    })
}