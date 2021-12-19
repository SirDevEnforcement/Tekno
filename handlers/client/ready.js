const chalk = require('chalk');
const moment = require('moment');
const tz = require('moment-timezone');
const Database = require("@replit/database")
const db = new Database();
module.exports = async (client) => {

      let days = 0;
      let week = 0;
      let uptime = ``
      let totalSeconds = (client.uptime / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);

      if (hours > 23) {
        days = days + 1;
        hours = 0;
      }

      if (days == 7) {
        days = 0;
        week = week + 1;
      }

      if (week > 0) {
        uptime += `${week} week, `;
      }

      if (minutes > 60) {
        minutes = 0;
      }

      uptime += `${days}d, ${hours}h, ${minutes}m, ${seconds}s`


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
        console.log(`Watching ${chalk.red(`${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)} users and ${chalk.red(client.guilds.cache.size)} servers!`)
        console.log(chalk.green(`\n                  [ ﹕Statistics ﹕]\n`))
        console.log(`Commands: ${chalk.red(client.commands.size)} ﹕﹕Slash Commands: ${chalk.red(client.slashcommands.size)} ﹕﹕Categories: ${chalk.red(client.categories.length)}\n`)

        const timeNow = moment().tz("GMT+0").format("HH:mm (z)");

     const clockChannel = client.channels.cache.get("910604633309847593");
  clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Clock update')
    .catch(console.error);
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

	setTimeout(() => {

		const timeNow = moment().tz("GMT+0").format("HH:mm (z)");

     const clockChannel = client.channels.cache.get("910604633309847593");
  clockChannel.edit({ name: `🕒 ${timeNow}` }, 'Clock update')
    .catch(console.error);
		const chnl = client.channels.cache.get('913105625276350504')

      chnl.edit({ name: `📈 Uptime: ${uptime}` }, 'Uptime')
	}, 30000)
    
    
    
    }