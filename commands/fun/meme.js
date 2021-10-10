const random = require("something-random-on-discord").Random;
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "meme",
    description: "Get a funny meme!", 
  run: async (client, message, args) => {


    let data = await random.getMeme()
      message.channel.send({ embeds: [embed] });


  }
}