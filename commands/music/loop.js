const Discord = require('discord.js');
module.exports = {
  name: "loop",
  description: "Loop the queue!",
  usage: '1 = Song\n2 = Queue\n0 = No Loop',
  run: async(client, message, args) => {

    let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send({content: "Set repeat mode to `" + mode + "`"});

  }
  }