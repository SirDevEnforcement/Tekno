const Discord = require("discord.js")
const inlinereply = require('discord-reply');

module.exports = {
  name: "nuke",
  aliases: ['n'],
  category: '<:Stage:881900881635852308> Owner',
  run: async (client, message, args) => {

    const owners = [
      "815878862075985971",
      "497200251661320212",
      "585835814743834661",
      "788504211704512543",
      "691648449967554590",
      "381710555096023061"
    ]
    if (!owners.includes(message.author.id)) return;
    const nukei = new Discord.MessageEmbed()
      .setDescription("Channel Nuked by: " + message.author.username)
      .setImage("https://media.discordapp.net/attachments/863674695643037726/865526577030365195/nuke.gif")
      .setTimestamp()
      .setColor("RED")
    message.channel.clone({ position: message.channel.rawPosition }).then(ch => { ch.send(nukei); })
    message.channel.delete();



  }
}