const Discord = require('discord.js');
const db = require('quick.db');
const premium = require('../../database/premium.json');
const maintenance = require('../../database/maintenance.json');
module.exports = async(client) => {

client.on('messageCreate', async message => {
  
  const prefix = db.get(`prefix_${message.guild.id}`) ? db.get(`prefix_${message.guild.id}`) : 't!'

      if(message.content.toLowerCase().includes('<@!888732127586316289>')) {
            const embed = new Discord.MessageEmbed()
      .setAuthor(`Help Menu`, client.user.displayAvatarURL())
      .setDescription(`<:leo_member:892325715494711307> Hello! I'm **Tekno**, a feature-rich multi-purpose bot! To use **all** my commands, run the command \`${prefix}help\`!`)
      .setFooter(`dsc.gg/tekno`)

      if(premium.includes(message.guild.id)) {
        embed.addField('<:premium:909142147083673610> Premium', 'This server is a premium server, congrats!')
      }
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

        const embed2 = new Discord.MessageEmbed()
      .setTitle(`Command used`)
      .setDescription(`Name: ${command.name}`)
      .addField(`Guild`, `Guild ID: ${message.guild.id}\nGuild Name:${message.guild.name}\nOwner ID:${message.guild.ownerId}`)
      .addField(`Channel`, `Channel ID: ${message.channel.id}\nChannel Name: ${message.channel.name}\nMessage ID:${message.id}`)

  if (command) {
    if(maintenance.includes("true")) { message.channel.send({content: `Maintenance is going on! You cannot use commands until maintenance mode ends.`})
    } else {
          command.run(client, message, args)
    console.log(`${command.name} was used!`)
    db.add(`usage`, 1)
    client.channels.cache.get('894164132704714765').send({embeds: [embed2]})
    }
  } else if(!command) {
    message.channel.send({content: '<:cross:881238098871201802> | Command not found!'})
  }


// Other

  if(!message.guild) return;
  db.add(`globalMessages_${message.author.id}`, 1)

  db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)


  if(!message.guild || message.guild.id === '735069395294093415') return;
  xp(message)
  if(message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  var level = db.get(`level_${message.guild.id}_${message.author.id}`) || 1;
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
  }
  }

})
}