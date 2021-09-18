const Discord = require("discord.js")
const inlinereply = require('discord-reply');

module.exports = {
  name: "nuke",
  category: '<:Stage:881900881635852308> Owner',
  run: async (client, message, args) => {

    if(!message.author.id === '815878862075985971');
    const nukei = new Discord.MessageEmbed()
      .setDescription("Channel Nuked by: " + message.author.username)
      .setImage("https://media.discordapp.net/attachments/863674695643037726/865526577030365195/nuke.gif")
      .setTimestamp()
      .setColor("RED")
    message.channel.clone({ position: message.channel.rawPosition }).then(ch => { ch.send(nukei); })
    message.channel.delete();



  }
}