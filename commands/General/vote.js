const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "vote",
  category: "General",
  description: "Get the links to vote for Tekno!",
  usage: "t!vote",
  timeout: 5000,
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
    .setTitle('Vote for **Tekno**')
    .setDescription('You can vote [here](https://list.dinolist.ga/bot/686177831998193694/vote) \n and [here](https://radarbotdirectory.xyz/bot/686177831998193694/vote)')
    .setFooter('Thanks for voting!')
    message.channel.send(embed)
  }
}