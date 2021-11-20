const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "To get the latency of the bot",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    execute: async (client, interaction) => {
        await interaction.deferReply().catch(() => {});
        await interaction.editReply({
            content: "Pong!"
        }).catch(() => {});
    }
}