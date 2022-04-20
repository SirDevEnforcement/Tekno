const Discord = require("discord.js")

module.exports = {
    name: "stop",
    description: "Stops playing a song!",
    timeout: 5000,
    run: async (client, interaction) => {
        const queue = await client.distube.getQueue(interaction)
        const voiceChannel = interaction.member.voice.channel
        if (!voiceChannel) {
            return interaction.reply({ content: "Please join a voice channel!", ephemeral: true })
        }
        if (!queue) {
            const queueError = new Discord.MessageEmbed()
                .setDescription("There is nothing playing!")
                .setColor("RANDOM")
            return interaction.reply({ embeds: [queueError] })
        }
        if (interaction.member.guild.me.voice.channelId !== interaction.member.voice.channelId) {
            return interaction.reply({ content: "You are not on the same voice channel as me!", ephemeral: true })
        }
        await client.distube.stop(interaction)
        await interaction.reply("Music stopped")
        const message = await interaction.fetchReply()
        await message.react("⏹")
    }
}