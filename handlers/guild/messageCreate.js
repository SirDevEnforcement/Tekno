const Discord = require('discord.js');
const db = require('quick.db');
const premium = require('../../database/premium.json');
const maintenance = require('../../database/maintenance.json');
const blacklisted = require('../../database/blacklisted.json');
module.exports = async(client) => {

client.on('messageCreate', async message => {

  if(!message.guild) return;

      if(message.content.toLowerCase() === `<@!${client.user.id}>`) {
            const embed = new Discord.MessageEmbed()
      .setAuthor(`Help Menu`, client.user.displayAvatarURL())
      .setTitle('Click here!')
      .setDescription(`<:blurple_guide:929366443869487114> Hello! I'm **Tekno**, a feature-rich multi-purpose bot! To use **all** my commands, run the command \`${client.prefix}help\`!`)
      .setURL(`https://tekno-the-bot.repl.co`)

      if(premium.includes(message.guild.id)) {
        embed.addField('<a:boost:929365409612845067> Premium', 'This server is a premium server, congrats!')
      }
    message.channel.send({embeds: [embed]})

      }
 

  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);

  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(client.prefix)) return;

  if (!message.member) {
    message.member = await message.guild.fetchMember(message);
  }

  if (!message.guild) return;

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd)

      const embed3 = new Discord.MessageEmbed()
      .setTitle('Blacklisted')
      .setDescription('<:blurple_staff:929366404354953287> You are blacklisted from the bot! To appeal, go to the link below and speak to the (main) developer!\n\n> https://discord.gg/B82QFdqPPH')

       const embed2 = new Discord.MessageEmbed()
       .setTitle('Command Not Found')
      .setDescription(`<:cross:926839972558954497> \`${cmd}\` was not found! Try doing \`t!help\` to find the correct command!`)

	const Converter = require('timestamp-conv');
const embed = new Discord.MessageEmbed()
    .setDescription(`**Commmand:**\n> ${String(message.content).substr(0, 2000)}\n**User:** \n> ${message.author.username}#${message.author.discriminator} (\`${message.author.id}\`)\n**Guild:** \n> ${message.guild.name} \`(${message.guild.id})\`\n**Channel ID:** \n> \`${message.channel.id}\`\n**Created at:**\n> ${new Converter.timestamp(message.author.createdAt).formatSeconds}`)
           //Bot-command-notify\\
  const webhookClient = new Discord.WebhookClient({ url: process.env['webhook']});

//sending the webhookmessage

  if (command) {
  if(blacklisted.includes(message.author.id)) {
      message.channel.send({embeds: [embed3]})
    } else {
          command.run(client, message, args)
    console.log(`${command.name} was used!`)
    db.add(`usage`, 1)
		webhookClient.send({
 username: message.author.username+"#"+message.author.discriminator,
 avatarURL: message.author.avatarURL(),
 embeds:[embed]
  })
    }
  } else {
    message.channel.send({embeds: [embed2]})
  }


// Other

  if(!message.guild) return;
  db.add(`globalMessages_${message.author.id}`, 1)

  db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1)

})
}