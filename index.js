const xpfile = require('./xp.json')
const mySecret = process.env['token'];
const Discord = require("discord.js");
const { Intents } = require('discord.js')
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, "GUILD_MESSAGES", 'GUILD_VOICE_STATES']
  });
module.exports = client;
const { Collection } = require('discord.js');
client.commands = new Collection();
client.aliases = new Collection();
client.prefix = process.env['prefix']
client.slashCommands = new Collection()
client.snipes = new Map();
client.embedColor = "RED";
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
    `t!help ・ ${client.channels.cache.size} channels!`,
    `t!help ・ DevEnforcement#9925 and Aidan The Sister#1714!`
  ]
  const multi = Math.floor(Math.random() * status.length);
  const activity = status[multi]
  client.user.setActivity(activity, { type: 'LISTENING'})

  const channel = client.channels.cache.get('894255857674649691')
  channel.setName(`👤 Total Users: ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)}`)

  const channel2 = client.channels.cache.get('894255835432247336')
  channel2.setName(`📚 Total Servers: ${client.guilds.cache.size}`)
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

      const prefix = `t!`

      if(message.content.toLowerCase().includes('<@!888732127586316289>')) {
            const embed = new Discord.MessageEmbed()
      .setAuthor(`Help Menu`, client.user.displayAvatarURL())
      .setDescription(`<:leo_member:892325715494711307> Hello! I'm **Tekno**, a feature-rich multi-purpose bot! To use **all** my commands, run the command \`${prefix}help\`!`)
      .setFooter(`dsc.gg/tekno`)
    message.channel.send({embeds: [embed]})

      }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

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
    console.log(`${command.name} was used!`)
  } else {
    message.channel.send({content: '<:cross:881238098871201802> | Command not found!'})
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
  client.channels.cache.get('894164132553699389').send({embeds: [embed]})
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
  client.channels.cache.get('894164132553699389').send({ embeds: [embed] })
}))

app.listen(3000)

// Ready

const chalk = require('chalk');
client.on("ready", async () => {
  console.log(chalk.green.bold("Success!"))
  console.log(chalk.gray("Connected To"), chalk.yellow(`${client.user.tag}`));
  console.log(
    chalk.white("Watching"),
    chalk.red(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
    chalk.white(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1 ? "Users," : "User,"}`),
    chalk.red(`${client.guilds.cache.size}`),
    chalk.white(`${client.guilds.cache.size > 1 ? "Servers." : "Server."}`)
  )
  console.log(
    chalk.white(`Prefix:` + chalk.red(` t! `)),
    chalk.white("||"),
    chalk.red(`${client.commands.size}`),
    chalk.white(`Commands`)
  );
  console.log("")
  console.log(chalk.red.bold("——————————[ Statistics ]——————————"))
  console.log(chalk.gray(`Running on Node ${process.version} on ${process.platform} ${process.arch}`))
  console.log(chalk.gray(`Memory: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`))
});

client.on('messageCreate', async message => {
  if(!message.guild) return;
  const db = require('quick.db')
  db.add(`globalMessages_${message.author.id}`, 1)

  db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)
  });

client.on('messageCreate', async message => {

    const simplydjs = require('simply-djs')

    simplydjs.chatbot(client, message, {
        chid: '898854590068424715',
        name: 'Tekno',
    })
})

// Levelling

client.on('messageCreate', async message => {
  const db = require('quick.db')
  xp(message)
  if(message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  var level = db.get(`level_${message.guild.id}_${message.author.id}`) || 0;
  var currentxp = db.get(`reqxp_${message.guild.id}_${message.author.id}`) || 0;
  var xpNeeded = level * 500 + 500;

  async function xp(message) {
    if(message.author.bot) return;
    const randomNumber = Math.floor(Math.random() * 10) + 15;
    db.add(`xp_${message.guild.id}_${message.author.id}`, randomNumber)
    db.add(`xptotal_${message.guild.id}_${message.author.id}`, randomNumber)
  var level = db.get(`level_${message.guild.id}_${message.author.id}`) || 1;
  var xp = db.get(`xp_${message.guild.id}_${message.author.id}`);
  var xpNeeded = level * 500;
  if(xpNeeded < xp) {
    var newLevel = db.add(`level_${message.guild.id}_${message.author.id}`, 1);
    db.subtract(`xp_${message.guild.id}_${message.author.id}`, xpNeeded)

    if(!message.guild.me.permissionsIn(message.channel.id).toArray().includes('SEND_MESSAGES')) return message.author.send({content: `${message.author.tag}, you are now level \`${newLevel}\``})
     
     let msg = await message.channel.send({content: `${message.author.tag}, you are now level \`${newLevel}\``});

     setTimeout(() => {
       msg.delete()
     }, 7000)
  }
  }
    
})

// Anti Steam Scam

client.on('messageCreate', async message => {
  const array = require(`./scam.json`)
  if(array.includes(message.content)) {
    message.delete()
    try {

client.guilds.cache.get(message.guild.id).members.cache.get(message.author.id).ban({ days: 7, reason: `Steam Scam Link\n(${message.content})` })
    } catch(e) {
      console.log(e)
    }
    message.channel.send({content: `${message.author} was banned due to being hacked (Steam Scam Link)`})
  }
})
client.login(mySecret)