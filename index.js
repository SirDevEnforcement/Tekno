const mySecret = process.env['token'];
const Discord = require("discord.js");
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] } });
const db = require('quick.db')
const { Collection } = require('discord.js');
client.commands = new Collection();
client.prefix = process.env['prefix']
client.snipes = new Map();
client.categories = fs.readdirSync('./commands/');

['command'].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
const regex2 = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)

client.on('ready', () => {
  const status = [
    `t!help ・ ${client.guilds.cache.size} servers!`,
    `t!help ・ ${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b)} users!`,
    `t!help ・ ${client.channels.cache.size} channels!`
  ]
  const multi = Math.floor(Math.random() * status.length);
  const activity = status[multi]
  client.user.setActivity(activity)

  const channel = client.channels.cache.get('873519146774695967')
  channel.setName(`Ping: ${client.ws.ping}ms`)

  const channel2 = client.channels.cache.get('863650833531011092')
  channel2.setName(`Servers: ${client.guilds.cache.size}`)
  console.log('Sup')
})
const Distube = require('distube')
client.distube = new Distube(client,
  {
    searchSongs: false,
    emitNewSongOnly: false
  })
const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.distube.on("initQueue", queue => {
  queue.autoplay = false;
  queue.volume = 100;
});

client.distube.on("finish", (message, queue) =>
  message.channel.send('Music has finished. Do \`t!leave-channel\` to make me leave the channel!')
)

client.distube
  .on("playSong", (message, queue, song) => {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:disc:888812013684412466> Playing \`${song.name}\`.\nDuration: \`${song.formattedDuration}\`\n${status(queue)}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(embed)
  })
  .on("addSong", (message, queue, song) => {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:disc:888812013684412466> Added \`${song.name}\` to the queue.\nDuration: \`${song.formattedDuration}\`\n${status(queue)}`)
      .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(embed)

      .on('error', (channel, error) => {
        client.channels.cache.get('869646554087186453').send(`An error encoutered: ${error.slice(0, 1979)}`)
      })




  })




client.on('guildDelete', guild => {
  client.channels.cache.get('863650833531011092').setName(`Servers: ${client.guilds.cache.size}`)
})

