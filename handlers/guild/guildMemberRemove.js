const { GuildMember, MessageEmbed } = require("discord.js");
const { drawCard, Text } = require('discord-welcome-card');

module.exports = async(client) => {
    client.on('guildMemberRemove', async member => {
        const { guild } = member;

        if(member.user.bot) return;

        const image = await drawCard({
            theme: "dark",
            blur: true,
            rounded: true,
            text: {
                title: new Text('Goodbye', 250, 100)
                    .setFontSize(35)
                    .setStyle(`#03B0CC`),
                text: new Text(member.user.username, 250, 170),
                subtitle: `Hope you had an amazing time here!`,
                color: `#DDDDDD`,
                font: 'Panton Black Caps',
            },
            avatar: {
                image: member.user.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 2048,
                }),
                borderRadius: 1, // Corner radius of the avatar (0.5 = 50% rounded)
                imageRadius: 0.75, // Size of the avatar (0.85 = 85%)
                outlineWidth: 10,
                outlineColor: "#5865F2",
            },
            background: "https://cdn.discordapp.com/attachments/894164132704714764/965633454563815524/background.png",
        });



        member.guild.systemChannel.send({
            files: [
              {
                attachment: image
              }
            ]
        }).catch(() => {})
    })
}