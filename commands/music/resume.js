const Discord = require('discord.js');
module.exports = {
  name: "resume",
  description: "Resume the current queue!",
  run: async(client, message, args) => {

    let queue = client.distube.getQueue(message.guild.id);
    if (!message.guild.me.voice.channel) {
      return message.reply(`>>> Nothing Playing`);
    }
    queue.resume();

  }
  }