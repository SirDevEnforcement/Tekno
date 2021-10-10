const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "links",
    description: "Invite the bot!",

    run: async (client, message, args) => {
        const invite = new MessageActionRow().addComponents(new MessageButton().setLabel("Invite the bot!").setStyle("LINK").setURL("https://tekno-the-bot.repl.co/invite/index.html"));

        const server = new MessageActionRow().addComponents(new MessageButton().setLabel("Support Server!").setStyle("LINK").setURL("https://discord.gg/FKbD3sjAVD"));

        const website = new MessageActionRow().addComponents(new MessageButton().setLabel("Website!").setStyle("LINK").setURL("https://tekno-the-bot.repl.co"));

        message.channel.send({ components: [invite, server, website]})
    },
};
