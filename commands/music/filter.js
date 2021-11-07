// [`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`]
const Discord = require('discord.js');
module.exports = {
  name: "filter",
  description: "Change the filter!",
  usage: '[3d/bassboost/echo/karaoke/nightcore/vaporwave]',
  run: async(client, message, args) => {

    if([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(args[0])) {
       let filter = client.distube.setFilter(message, args[0]);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }

  }
  }