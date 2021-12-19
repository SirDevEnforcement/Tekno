const Discord = require('discord.js');
module.exports = {
  name: "say",
  description: "Say something!",
  run: async(client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return;

    if(!message.mentions.channels.first() === args[0] || !args[0]) return message.channel.send({content: `You need to mention a channel (first arguement)!`});

    const sliced = args.slice(1).join(" ")

    const channel = message.mentions.channels.first();

    channel.send({content: sliced})




  }
  }