client.on('message', async message => {

  let prefix = db.get(`prefix`)
  if (!prefix) {
    prefix = 't!'
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

  let command = client.commands.get(cmd);
  if (!command) return message.channel.send(`<:cross:881238098871201802> \`|\` Command \`${message.content}\` was not found!`)

  if (command) {
    command.run(client, message, args)
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

client.on('message', async message => {
  db.add(`globalMessages_${message.author.id}`, 1)

  db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)

  const swears = ['4r5e', '5h1t', '5hit', 'a55', 'anal', 'anus', 'ar5e', 'arrse', 'arse', 'ass-fucker', 'asses', 'assfucker', 'assfukka', 'asshole', 'assholes', 'asswhole', 'a_s_s', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'ballbag', 'ballsack', 'bastard', 'beastial', 'beastiality', 'bellend', 'bestial', 'bestiality', 'bi+ch', 'biatch', 'bitch', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bloody', 'blow job', 'blowjob', 'blowjobs', 'boiolas', 'bollock', 'bollok', 'boner', 'boob', 'boobs', 'booobs', 'boooobs', 'booooobs', 'booooooobs', 'breasts', 'buceta', 'bugger', 'bunny fucker', 'butt', 'butthole', 'buttmunch', 'buttplug', 'bullshit', 'c0ck', 'c0cksucker', 'carpet muncher', 'cawk', 'chink', 'cipa', 'cl1t', 'clit', 'clitoris', 'clits', 'cnut', 'cock', 'cock-sucker', 'cockface', 'cockhead', 'cockmunch', 'cockmuncher', 'cocks', 'cocksuck ', 'cocksucked ', 'cocksucker', 'cocksucking', 'cocksucks ', 'cocksuka', 'cocksukka', 'cok', 'cokmuncher', 'coksucka', 'coon', 'cox', 'crap', 'cum', 'cummer', 'cumming', 'cums', 'cumshot', 'cunilingus', 'cunillingus', 'cunnilingus', 'cunt', 'cuntlick ', 'cuntlicker ', 'cuntlicking ', 'cunts', 'cyalis', 'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dickhead', 'dildo', 'dildos', 'dink', 'dinks', 'dirsa', 'dog-fucker', 'doggin', 'dogging', 'donkeyribber', 'dyke', 'ejaculate', 'ejaculated', 'ejaculates ', 'ejaculating ', 'ejaculatings', 'ejaculation', 'ejakulate', 'f u c k', 'f u c k e r', 'f4nny', 'fag', 'fagging', 'faggitt', 'faggot', 'faggs', 'fagot', 'fagots', 'fags', 'fanny', 'fannyflaps', 'fannyfucker', 'fanyy', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'feck', 'fecker', 'felching', 'fellate', 'fellatio', 'fingerfuck ', 'fingerfucked ', 'fingerfucker ', 'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ', 'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker', 'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ', 'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuk', 'fuker', 'fukker', 'fukkin', 'fuks', 'fukwhit', 'fukwit', 'fux', 'fux0r', 'f_u_c_k', 'gangbang', 'gangbanged ', 'gangbangs ', 'gaylord', 'gaysex', 'goatse', 'god-dam', 'god-damned', 'goddamn', 'goddamned', 'hardcoresex ', 'heshe', 'hoar', 'hoare', 'hoer', 'hore', 'horniest', 'horny', 'hotsex', 'jack-off ', 'jackoff', 'jap', 'jerk-off ', 'jism', 'jiz ', 'jizm ', 'jizz', 'kawk', 'knobead', 'knobed', 'knobend', 'knobhead', 'knobjocky', 'knobjokey', 'kock', 'kondum', 'kondums', 'kum', 'kummer', 'kumming', 'kums', 'kunilingus', 'l3i+ch', 'l3itch', 'labia', 'lust', 'lusting', 'm0f0', 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'masochist', 'master-bate', 'masterb8', 'masterbat*', 'masterbat3', 'masterbate', 'masterbation', 'masterbations', 'masturbate', 'mo-fo', 'mof0', 'mofo', 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked', 'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'muff', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nazi', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers ', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'numbnuts', 'nutsack', 'orgasim ', 'orgasims ', 'orgasm', 'orgasms ', 'p0rn', 'pawn', 'pecker', 'penis', 'penisfucker', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'pigfucker', 'pimpis', 'pisser', 'pissers', 'pisses ', 'pissflaps', 'pissin ', 'pissing', 'pissoff ', 'porn', 'porno', 'pornography', 'pornos', 'prick', 'pricks ', 'pron', 'pube', 'pusse', 'pussi', 'pussies', 'pussy', 'pussys ', 'rectum', 'retard', 'rimjaw', 'rimming', 's hit', 's.o.b.', 'sadist', 'schlong', 'screwing', 'scroat', 'scrote', 'scrotum', 'sh!+', 'sh!t', 'sh1t', 'shag', 'shagger', 'shaggin', 'shagging', 'shemale', 'shi+', 'shit', 'shitdick', 'shite', 'shited', 'shitey', 'shitfuck', 'shitfull', 'shithead', 'shiting', 'shitings', 'shits', 'shitted', 'shitter', 'shitters ', 'shitting', 'shittings', 'shitty ', 'skank', 'slut', 'sluts', 'smegma', 'smut', 'snatch', 'son-of-a-bitch', 'spunk', 's_h_i_t', 't1tt1e5', 't1tties', 'teets', 'teez', 'testical', 'testicle', 'tit', 'titfuck']


  const swears2 = ['tittywank', 'titwank', 'tosser', 'turd', 'tw4t', 'twat', 'twathead', 'twatty', 'twunt', 'twunter', 'v14gra', 'v1gra', 'vagina', 'vulva', 'w00se', 'wang', 'wank', 'wanker', 'wanky', 'whoar', 'whore', 'willies', 'willy', 'fhek', 'f4ck', 'kuso', 'くそ', 'arsehole', 'stfu']

  const swearing = db.get(`swearing_${message.guild.id}`)

  if (swearing === true) {

    const text = message.content.toLowerCase().split(" ")
    let array = []
    for (i = 0; i < text.length; i++) {
      const word = text[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      const finalword = word.replace(/\s{2,}/g, " ");
      if (swears.includes(finalword)) {
        array.push(finalword)
      }
      if (swears2.includes(finalword)) {
        array.push(finalword)
      }
    }
    if (array.length !== 0) {
      message.delete()
      const warn = await message.channel.send(`<@${message.author.id}>, please do not use swear words in this server!`)
      warn.delete({ timeout: 2000 })
    }
  }

  if (message.content.match(regex) || message.content.match(regex2)) {

    const automodb = require('quick.db');
    const automodlinke = automodb.get(`link_${message.guild.id}`)
    if (automodlinke === true) {
      message.delete()

      const warn = await message.channel.send(`<@${message.author.id}>, please do not send links in this server!`)
      warn.delete({ timeout: 2000 })
    }

  }

})

client.on('messageDelete', message => {
  if (message.author.bot) return;
  const db = require('quick.db')
  const ping = db.get(`ping_${message.guild.id}`)
  if (message.mentions.members.first()) {

    const member = message.mentions.members.first()
    message.channel.send(`${message.author.tag} just ghost pinged ${member.user.tag}`)
  }

})

client.on('messageUpdate', function(oldMessage, newMessage) {
  if (oldMessage.author.bot) return;
  const db = require('quick.db')
  const ping = db.get(`ping_${oldMessage.guild.id}`)
  if (oldMessage.mentions.members.first() !== undefined && newMessage.mentions.members.first() === undefined) {
    const member = oldMessage.mentions.members.first()
    newMessage.channel.send(`${newMessage.author.tag} just ghost pinged ${member.user.tag}`)
  }
})


client.on('guildMemberAdd', async member => {

  const welcomechannel = db.get(`welcomechannel_${member.guild.id}`)

  const embed = new Discord.MessageEmbed()
    .setTitle('New Member')
    .setDescription(`${member.username} joined ${member.guild.name}, which now has ${member.guild.memberCount}`)
    .setImage(`https://luminabot.xyz/api/image/welcomecard?middle=${member.username}&avatar=${member.avatarURL()}&footer=${member.guild.name}+now+has+${member.guild.memberCount}+members!`)

  welcomechannel.send(embed)

})


// Spam Detection

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
  warnThreshold: 4,
  kickThreshold: 5,
  banThreshold: 6,
  maxInterval: 1000,
  warnMessage: '{@user}, please stop spamming!',
  kickMessage: '**{user_tag}** has been kicked for spamming.',
  banMessage: '**{user_tag}** has been banned for spamming.',
  maxDuplicatesWarning: 7,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 12,
  exemptPermissions: ['ADMINISTRATOR'],
  ignoreBots: true,
  verbose: true,
  ignoredUsers: ['815878862075985971', '585835814743834661'],
});

client.on('message', async message => {
  antiSpam.message(message)

  // Anti Ping
  const mentionedMember = message.mentions.members.first()
  const role = db.get(`antirole_${message.guild.id}`)
  const guild = client.guilds.cache.get('845327056987619358')
  const devrole = guild.roles.cache.get('845327057013178380')

  if (mentionedMember) {
    if (mentionedMember.roles.cache.has(role.id || devrole.id)) {
      const noEmbed = new Discord.MessageEmbed()
        .setDescription(`${message.author.tag}, please do not ping this user/role.`)
      message.channel.send(noEmbed)
    }
  }
})




client.login(mySecret)