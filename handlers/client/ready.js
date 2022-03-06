const chalk = require('chalk');
const moment = require('moment');
const tz = require('moment-timezone');
const Database = require("@replit/database")
const db = new Database();
module.exports = async (client) => {


    client.on('ready', async () => {

			client.db.set('servers', client.guilds.cache.size)
			client.db.set('users', client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b))
			client.db.set('total_slash', client.slashcommands.size)


        const status = [
            `/help ・ ${client.guilds.cache.size} servers!`,
            `/help ・ ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)} users!`,
            `/help ・ ${client.channels.cache.size} channels!`,
					  `/help ・ DevEnforcement is watching you 👀`,
					  `/help ・ Cats are better than dogs`,
					  `/help ・ Flying cars in 2020? Nah, eating bats!`,
					  `/help ・ Why are you here?`
        ]
        const multi = Math.floor(Math.random() * status.length);
        const activity = status[multi]
        client.user.setActivity(activity, {
            type: 'LISTENING'
        })

        console.log(`                Connected to ${chalk.green(client.user.username + '#' + client.user.discriminator)}`)
        console.log(`Watching ${chalk.red(`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)} users and ${chalk.red(client.guilds.cache.size)} servers!`)
        console.log(chalk.green(`\n                  [ ﹕Statistics ﹕]\n`))
        console.log(`Slash Commands: ${chalk.red(client.slashcommands.size)} ﹕﹕Categories: ${chalk.red(client.categories.length)}\n`)
    })

    const axios = require('axios')
    axios({
        method: 'post',
        url: 'https://radarbotdirectory.xyz/api/bot/913472906913267793/stats',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': "vCZq5UzphpC5JhwyQ3PBGQhkIQmZjSAaPpeQjBx2D6clYK5SuI",
        },
        data: {
            guilds: client.guilds.cache.size,
        },
    })
    
    
    
    }