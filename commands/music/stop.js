const Discord = require('discord.js');
module.exports = {
  name: "stop",
  description: "Stop the music!",
  run: async(client, message, args) => {

    let queue = client.distube.getQueue(message.guild.id);
    if (!message.guild.me.voice.channel) {
      return message.reply(`>>> Nothing Playing`);
    }
    queue.stop();

  }
  }