const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "autoplay",
  category: "🎵 Music",
  run: async (client, message, args) => {

    const command = args.shift();

    let mode = client.distube.toggleAutoplay(message);
    message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");


  }
}