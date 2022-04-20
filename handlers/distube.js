module.exports = async(client) => {
	const Distube = require("distube")
const { SoundCloudPlugin } = require("@distube/soundcloud")
const { SpotifyPlugin } = require("@distube/spotify")
	const { MessageEmbed } = require('discord.js')
/* eslint new-cap: ["error", { "properties": false }] */
client.distube = new Distube.default(client, {
    youtubeDL: false,
    leaveOnEmpty: true,
    emptyCooldown: 30,
    leaveOnFinish: false,
    emitNewSongOnly: true,
    updateYouTubeDL: true,
    nsfw: true,
    youtubeCookie: process.env.ytcookie,
    plugins: [new SoundCloudPlugin(), new SpotifyPlugin()]
})
const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\` | Filter: \`${queue.filters.join(", ") || "Off"}\``
// DisTube event listeners
client.distube
    .on("playSong", (queue, song) => {
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(song.thumbnail)
            .setDescription(`[${song.name}](${song.url})`)
            .addField("**Views:**", song.views.toString(), true)
            .addField("**Like:**", song.likes.toString(), true)
            .addField("**Duration:**", song.formattedDuration.toString(), true)
            .addField("**Status**", status(queue).toString())
            .setFooter({ text: `Requested by ${song.user.username}`, iconURL: song.user.avatarURL() })
            .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("addSong", (queue, song) => {
        const embed = new MessageEmbed()
            .setTitle(":ballot_box_with_check: | Added song to queue")
            .setDescription(`\`${song.name}\` - \`${song.formattedDuration}\` - Requested by ${song.user}`)
            .setColor("RANDOM")
            .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("addList", (queue, playlist) => {
        const embed = new MessageEmbed()
            .setTitle(":ballot_box_with_check: | Add list")
            .setDescription(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`)
            .setColor("RANDOM")
            .setTimestamp()
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("error", (textChannel, e) => {
        console.error(e)
        textChannel.send(`An error encountered: ${e}`)
    })
    // .on("finish", queue => queue.textChannel.send("***No more song in queue. Leaving the channel***"))
    .on("finishSong", queue => {
        const embed = new MessageEmbed()
            .setDescription(`:white_check_mark: | Finished playing \`${queue.songs[0].name}\``)
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("disconnect", queue => {
        const embed = new MessageEmbed()
            .setDescription(":x: | Disconnected from voice channel")
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("empty", queue => {
        const embed = new MessageEmbed()
            .setDescription(":x: | Channel is empty. Leaving the channel!")
        queue.textChannel.send({ embeds: [embed] })
    })
    .on("initQueue", (queue) => {
        queue.autoplay = false
        queue.volume = 50
    })
}