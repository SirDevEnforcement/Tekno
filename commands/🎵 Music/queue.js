const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "queue",
  category: "🎵 Music",
  run: async (client, message, args) => {

    let queue = client.distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));


  }
}