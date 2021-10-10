const xpfile = require('./xp.json')
const mySecret = process.env['token'];
const Discord = require("discord.js");
const { Intents } = require('discord.js')
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, "GUILD_MESSAGES"]
  });
const { Collection } = require('discord.js');
client.commands = new Collection();
client.aliases = new Collection();
client.prefix = process.env['prefix']
client.snipes = new Map();
client.categories = fs.readdirSync('./commands/');

['command'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
const regex2 = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)

client.on('ready', async () => {
  const status = [
    `t!help ・ ${client.guilds.cache.size} servers!`,
    `t!help ・ ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)} users!`,
    `t!help ・ ${client.channels.cache.size} channels!`
  ]
  const multi = Math.floor(Math.random() * status.length);
  const activity = status[multi]
  client.user.setActivity(activity, { type: 'LISTENING'})
  client.user.setStatus("online")

  const channel = client.channels.cache.get('894255857674649691')
  channel.setName(`👤 Total Users: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)

  const channel2 = client.channels.cache.get('894255835432247336')
  channel2.setName(`📚 Total Servers: ${client.guilds.cache.size}`)
  console.log('Sup')
})

client.on('guildCreate', guild => {
  const channel2 = client.channels.cache.get('863650833531011092')
  channel2.setName(`📚 Servers: ${client.guilds.cache.size}`)
})

client.on('presenceUpdate', async (oldPresence, newPresence) => {
  const role = newPresence.guild.roles.cache.get("882211177323724850");
  const member = newPresence.member
  const activities = member.user.presence.activities[0];

  if (activities.state.includes("dsc.gg/tekno" || "tekno-the-bot.repl.co" || "https://tekno-the-bot.repl.co" || "https://dsc.gg/tekno")) {
    return newPresence.member.roles.add(role)
  } else {
    if (member.roles.cache.get(role.id)) {
      newPresence.member.roles.remove(role)
    }
  }
})


client.on('guildDelete', guild => {

  const channel2 = client.channels.cache.get('863650833531011092')
  channel2.setName(`📚 Servers: ${client.guilds.cache.size}`)
})

client.on('messageCreate', async message => {
  const db = new JSONdb(`./Servers/${message.guild.id}.sqlite`)

      const prefix = db.get('prefix') === undefined ? "t!" : db.get('prefix')

      if(message.content.toLowerCase().includes('<@!888732127586316289>')) {
            const embed = new Discord.MessageEmbed()
      .setAuthor(`Help Menu`, client.user.displayAvatarURL())
      .setDescription(`Hello! I'm **Tekno**, a feature-rich multi-purpose bot! To use **all** my commands, run the command \`${prefix}help\`!`)
      .setFooter(`dsc.gg/tekno`)
    message.channel.send(embed)

      }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);


  // Message Handling
  const Timeout = new Set();
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  if (!message.member) {
    message.member = await message.guild.fetchMember(message);
  }

  if (!message.guild) return;

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))

  if (command) {
    command.run(client, message, args)
  } else {
    message.channel.send('<:cross:881238098871201802> | Command not found!')
  }
})

client.on("messageDelete", (message) => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
})


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
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
  client.channels.cache.get('894164132553699389').send(embed)
  res.sendStatus(200);

})


app.get('/', function(req, res) {
  res.send(`Servers: no u`)
})

client.on('ready', () => {
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
})


client.on("messageCreate", function(message) {
  if (message.author.client) return;
  var addXP = Math.floor(Math.random() * 10);
  if (!xpfile[message.author.id]) {
    xpfile[message.author.id] = {
      xp: 0,
      level: 1,
      reqxp: 100
    }

    fs.writeFile("./xp.json", JSON.stringify(xpfile), function(err) {
      if (err) console.log(err)
    })
  }

  xpfile[message.author.id].xp += addXP

  if (xpfile[message.author.id].xp > xpfile[message.author.id].reqxp) {
    xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp
    xpfile[message.author.id].reqxp *= 2
    xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp)
    xpfile[message.author.id].level += 1
    message.channelsend(message.author.tag + "You are now level **" + xpfile[message.author.id].level + "**!").then(
      msg => msg.delete({ timeout: "10000" })
    )

  }
  fs.writeFile("./xp.json", JSON.stringify(xpfile), function(err) {
    if (err) console / log(err)
  })

})

// DB Stuff

var JSONdb = require('simple-json-db');
client.on('guildCreate', async guild => {
  fs.writeFile(`./Servers/${guild.id}.sqlite`, "", (err) => { })
  setTimeout(() => {
    const push = new JSONdb(`./Servers/${guild.id}.sqlite`)

    push.set(`prefix`, 't!')
  }, 1000)
})

client.on('guildDelete', async guild => {
    fs.unlinkSync(`./Servers/${guild.id}.sqlite`)
})

const { AutoPoster } = require('topgg-autoposter')

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
  client.channels.cache.get('894164132553699389').send(embed)
}))

app.listen(3000)
client.login(mySecret)