const chalk = require('chalk');
const moment = require('moment');
const tz = require('moment-timezone');
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
        console.log(`Prefix: ${chalk.magenta(`t!`)} ﹕﹕Commands: ${chalk.magenta(client.commands.size)} ﹕﹕Categories: ${chalk.magenta(client.categories.length)}\n`)

        const timeNow = moment().tz("GMT+0").format("HH:mm (z)");

     const clockChannel = client.channels.cache.get("910604633309847593");
  clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Clock update')
    .catch(console.error);
  setInterval(() => {
    const timeNowUpdate = moment().tz("GMT+0").format("HH:mm (z)");
    clockChannel.edit({ name: `🕒 ${timeNowUpdate}` }, 'Clock update')
      .catch(console.error);
  }, 60000);
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
    
    
    
    }