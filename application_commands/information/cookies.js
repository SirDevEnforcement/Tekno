const { CommandInteraction, MessageEmbed } = require("discord.js");
const DB = require("../../Schemas/CookiesDB");

module.exports = {
    name: "cookies",
    description: "Show cookies",
    options: [{ name: "target", description: "Target user", type: "USER" }],
    run: async (client, interaction) => {
        const Target = interaction.options.getMember("target") || interaction.member;
        const UserCookies = await DB.findOne({ GuildID: interaction.guild.id, UserID: Target.id });

        if(!UserCookies) {
            return interaction.reply({content: "The user does not have cookies.", ephemeral: true});
        } else {
            return interaction.reply({embeds: [new MessageEmbed().setColor("BLURPLE")
            .setDescription(`**User**: ${Target.displayName}\n**Cookies**: \`${UserCookies.Cookies}\``)
            .setThumbnail(Target.displayAvatarURL({dynamic: true, size: 512})).setTitle("🍪 __**Cookies**__ 🍪")]});
        }
    }
}