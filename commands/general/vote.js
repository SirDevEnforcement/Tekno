const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vote",
  aliases: ['v'],
    description: "Vote for Tekno!", 
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('Vote for **Tekno**')
    .setDescription(`Please vote for Tekno on the links below, it is much appreciated!`)
    .addField(`Top.gg`, `https://top.gg/bot/888732127586316289/vote`)
    .addField(`Radar Bot Directory`, `https://radarbotdirectory.xyz/bot/888732127586316289/vote`)
    .setFooter('Thanks for voting!')
  message.channel.send({ embeds: [embed] });
  }
}