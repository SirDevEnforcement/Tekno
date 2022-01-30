const status = (queue) =>
  `Volume: \`${queue.volume}%\` | Loop: \`${
    queue.repeatMode
      ? queue.repeatMode == 2
        ? "All Queue"
        : "This Song"
      : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
const Discord = require('discord.js');
const { SpotifyPlugin } = require('@distube/spotify');

module.exports = async(client) => {
  const Distube = require("distube").default;

  const distube = new Distube(client, {
  emitNewSongOnly: false,
  searchSongs: 0,
	plugins: [new SpotifyPlugin()]
});
client.distube = distube;
distube.on("initQueue", queue => {
    queue.autoplay = false;
    queue.volume = 100;
});


  distube.on("playSong", (queue, song) => {
  let playembed = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle(`🎵 Playing `)
    .setThumbnail(song.thumbnail)
    .setDescription(`[${song.name}](${song.url})`)
    .addField("Requested By", `${song.user}`, true)
    .addField("Duration", `${song.formattedDuration.toString()}`, true)

  queue.textChannel.send({ embeds: [playembed] });
});
distube.on("addSong", (queue, song) => {
  let playembed = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle(`🎵 Added to Queue `)
    .setThumbnail(song.thumbnail)
    .setDescription(`[${song.name}](${song.url})`)
    .addField("Requested By", `${song.user}`, true)
    .addField("Duration", `${song.formattedDuration.toString()}`, true)

  queue.textChannel.send({ embeds: [playembed] });
});
}