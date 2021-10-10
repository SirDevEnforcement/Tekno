const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "scorpandmira",
    description: "Annoy Scorprian", 
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('Scorp and mira!')
    .setImage(`https://cdn.discordapp.com/attachments/751550749955194920/883262350545797140/6712b769a04fe185a2381b6eec303.png`)

      message.channel.send({ embeds: [embed] });
  
  
}}