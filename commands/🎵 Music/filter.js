const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "filter",
  category: "🎵 Music",
  run: async (client, message, args) => {

    const command = args.shift();

    let filter = client.distube.setFilter(message, command);
    message.channel.send("Current queue filter: " + (filter || "Off"));


  }
}