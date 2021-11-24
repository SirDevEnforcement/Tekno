const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "",
    description: ",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    execute: async (client, interaction) => {
        await interaction.deferReply().catch(() => {});
    }
}