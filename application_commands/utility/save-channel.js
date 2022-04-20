const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name: "save",
    description: "Saves the channel in a HTML transcript",
    run: async (interaction) => {
        const { channel } = interaction;
        
        const reply = new MessageEmbed()
            .setTitle(`Chat saved`)
            .setColor("BLUE");
            
        
        const attachment = await createTranscript(channel, {
            limit: -1,
            returnBuffer: false,
            fileName: `${channel.name}.html`,
            });
    
        
            await interaction
        .reply({
            embeds: [reply],
            files: [attachment],
          });
       

        

    }
}