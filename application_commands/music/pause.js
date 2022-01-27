const Discord = require('discord.js');
module.exports = {
  name: "pause",
  description: "Pause the current queue!",
  run: async(client, interaction, args) => {

    let queue = client.distube.getQueue(interaction.guild.id);
    queue.pause();

  }
  }