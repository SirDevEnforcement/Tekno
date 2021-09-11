const mySecret = process.env['token'];
const Discord = require("discord.js");
const fs = require("fs");
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });
const db = require('quick.db');
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

  console.log('Sup')
})


client.on('guildDelete', guild => {
  client.channels.cache.get('863650833531011092').setName(`Servers: ${client.guilds.cache.size}`)
})

client.on('message', async message => {
  const blacklisted = db.get(`blacklisted`)
  const Timeout = new Set();
  let prefix = client.prefix
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  if (!message.member) {
    message.member = await message.guild.fetchMember(message);
  }

  if (!message.guild) return;

  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  if (!command) return message.channel.send(`<:cross:881238098871201802> \`|\` Command \`${message.content}\` was not found!`)

  if (command) {
    command.run(client, message, args)
  }
})

client.on('guildMemberUpdate', (oldMember, newMember, member) => {
  if (newMember.username && oldMember.username !== newMember.username) {
    if (newMember.user.customStatus.includes('')) {
      const Role1 = member.guild.roles.cache.get("686177831998193694");
      member.roles.add(Role1).catch(console.error);
    }
  }
});

client.on('messageDelete', message => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.author.member,
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
    if (ping !== true);

    const member = message.mentions.members.first()
    message.channel.send(`${message.author.tag} just ghost pinged ${member.user.tag}`)
  }

})

client.on('messageUpdate', function(oldMessage, newMessage) {
  if (oldMessage.author.bot) return;
  const db = require('quick.db')
  const ping = db.get(`ping_${oldMessage.guild.id}`)
  if (oldMessage.mentions.members.first() !== undefined && newMessage.mentions.members.first() === undefined) {
    if (ping !== true);
    const member = oldMessage.mentions.members.first()
    newMessage.channel.send(`${newMessage.author.tag} just ghost pinged ${member.user.tag}`)
  }

})



client.login(mySecret)