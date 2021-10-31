const Discord = require('discord.js');
module.exports = {
  name: "volume",
  description: "Change the volume!",
  run: async(client, message, args) => {

        let amount = parseInt(args[0]);
    let queue = client.distube.getQueue(message.guild.id);
    queue.setVolume(amount);
    message.channel.send(`>>> Volume set to ${amount}`);

  }
  }